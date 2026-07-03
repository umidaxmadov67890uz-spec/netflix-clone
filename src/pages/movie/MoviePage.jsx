import { useParams } from "react-router";
import { HERO_IMG_URL, MOVIES } from "./../../services/tmdb";
import useGetData from "../../hooks/useGetData";
import MovieHero from "../../components/hero/MovieHero";
import Description from "../../components/description/Description";
import YoutubeTrailer from "../../components/trailer/YoutubeTrailer";
import AddGenres from "../../components/add-genres/AddGenres";
import { FaRegStar } from "react-icons/fa";
import ActersList from "./../../components/acters/ActersList";
import { useEffect, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";

function MoviePage() {
  const { actors, details, videos } = MOVIES;
  const { id, play } = useParams();
  const { loader, data } = useGetData({ url: details(id) });
  const [open, setOpen] = useState(play === "true" ?  true : false);
  // const [play, setPlay] = useState(false)

  const actersData = actors(data?.id);

  useEffect(() => {
    setOpen(play === "true" ?  true : false)
  }, [id])

  if (loader) return null
  const youtubeTrailerData = videos(data?.id);
  console.log(open)
  // <Movie movieData={data} />

  return (
    <div>
      <div
        className={`${open ? "h-screen w-full overflow-hidden z-50 fixed bg-red-400 ?" : "hidden"}`}
      >
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-center"
          style={{
            backgroundImage: `url(${HERO_IMG_URL}${data?.backdrop_path})`,
          }}
        >
          {open && (
            <div className="relative w-full h-full">
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-2xl text-slate-200 hover:text-slate-100 hover:scale-105 absolute top-2 right-2 z-50 bg-black/50 rounded-full cursor-pointer transition-all duration-200"
              >
                <VscChromeClose />
              </button>
              <YoutubeTrailer
                youtubeTrailerData={youtubeTrailerData}
                play={true}
              />
            </div>
          )}
        </div>
      </div>
      <div className={`${open ? "hidden" : ""}`}>
        <MovieHero bgImg={data?.backdrop_path} title={data?.original_title} play={setOpen} />
        <div className="container mx-auto px-2 xl:px-15">
          <div>
            <Description
              play={setOpen}
              img={data?.poster_path}
              title={data?.title}
              genres={data?.genres}
              date={data?.release_date}
              time={data?.runtime}
              overview={data?.overview}
              id={data?.id}
              type={"movie"}
            />
          </div>
          <div className="flex items-center gap-x-4 mt-2">
            <div className="py-3 px-7 bg-gray-800 rounded-xl flex flex-col items-center justify-center">
              <p className="text-white text-2xl font-bold">
                {data?.vote_average.toFixed(1)}
              </p>
              <p className="text-slate-200 text-sm flex items-center gap-x-1">
                <FaRegStar /> IMDb
              </p>
            </div>
            <div className="py-3 px-7 bg-gray-800 rounded-xl flex flex-col items-center justify-center">
              <p className="text-white text-2xl font-bold">${data?.budget}</p>
              <p className="text-slate-200 text-sm">budget</p>
            </div>
            <div className="py-3 px-7 bg-gray-800 rounded-xl flex flex-col items-center justify-center">
              <p className="text-white text-2xl font-bold">${data?.revenue}</p>
              <p className="text-slate-200 text-sm">revenue</p>
            </div>
          </div>
          <div className="my-5 mx-auto w-80 h-50 sm:w-150 sm:h-100 md:w-180 md:h-115 lg:w-245 lg:h-170 xl:w-290 xl:h-190">
            <YoutubeTrailer
              youtubeTrailerData={youtubeTrailerData}
              play={false}
            />
          </div>
          <div className="my-5">
            <ActersList
              actersData={actersData}
              title={"actors who appeared in the film"}
            />
          </div>
        </div>
        <div>
          <AddGenres genres={data?.genres} id={data?.id} type={"movie"} />
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
