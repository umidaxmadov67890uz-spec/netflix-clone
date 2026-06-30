import { Link, useParams } from "react-router";
import useGetData from "../../hooks/useGetData";
import { GENRES } from "../../services/tmdb";
import MovieGrid from "../../components/movie/MovieGrid";
import { useContext, useEffect, useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { GenresDataContext } from "../../context/GenresDataContext";

function GenrePage() {
  const { type, id, genre } = useParams();
  const [pageNumber, setPageNumber] = useState(1);
  const { genresData, setGenresData } = useContext(GenresDataContext);
  const { data, loader } = useGetData({
    url: `${GENRES(type, id)}${pageNumber}`,
  });
  const listRef = useRef(null);
  const scrollPos = useRef(0);

  useEffect(() => {
    setGenresData([])
  }, [id])

  useEffect(() => {
    if (data) setGenresData((prev) => [...prev, ...data]);
    if(data) window.scrollTo(0, scrollPos.current)
  }, [data]);

  const uniqueMovies = genresData?.filter(
    (movie, index, arr) => index === arr.findIndex((m) => m.id === movie.id)
  );

  if (loader) return null;

  function handleMore() {
    scrollPos.current = window.scrollY;
    setPageNumber((prev) => prev + 1);
  }
  return (
    <div ref={listRef} className="pt-15">
      <div className="container mx-auto px-2 xl:px-15 pb-5">
        <h1 className="text-white text-5xl font-bold">{genre?.replaceAll("-", " ")}</h1>
        <p className="text-slate-100 my-2">
          <Link to={"/"}>
            <span className="capitalize">home page</span>
          </Link>{" "}
          / <span className="text-slate-400">{genre}</span>
        </p>
      </div>
      <div>
        <MovieGrid data={uniqueMovies} type={type} />
      </div>
      <div>
        <button
          onClick={handleMore}
          className="py-2 w-full bg-slate-800 text-white text-nowrap flex items-center justify-center gap-x-2 mb-20 cursor-pointer"
        >
          Show more <FaChevronRight className="rotate-90" />
        </button>
      </div>
    </div>
  );
}

export default GenrePage;
