// import { VscChromeClose } from "react-icons/vsc"
import FilterItem from "./FilterItem"
import { useContext } from "react";
import { MoviesDataContext } from "../../context/MoviesDataContext";
import { TvDataContext } from "../../context/TvDataContext";
import { RiDeleteBin6Line } from "react-icons/ri";

function Filter(props) {
  const { genres, year, country, setGenres, setYear, setCountry, genresData, yearData, countryData, type} = props
  const { setMoviesData } = useContext(MoviesDataContext);
    const { setTvsData } = useContext(TvDataContext)

  function handleReset () {
    setMoviesData([])
    setTvsData([])
    setGenres("")
    setYear("")
    setCountry("")
  }
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-y-1 bg-slate-900 py-2 px-1 sm:px-2 rounded-lg border border-slate-800">
      <div className="flex flex-col sm:flex-row sm:items-center gap-y-1 w-full sm:w-auto">
        <FilterItem data={genresData} active={genres} setFunction={setGenres} type={type} />
        <FilterItem data={yearData} active={year} setFunction={setYear} type={type} />
        <FilterItem data={countryData} active={country} setFunction={setCountry} type={type} />
      </div>
      <button 
        onClick={handleReset} 
        className="text-red-600 hover:text-red-500 text-xl capitalize flex items-center gap-x-1 text-nowrap transition-all duration-200 cursor-pointer"
      >
        <RiDeleteBin6Line className="text-2xl" />
        <span className="sm:hidden md:flex">reset filters</span>
      </button>
    </div>
  )
}

export default Filter
