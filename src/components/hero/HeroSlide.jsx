import { FiInfo } from "react-icons/fi"
import { IoMdPlay } from "react-icons/io"

function HeroSlide(props) {
  const {data} = props
  return (
    <>
      {
        data && (
          <div className="w-full h-full bg-center bg-no-repeat bg-cover relative" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w780${data?.backdrop_path})`}}>
            <div className="absolute inset-0 bg-linear-to-b to-black from-transparent from-75%"></div>
            <div className="absolute inset-0 bg-linear-to-l to-black from-transparent">
              <div className="flex flex-col justify-start items-start w-9/10 h-full mx-auto py-20 gap-y-20">
                <div className="flex flex-col gap-y-5 w-full">
                  <h1 className="text-white font-bold text-6xl line-clamp-2 max-w-3/4">{data?.original_title}</h1>
                  <p className="text-white w-96 line-clamp-6">{data?.overview}</p>
                </div>
                <div className="flex items-center gap-x-4">
                  <button className="bg-white py-2 px-4 rounded-sm flex items-center gap-x-1 font-bold text-2xl cursor-pointer hover:scale-105 transition-all duration-300">
                    <IoMdPlay />Play
                  </button>
                  <button className="bg-[gray]/50 py-2 px-5 rounded-sm flex items-center gap-x-1 text-2xl text-white capitalize cursor-pointer hover:scale-105 transition-all duration-300">
                    <FiInfo />more info
                  </button>
                </div>
              </div>
            </div>

          </div>
        )
      }
    </>
  )
}

// bg-[#6d6d6eb3
export default HeroSlide
