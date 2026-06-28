import { useContext, useEffect, useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { MoviesDataContext } from "../../context/MoviesDataContext";
import { TvDataContext } from "../../context/TvDataContext";

function FilterItem(props) {
  const { data, setFunction, active, type} = props;
  const { setMoviesData } = useContext(MoviesDataContext);
  const { setTvsData } = useContext(TvDataContext)
  const [open, setOpen] = useState(false);
  const activeData = data?.find((e) => e?.id === active);
  const ref = useRef(null)

  function handleFilter(i) {
    setOpen(false);
    if(type === "movie") setMoviesData([]);
    if(type === "tv") setTvsData([])
    setFunction(data[i]?.id);
  }

    useEffect(() => {
      const handler = (e) => {
        if (!ref.current?.contains(e.target)) setOpen(false);
      }
      document.addEventListener("click", handler);
      return () => document.removeEventListener("click", handler);
    }, [])
  return (
    <div className="relative" ref={ref}>
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="px-4 rounded-r-full rounded-l-full border border-slate-700 bg-transparent cursor-pointer"
      >
        <p className="text-slate-200 text-2xl flex items-center gap-x-2 text-nowrap transition-all duration-300">
          {activeData?.label}
          <FaChevronRight
            className={`${open ? "-rotate-90" : "rotate-90"} text-xl transition-all duration-300`}
          />
        </p>
      </div>
      {open && (
        <div className="absolute top-10 left-0 p-1 px-2 max-h-96 bg-slate-900 rounded-xl flex flex-col z-20 overflow-hidden overflow-y-scroll scrollbar-none">
          {data?.map((item, index) => (
            <div
              key={index}
              onClick={() => handleFilter(index)}
              className="py-1 px-2 rounded-r-full rounded-l-full hover:bg-slate-800 text-slate-200 hover:text-slate-100 cursor-pointer"
            >
              <p className="text-xl text-nowrap">{item?.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterItem;
