import YouTube from "react-youtube"
import useGetData from "../../hooks/useGetData"

function YoutubeTrailer(props) {
  const {youtubeTrailerData} = props
  const {loader, data} = useGetData({url: youtubeTrailerData})
  if(loader) return <p className="text-center pt-56">Yuklanmoqda...</p>
  
  const youtubeKey = data?.find(youtube => youtube?.site === "YouTube")

  return (
    <div>
      {
        data && (
          <div className="my-5">
            <p className="text-white font-bold text-2xl">trailer</p>
              <YouTube videoId={youtubeKey?.key} opts={{width: "780", height: "500"}} />
          </div>
        )
       }
    </div>
  )
}

export default YoutubeTrailer
