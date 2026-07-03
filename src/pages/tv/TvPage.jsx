import { useParams } from "react-router";
import { HERO_IMG_URL, TV } from "../../services/tmdb";
import useGetData from "../../hooks/useGetData";
import MovieHero from "../../components/hero/MovieHero";
import Description from "../../components/description/Description";
import AddGenres from "../../components/add-genres/AddGenres";
import Seasons from "../../components/seasons/Seasons";
import YoutubeTrailer from "../../components/trailer/YoutubeTrailer";
import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";

function TvPage() {
  const { details, videos } = TV;
  const { id } = useParams();
  const { loader, data } = useGetData({ url: details(id) });
  const [open, setOpen] = useState(false);

  if (loader) return null;
  const youtubeTrailerData = videos(data?.id);

  // console.log(data)

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
        <MovieHero bgImg={data?.backdrop_path} title={data?.original_name} play={setOpen} />
        <div className="container mx-auto xl:px-15">
          <div>
            <Description
              play={setOpen}
              img={data?.poster_path}
              title={data?.name}
              genres={data?.genres}
              date={data?.last_air_date}
              overview={data?.overview}
              id={data?.id}
              type={"tv"}
            />
          </div>
          <div className="w-full px-4 pb-2 my-5">
            <Seasons
              seasons={data?.seasons}
              seasonNumber={data?.last_episode_to_air?.season_number}
              id={data?.id}
              play={setOpen}
            />
            <div className="my-5 mx-auto w-80 h-50 sm:w-150 sm:h-100 md:w-180 md:h-115 lg:w-245 lg:h-170 xl:w-290 xl:h-190">
              <YoutubeTrailer youtubeTrailerData={youtubeTrailerData} play={false} />
            </div>
          </div>
        </div>
        <div>
          <AddGenres genres={data?.genres} id={data?.id} type={"tv"} />
        </div>
      </div>
    </div>
  );
}

export default TvPage;
