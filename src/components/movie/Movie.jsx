import { IoMdPlay } from "react-icons/io"
import { HERO_IMG_URL, IMG_URL, MOVIES } from "../../services/tmdb"
import MovieRow from './MovieRow';
import { IoBookmarkOutline, IoTimeOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import useGetData from "../../hooks/useGetData";
import YouTube from "react-youtube";
// import { useState } from "react";
// import { FiInfo } from "react-icons/fi";

function Movie(props) {
  const {movieData} = props
  const {byGenre, videos} = MOVIES
  // const [youtubeKey, setYoutubeKey] = useState(null)
  const { loader, data} = useGetData({url: videos(movieData?.id)})

  if(loader) return <p className="text-center pt-56">Yuklanmoqda...</p>

  const youtubeKey = data?.find(e => e?.site === "YouTube")
  console.log(youtubeKey);
  

  function runtime(){
    const hour = Math.floor(movieData?.runtime / 60)
    const minute = movieData?.runtime - 60 * hour
    return `${hour ? hour + " hour" : ""} ${minute ? minute + " minute" : ""}`
  }

  // console.log(data)

  // const siteIsYoutube = data?.filter(e => e?.site === "youtube")
  // setYoutubeKey(data?.find(e => e?.site === "youtube"))

  
  return (
    <div className="relative">
      <div className="h-screen w-full bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${HERO_IMG_URL}${movieData?.backdrop_path})`}}>
        <div className="w-full h-screen bg-linear-to-b to-[black]/50 from-transparent">
          <div className="flex flex-col justify-end gap-y-5 pb-10 container xl:px-15 mx-auto h-9/10">
            <h1 className="text-white text-5xl">{movieData?.original_title}</h1>
            <div className="flex items-center gap-x-4">
              <button className="bg-white py-2 px-4 rounded-sm flex items-center gap-x-1 font-bold text-2xl cursor-pointer hover:scale-105 transition-all duration-300">
               <IoMdPlay />watch
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto xl:px-15">

        <div className="flex items-start justify-start gap-x-5">
          <div className="min-w-52 w-52 rounded-2xl -mt-10">
            <img 
              className="w-full h-full object-cover rounded-2xl"
              src={`${IMG_URL}${movieData?.poster_path}`} 
              alt={movieData?.title} 
              />
          </div>

          <div>
            <p className="text-white text-5xl">{movieData?.title}</p>
            <div className="flex flex-wrap items-center justify-start my-4 gap-x-1">
              {movieData?.genres?.map(genre => (
                <button className="text-slate-200 hover:text-slate-50 text-sm bg-slate-900 border border-slate-700 hover:border-slate-500 px-4 py-1 rounded-l-full rounded-r-full cursor-pointer transition-all duration-200" key={genre?.id}>{genre?.name}</button>
              ))}
            </div>
            <div className="flex items-center gap-x-2">
              <p className="text-slate-400 text-lg flex items-center gap-x-0.5"><IoTimeOutline />{runtime()}</p>
              <p className="text-slate-400 text-lg flex items-center gap-x-0.5"><MdDateRange />{movieData?.release_date}</p>
            </div>
            <div className="flex items-center gap-x-2 my-7">
              <button className="bg-white py-1 px-4 rounded-sm flex items-center gap-x-1 font-bold text-xl cursor-pointer hover:scale-105 transition-all duration-300">
                <IoMdPlay />watch
              </button>
              <button className="bg-[gray]/50 border border-slate-700 py-1 px-4 rounded-sm flex items-center gap-x-1 text-xl text-white capitalize cursor-pointer hover:scale-105 transition-all duration-300">
                <IoBookmarkOutline />favorites
              </button>
            </div>
            <p className="text-white text-lg pr-10">{movieData?.overview}</p>
          </div>

        </div>
        <div className="flex items-center gap-x-4 mt-2">
          <div className="py-3 px-7 bg-gray-800 rounded-xl flex flex-col items-center justify-center">
            <p className="text-white text-2xl font-bold">{movieData?.vote_average.toFixed(1)}</p>
            <p className="text-slate-200 text-sm flex items-center gap-x-1"><FaRegStar  /> IMDb</p>
          </div>
          <div className="py-3 px-7 bg-gray-800 rounded-xl flex flex-col items-center justify-center">
            <p className="text-white text-2xl font-bold">${movieData?.budget}</p>
            <p className="text-slate-200 text-sm">budget</p>
          </div>
          <div className="py-3 px-7 bg-gray-800 rounded-xl flex flex-col items-center justify-center">
            <p className="text-white text-2xl font-bold">${movieData?.revenue}</p>
            <p className="text-slate-200 text-sm">revenue</p>
          </div>
        </div>

        {
          youtubeKey && (
            <div className="my-5">
              <p className="text-white font-bold text-2xl">trailer</p>
              <YouTube videoId={youtubeKey?.key} opts={{width: "780", height: "500"}} />
            </div>
          )
        }
      
      </div>
      <div>
        {movieData?.genres?.map(genre => (
          <MovieRow movieData={byGenre(genre?.id)} listTitle={genre?.name} type={"movie"} key={genre?.id} id={movieData?.id} />
        ))}
      </div>
    </div>
  )
}

export default Movie
