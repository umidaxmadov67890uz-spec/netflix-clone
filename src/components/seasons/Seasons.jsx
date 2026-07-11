import { useState } from "react";
import { TV } from "../../services/tmdb";
import Episodes from "../episodes/Episodes";

function Seasons(props) {
  const { seasons, seasonNumber, id, play} = props;
  const {season} = TV
  const [activeEpisodeNumber, setActiveEpisodeNumber] = useState(1);
  const [activeSeasonNumber, setActiveSeasonsNumber] = useState(seasonNumber);
  const episodeNumber = seasons?.find(e => e?.season_number === activeSeasonNumber)

  const episodesData = season(id, episodeNumber?.season_number);

  return (
    <div>
      <h1 className="text-white my-2 text-4xl font-bold">seasons</h1>
      <div className="flex flex-wrap gap-2 w-full pb-2">
        {seasons?.map((item) => (
          <div
            key={item?.id}
            onClick={() => setActiveSeasonsNumber(item?.season_number)}
            className={`w-20 py-1 ${activeSeasonNumber === item?.season_number ? "bg-red-600" : "bg-slate-900"} rounded-lg`}
          >
            <p className="text-white text-center text-xl">{item?.season_number}</p>
          </div>
        ))}
      </div>
      <div>
        <Episodes play={play} episodesData={episodesData} activeEpisodeNumber={activeEpisodeNumber} setActiveEpisodeNumber={setActiveEpisodeNumber} />
      </div>
    </div>
  );
}

export default Seasons;
