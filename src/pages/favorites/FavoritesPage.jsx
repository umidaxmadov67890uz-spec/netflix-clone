import { useContext } from "react";
import { UserFavoritesContext } from "./../../context/UserFavoritesContext";
import Favorite from "../../components/favorite/Favorite.jsx";
function FavoritesPage() {
  const { userFavoritesData = [] } = useContext(UserFavoritesContext);

  return (
    <div>
      {userFavoritesData?.length > 0 ? (
        <div className="container mx-auto xl:px-15 pt-20">
          <div className="flex flex-wrap justify-between sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-10 gap-x-4">
            {userFavoritesData?.map((favorite, i) => (
              <div key={i} className="h-50">
                <Favorite id={favorite?.id} type={favorite?.type} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container mx-auto xl:px-15 pt-20 h-[80vh] flex items-center justify-center">
          <h1 className="text-white text-4xl text-center w-96">Favorite movies or TV series, no diamonds</h1>
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
