import { useParams } from "react-router";
import { SEARCH } from "../../services/tmdb";
import useGetData from "../../hooks/useGetData";
import MovieGrid from "../../components/movie/MovieGrid";
import { useState } from "react";

function SearchPage() {
  const { query } = useParams();
  //   const [pageNumber, setPageNumber] = useState(1);
  const [type, setType] = useState("movie");
  const { data, loader } = useGetData({
    url: SEARCH(type, query),
  });
  if (loader) return null;
  console.log(data);
  return (
    <div className="pt-15 container mx-auto px-2 xl:px-15">
      <div>
        <div className="flex items-center gap-x-2 my-5 pl-5">
          <button
            onClick={() => setType("movie")}
            className={`border ${type === "movie" ? "bg-red-600 border-red-600" : "bg-transparent border-slate-400"} text-slate-200 hover:text-slate-100 py-1 px-5 rounded-l-full rounded-r-full cursor-pointer transition-all duration-200`}
          >
            Movie
          </button>
          <button
            onClick={() => setType("tv")}
            className={`border ${type === "tv" ? "bg-red-600 border-red-600" : "bg-transparent border-slate-400"} text-slate-200 hover:text-slate-100 py-1 px-5 rounded-l-full rounded-r-full cursor-pointer transition-all duration-200`}
          >
            TV Show
          </button>
        </div>
        <div>
          {data?.length > 0 ? (
            <MovieGrid data={data} type={"movie"} />
          ) : (
            <div className="w-full flex items-center justify-center">
              <div className=" max-w-md text-center bg-slate-800 py-5 px-12 rounded-xl">
                <h2 className="text-white text-2xl">{`"${query}"`}</h2>
                <p className="text-slate-200 text-lg">
                  Nothing was found according to your request.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
