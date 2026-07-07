import { useState } from "react";
import useGetData from "../../hooks/useGetData";
import { IMG_URL } from "../../services/tmdb";
import { FaPlay } from "react-icons/fa";

function Episodes(props) {
  const { episodesData, activeEpisodeNumber, setActiveEpisodeNumber, play} = props;
  const [open, setOpen] = useState(null);
  const { loader, data } = useGetData({ url: episodesData });

  if (loader) return null;

  function runtime(time) {
    const hour = Math.floor( time / 60);
    const minute = time - 60 * hour;
    return `${hour ? hour + " hour" : ""} ${minute ? minute + " minute" : ""}`;
  }

  function handlePlay(e){
    e.stopPropagation();
    play()
  } 

  // console.log(data);
  return (
    <div className="flex flex-nowrap items-end gap-x-5 py-2 mt-2 h-62 overflow-x-scroll scrollbar-none">
      {data?.episodes?.map((episode) => (
        <div
          onClick={() => setActiveEpisodeNumber(episode?.id)}
          key={episode?.id}
          className={`w-68 h-50 flex flex-col cursor-pointer transition-all duration-500`}
        >
          <div
            onMouseEnter={() => setOpen(episode?.id)}
            onMouseLeave={() => setOpen(null)}
            style={{ backgroundImage: `url(${IMG_URL}${episode?.still_path})` }}
            className={`bg-center bg-cover bg-no-repeat h-48 w-68 rounded-xl overflow-hidden hover:scale-105 hover:-translate-y-1.5 ${activeEpisodeNumber === episode?.id ? "border-2 border-red-600" : ""} transition-all duration-300`}
          >
            {open === episode?.id && (
              <div className="w-full h-full bg-black/50 flex items-center justify-center relative transition-all duration-500">
                <p className="text-white font-bold absolute top-1 left-1">{runtime(episode?.runtime)}</p>
                <button onClick={(e) => handlePlay(e)} className="text-3xl text-slate-200 hover:text-slate-50  flex items-center justify-center text-center w-12 h-12 cursor-pointer transition-all duration-200">
                  <FaPlay className="w-8 h-8" />
                </button>
              </div>
            )}
          </div>
          <p className="text-white line-clamp-1text-2xl font-bold">
            Episode {episode?.episode_number}
          </p>
          <p className="text-slate-400 line-clamp-1">{episode?.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Episodes;
