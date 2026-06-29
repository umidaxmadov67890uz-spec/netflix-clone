import useGetData from "../../hooks/useGetData";

function Episodes(props) {
  const { episodeNumberData, activeEpisodeNumber, setActiveEpisodeNumber } = props;
  const { loader, data } = useGetData({ url: episodeNumberData });
  ;
  
  if (loader) return;

  // console.log(data);
  return (
    <div className="flex flex-wrap gap-2 py-2 mt-2 border-t border-slate-700">
      {data?.episodes?.map((episode) => (
        <div
          onClick={() => setActiveEpisodeNumber(episode?.id)}
          key={episode?.id}
          className={`w-20 h-8 flex items-center justify-center  ${activeEpisodeNumber === episode?.id || activeEpisodeNumber === episode?.episode_number ? "bg-red-600" : "bg-slate-800"} rounded-r-full rounded-l-full border border-slate-700 cursor-pointer`}
        >
          <p className="text-white text-nowrap">{episode?.episode_number}</p>
        </div>
      ))}
    </div>
  );
}

export default Episodes;
