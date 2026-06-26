import { IoMdPlay } from "react-icons/io";
import { HERO_IMG_URL } from "../../services/tmdb";

function MovieHero(props) {
   const {bgImg, title} = props
  return (
    <div
      className="h-screen w-full bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${HERO_IMG_URL}${bgImg})`,
      }}
    >
      <div className="w-full h-screen bg-linear-to-b to-[black]/50 from-transparent">
        <div className="flex flex-col justify-end gap-y-5 pb-10 container xl:px-15 mx-auto h-9/10">
          <h1 className="text-white text-5xl">{title}</h1>
          <div className="flex items-center gap-x-4">
            <button className="bg-white py-2 px-4 rounded-sm flex items-center gap-x-1 font-bold text-2xl cursor-pointer hover:scale-105 transition-all duration-300">
              <IoMdPlay />
              watch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieHero;
