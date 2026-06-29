import { useState } from "react";
import Season from "./Season";

function Seasons(props) {
  const { seasons, seasonNumber, id } = props;
  const [activeEpisodeNumber, setActiveEpisodeNumber] = useState(1)
  // console.log(seasons);

  return (
    <div className="flex flex-col gap-y-2 overflow-x-scroll scrollbar-none transition-all duration-200">
      {seasons?.map((item) => (
        <div key={item?.id}>
        <Season seasonsId={id} item={item} seasonNumber={seasonNumber} activeEpisodeNumber={activeEpisodeNumber} setActiveEpisodeNumber={setActiveEpisodeNumber} />
        </div>
      ))}
    </div>
  );
}

export default Seasons;
