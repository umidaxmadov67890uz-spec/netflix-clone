import { useContext, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { IoPlayOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import { UserFavoritesContext } from "../../context/UserFavoritesContext";
import { LuMinus } from "react-icons/lu";
import { IMG_URL } from "../../services/tmdb";

function MovieItem(props) {
  const { data, type } = props;
  const [isActive, setIsActive] = useState(false);
  const { userFavoritesData, setUserFavoritesData } = useContext(UserFavoritesContext);
  const navigate = useNavigate();

  const isFavorite = userFavoritesData?.some((e) => e?.id === data?.id);

  function handleNavigate() {
    if (type === "movie") {
      navigate(`/movie/detail/${data?.id}`);
    } else if (type === "tv") {
      navigate(`/tv/detail/${data?.id}`);
    }
  }

  function addFavorites(e) {
    e.stopPropagation();
    setUserFavoritesData((prev) =>
      prev?.some((favorite) => favorite?.id === data?.id)
        ? prev?.filter((favorite) => favorite?.id !== data?.id)
        : [...prev, { id: data?.id, type: type }],
    );
  }

  return (
    <>
      {data?.backdrop_path && (
        <div
          onClick={handleNavigate}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          className="bg-black h-42 hover:h-48 min-w-full hover:shadow-sm shadow-black overflow-hidden hover:scale-110 transition-all duration-200 cursor-pointer"
        >
          <div
            className="bg-no-repeat bg-center bg-cover w-full h-42 z-10"
            style={{
              backgroundImage: `url(${IMG_URL}${data?.backdrop_path})`,
            }}
          >
            {isActive && (
              <div className="w-full h-full flex items-center justify-center gap-x-5 pt-5 bg-[black]/15">
                <button
                  onClick={(e) => addFavorites(e)}
                  className="text-3xl text-slate-200 hover:text-slate-50 bg-[black]/50 hover:bg-[black]/60 p-2 rounded-full border border-slate-200 cursor-pointer transition-all duration-200"
                >
                  {isFavorite ? <LuMinus /> : <FiPlus />}
                </button>
                <button className="text-3xl text-slate-200 hover:text-slate-50 bg-[black]/50 hover:bg-[black]/60 flex items-center justify-center text-center w-12 h-12 pl-0.5 rounded-full border border-slate-200 cursor-pointer transition-all duration-200">
                  <IoPlayOutline className="w-8 h-8" />
                </button>
              </div>
            )}
          </div>
          <p className="text-white line-clamp-1">
            {data?.title ||
              data?.original_title ||
              data?.name ||
              data?.original_name}
          </p>
        </div>
      )}
    </>
  );
}

export default MovieItem;
