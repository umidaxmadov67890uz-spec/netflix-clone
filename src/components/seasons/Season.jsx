import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import Episodes from "../episodes/Episodes";
import { TV } from "../../services/tmdb";

function Season(props) {
  const {seasonsId, item, seasonNumber, activeEpisodeNumber, setActiveEpisodeNumber} = props;
  const {season} = TV
  const [open, setOpen] = useState(seasonNumber === item?.season_number ? true : false);
  const episodeNumberData = season(seasonsId, item?.season_number)

  return (
    <div
      className={`py-1 px-4 w-full flex flex-col bg-slate-800 rounded-xl border border-slate-800 cursor-pointer`}
    >
      <div className="flex items-center justify-between" onClick={() => setOpen(prev => !prev)}>
        <p className={"text-white text-nowrap"}>{item?.name}</p>
        <FaChevronRight
          className={`text-white ${open ? "-rotate-90" : "rotate-90"}`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"}`}
      >
        {
            open && <Episodes episodeNumberData={episodeNumberData} activeEpisodeNumber={activeEpisodeNumber} setActiveEpisodeNumber={setActiveEpisodeNumber} />
        }
        
      </div>
    </div>
  );
}

export default Season;
