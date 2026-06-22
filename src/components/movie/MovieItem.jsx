import { useState } from "react"
// import { CiPlay1 } from "react-icons/ci"
import { FiPlus } from "react-icons/fi"
import { IoPlayOutline } from "react-icons/io5"
import { useNavigate } from 'react-router';

function MovieItem(props) {
  const {data, type} = props
  const [isActive, setIsActive] = useState(false)
  const navigate = useNavigate()
  // console.log(type)
  function handleNavigate(){
    if(type  === "movie") {
      navigate(`/movie/detail/${data?.id}`)
      // e.preventDefault()
    }else if(type === "tv") {
      navigate(`/tv/detail/${data?.id}`)
      // e.preventDefault()
    }
  }
  
  // console.log(data)

  return (
    <>
      { data?.backdrop_path && (
        <div 
          onClick={handleNavigate}
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
          className="bg-black h-42 hover:h-48 min-w-64 hover:shadow-sm shadow-black overflow-hidden hover:scale-110 transition-all duration-200 cursor-pointer">
          <div className="bg-no-repeat bg-center bg-cover w-full h-42 z-10" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w780${data?.backdrop_path})`}}>
            { isActive && (
                <div className="w-full h-full flex items-center justify-center gap-x-5 pt-5 bg-[black]/15">
                  <button className="text-3xl text-slate-200 hover:text-slate-50 bg-[black]/50 hover:bg-[black]/60 p-2 rounded-full border border-slate-200 cursor-pointer transition-all duration-200"><FiPlus /></button>
                  <button className="text-3xl text-slate-200 hover:text-slate-50 bg-[black]/50 hover:bg-[black]/60 flex items-center justify-center text-center w-12 h-12 pl-0.5 rounded-full border border-slate-200 cursor-pointer transition-all duration-200"><IoPlayOutline className="w-8 h-8" /></button>
                </div>
            )}
          </div>
          <p className="text-white line-clamp-1">{data?.title || data?.original_title || data?.name || data?.original_name}</p>
        </div>
      )}
    </>
  )
}

export default MovieItem
