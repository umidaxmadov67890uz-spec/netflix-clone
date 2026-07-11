import { FaFacebook, FaTelegram, FaYoutube } from "react-icons/fa6"
import { FiInstagram } from "react-icons/fi"
import { Link } from "react-router"

function Footer() {
  return (
    <footer className="w-full py-4 border-t-2 border-red-600 bg-black">
      <div className="container mx-auto px-2 xl:px-15">
        <div className="flex items-start justify-between pb-4">
            <div className="flex flex-col">
                <h3 className="text-white font-bold text-2xl">main</h3>
                <Link to={"/movies"} ><span className="text-[#aaa]">movies</span></Link>
                <Link to={"/series"} ><span className="text-[#aaa]">TV Show</span></Link>
            </div>
            <div className="flex flex-col">
                <h3 className="text-white font-bold text-2xl">movie genres</h3>
                <Link to={"/genre/movie/28/action"} ><span className="text-[#aaa]">action</span></Link>
                <Link to={"/genre/movie/12/adventure"} ><span className="text-[#aaa]">adventure</span></Link>
                <Link to={"/genre/movie/35/comedy"} ><span className="text-[#aaa]">comedy</span></Link>
                <Link to={"/genre/movie/80/crime"} ><span className="text-[#aaa]">crime</span></Link>
                <Link to={"/genre/movie/18/drama"} ><span className="text-[#aaa]">drama</span></Link>
                <Link to={"/genre/movie/27/horror"} ><span className="text-[#aaa]">horror</span></Link>
                <Link to={"/genre/movie/9648/mystery"} ><span className="text-[#aaa]">mystery</span></Link>
            </div>
            <div className="flex flex-col">
                <h3 className="text-white font-bold text-2xl">TV genres</h3>
                <Link to={"/genre/tv/10759/action-adventure"} ><span className="text-[#aaa]">action & adventure</span></Link>
                <Link to={"/genre/tv/35/comedy"} ><span className="text-[#aaa]">comedy</span></Link>
                <Link to={"/genre/tv/80/crime"} ><span className="text-[#aaa]">crime</span></Link>
                <Link to={"/genre/tv/18/drama"} ><span className="text-[#aaa]">drama</span></Link>
                <Link to={"/genre/tv/10765/sci-fi-fantasy"} ><span className="text-[#aaa]">sci-fi & fantasy</span></Link>
                <Link to={"/genre/tv/9648/mystery"} ><span className="text-[#aaa]">mystery</span></Link>
                <Link to={"/genre/tv/10768/war-politics"} ><span className="text-[#aaa]">war & politics</span></Link>
            </div>
            <div className="flex items-center gap-x-2">
                <span className="text-white text-4xl hover:scale-105 transition-all duration-300 cursor-pointer"><FaTelegram /></span>
                <span className="text-white text-4xl hover:scale-105 transition-all duration-300 cursor-pointer"><FiInstagram /></span>
                <span className="text-white text-4xl hover:scale-105 transition-all duration-300 cursor-pointer"><FaFacebook /></span>
                <span className="text-white text-4xl hover:scale-105 transition-all duration-300 cursor-pointer"><FaYoutube /></span>
            </div>
            
        </div>
      </div>
    </footer>
  )
}

export default Footer
