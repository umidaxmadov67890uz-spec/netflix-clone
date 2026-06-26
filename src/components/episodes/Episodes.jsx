import { useState } from "react";
import useGetData from "../../hooks/useGetData";

function Episodes(props) {
  const { episodeNumberData } = props;
  const { loader, data } = useGetData({ url: episodeNumberData });
  const [activeEpisodeNumber, setActiveEpisodeNumber] = useState(null);
  
  if (loader) return;
  
  console.log(data);
  return (
    <div className="flex flex-wrap gap-2">
      {data?.episodes?.map((episode) => (
        <div
          onClick={() => setActiveEpisodeNumber(episode?.episode_number)}
          key={episode?.id}
          className={`w-20 h-8 flex items-center justify-center ${activeEpisodeNumber === episode?.episode_number ? "bg-red-600" : "bg-slate-800"} rounded-r-full rounded-l-full border border-slate-700 cursor-pointer`}
        >
          <p className="text-white text-nowrap">{episode?.episode_number}</p>
        </div>
      ))}
    </div>
  );
}

export default Episodes;
