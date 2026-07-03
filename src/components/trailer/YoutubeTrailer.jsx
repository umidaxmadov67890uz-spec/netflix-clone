import YouTube from "react-youtube";
import useGetData from "../../hooks/useGetData";

function YoutubeTrailer(props) {
  const { youtubeTrailerData, play } = props;
  const { loader, data } = useGetData({ url: youtubeTrailerData });
   
  if (loader) return null;

  const youtubeKey = data?.find((youtube) => youtube?.site === "YouTube");

  return (
    <div className="w-full h-full">
      {data && (
        <div className="w-full h-full">
          <YouTube
            className="w-full h-full"
            videoId={youtubeKey?.key}
            opts={{
              width: "100%",
              height: "100%",
              playerVars: {
                autoplay: play,
                controls: 0,
                rel: 0,
                modestbranding: 1,
                cc_load_policy: 0,
                iv_load_policy: 3,
                disablekb: 1,
              },
            }}
          />
        </div>
      )}
    </div>
  );
}

export default YoutubeTrailer;
