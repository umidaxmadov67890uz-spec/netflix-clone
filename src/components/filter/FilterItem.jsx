import { useContext, useEffect, useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { MoviesDataContext } from "../../context/MoviesDataContext";
import { TvDataContext } from "../../context/TvDataContext";

function FilterItem(props) {
  const { data, setFunction, active, type } = props;
  const { setMoviesData } = useContext(MoviesDataContext);
  const { setTvsData } = useContext(TvDataContext);
  const [open, setOpen] = useState(false);
  const activeData = data?.find((e) => e?.id === active);
  const ref = useRef(null);

  function handleFilter(i) {
    setOpen(false);
    if (i === active) return;
    if (type === "movie" && i !== active) setMoviesData([]);
    if (type === "tv") setTvsData([]);
    setFunction(i);
  }

  useEffect(() => {
    const handler = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    document?.addEventListener("click", handler);
    return () => document?.removeEventListener("click", handler);
  }, []);
  return (
    <div className="relative" ref={ref}>
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="px-4 py-1 w-full sm:w-auto rounded-xl sm:rounded-r-full sm:rounded-l-full border border-[#353535] bg-transparent cursor-pointer"
      >
        <p className="text-slate-200 text-2xl flex items-center justify-between sm:justify-start gap-x-2 text-nowrap transition-all duration-300">
          {activeData?.label}
          <FaChevronRight
            className={`${open ? "-rotate-90" : "rotate-90"} text-xl transition-all duration-300`}
          />
        </p>
      </div>
      {open && (
        <div className="absolute top-10 left-0 right-0 sm:right-auto mx-auto p-1 px-2 w-9/10 sm:min-w-max max-h-96 bg-[#181818] rounded-xl flex flex-col z-20 overflow-hidden overflow-y-scroll scrollbar-thumb-[#383838]">
          {data?.map((item, index) => (
            <div
              key={index}
              onClick={() => handleFilter(item?.id)}
              className="py-1 px-2 rounded-r-full rounded-l-full hover:bg-[#252525] text-slate-200 hover:text-slate-100 cursor-pointer"
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
