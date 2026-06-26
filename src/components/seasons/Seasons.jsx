import { useState } from "react";
import { TV } from "../../services/tmdb";
import Episodes from "../episodes/Episodes";

function Seasons(props) {
  const { seasons, seasonNumber, id } = props;
  const {season} = TV
  const [activeSeasonNumber, setActiveSeasonNumber] = useState(seasonNumber);

  const episodeNumberData = season(id, activeSeasonNumber)


  return (
    <div>
      <div className="flex items-center gap-x-2 pb-3 mb-3 border-b border-slate-700 overflow-x-scroll scrollbar-none transition-all duration-200">
        {seasons?.map((item) => (
          <div
            onClick={() => setActiveSeasonNumber(item?.season_number)}
            key={item?.id}
            className={`py-1 px-4 ${activeSeasonNumber === item?.season_number ? "bg-red-600" : "bg-slate-800"} rounded-r-full rounded-l-full border border-slate-800 cursor-pointer`}
          >
            <p className={"text-white text-nowrap"}>{item?.name}</p>
          </div>
        ))}
      </div>
      <div>
        <Episodes episodeNumberData={episodeNumberData} />
      </div>
      
    </div>
  );
}

export default Seasons;
