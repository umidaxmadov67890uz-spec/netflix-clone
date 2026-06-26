import { MdDateRange } from "react-icons/md";
import { IMG_URL } from "../../services/tmdb";
import { IoMdPlay } from "react-icons/io";
import { IoBookmarkOutline } from "react-icons/io5";

function Description(props) {
  const {img, title, genres, date, overview} = props
  return (
    <div className="flex items-start justify-start gap-x-5">
      <div className="min-w-52 w-52 rounded-2xl -mt-10">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={`${IMG_URL}${img}`}
          alt={title}
        />
      </div>

      <div>
        <p className="text-white text-5xl">{title}</p>
        <div className="flex flex-wrap items-center justify-start my-4 gap-x-1">
          {genres?.map((genre) => (
            <button
              className="text-slate-200 hover:text-slate-50 text-sm bg-slate-900 border border-slate-700 hover:border-slate-500 px-4 py-1 rounded-l-full rounded-r-full cursor-pointer transition-all duration-200"
              key={genre?.id}
            >
              {genre?.name}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-x-2">
          {/* <p className="text-slate-400 text-lg flex items-center gap-x-0.5">
            <IoTimeOutline />
            {runtime()}
          </p> */}
          <p className="text-slate-400 text-lg flex items-center gap-x-0.5">
            <MdDateRange />
            {date}
          </p>
        </div>
        <div className="flex items-center gap-x-2 my-7">
          <button className="bg-white py-1 px-4 rounded-sm flex items-center gap-x-1 font-bold text-xl cursor-pointer hover:scale-105 transition-all duration-300">
            <IoMdPlay />
            watch
          </button>
          <button className="bg-[gray]/50 border border-slate-700 py-1 px-4 rounded-sm flex items-center gap-x-1 text-xl text-white capitalize cursor-pointer hover:scale-105 transition-all duration-300">
            <IoBookmarkOutline />
            favorites
          </button>
        </div>
        <p className="text-white text-lg pr-10">{overview}</p>
      </div>
    </div>
  );
}

export default Description;
