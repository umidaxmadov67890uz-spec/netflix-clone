import { IoMdPlay } from "react-icons/io"
import { HERO_IMG_URL, MOVIES } from "../../services/tmdb"
import MovieRow from './MovieRow';

function Movie(props) {
  const {data} = props
  const {byGenre} = MOVIES
  function runtime(){
    const hour = Math.floor(data?.runtime / 60)
    const minute = data?.runtime - 60 * hour
    return `${hour ? hour + " hour" : ""} ${minute ? minute + " minute" : ""}`
  }
    
  return (
     <div className="relative">
      <div className="h-screen w-full bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${HERO_IMG_URL}${data?.backdrop_path})`}}>
        <div className="w-full h-screen bg-linear-to-b to-black from-transparent">
          <div className="flex flex-col justify-end gap-y-5 pb-10 container xl:px-15 mx-auto h-9/10">
            <h1 className="text-white text-5xl">{data?.original_title}</h1>
            <div className="flex items-center gap-x-4">
              <button className="bg-white py-2 px-4 rounded-sm flex items-center gap-x-1 font-bold text-2xl cursor-pointer hover:scale-105 transition-all duration-300">
               <IoMdPlay />watch
              </button>
              
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto xl:px-15 grid grid-cols-2 gap-5">
        <div>
          <h2 className="text-white font-bold text-3xl">description</h2>
          <p className="text-white text-xl">{data?.overview}</p>
        </div>
        <div>
          <h2 className="text-white font-bold text-3xl">Information</h2>
          <div>
            <div className="flex items-center justify-between">
              <p className="text-gray-400 text-xl">name:</p>
              <p className="text-white text-xl">{data?.original_title}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-400 text-xl">runtime:</p>
              <p className="text-white text-xl">{runtime()}</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-gray-400 text-xl">genre:</p>
              <div className="flex flex-wrap items-center justify-end gap-x-1">
                {data?.genres?.map(genre => (
                  <p className="text-white text-xl bg-gray-800 px-2 rounded-sm" key={genre?.id}>{genre?.name}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
       <div>
          {data?.genres?.map(genre => (
            <MovieRow movieData={byGenre(genre?.id)} listTitle={genre?.name} type={"movie"} key={genre?.id} id={data?.id} />
          ))}
        </div>
    </div>
  )
}

export default Movie
