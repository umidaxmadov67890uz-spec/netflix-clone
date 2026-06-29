import { useContext, useEffect, useRef, useState } from "react"
import useGetData from "../../hooks/useGetData"
import { API_KEY, BASE_URL } from "../../services/tmdb"
import { TvDataContext } from "../../context/TvDataContext"
import Filter from "../../components/filter/Filter"
import MovieGrid from "../../components/movie/MovieGrid"
import { FILTER_COUNTRY, FILTER_TV_GENRES, FILTER_TV_YEAR } from "../../components/filter/filterData"
import { FaChevronRight } from "react-icons/fa"

function TvsPage() {
  const [genres, setGenres] = useState("")
  const [year, setYear] = useState("")
  const [country, setCountry] = useState("")
  const [page, setPage] = useState(1)
  const url = `${BASE_URL}/discover/tv?api_key=${API_KEY}${genres}${year}${country}&page=`
  const {data, loader, getData} = useGetData({url: `${url}${page}`})
  const { tvsData, setTvsData } = useContext(TvDataContext)
  const listRef = useRef(null);
  const scrollPos = useRef(0);

  useEffect(() => {
    if(data) setTvsData(prev => [...prev, ...data])
    if(data) {
      window.scrollTo(0, scrollPos.current);
    }
  }, [data])

  const uniqueMovies = tvsData.filter(
    (movie, index, arr) => index === arr.findIndex((m) => m.id === movie.id)
  );

  function handleMore (){
    scrollPos.current = window.scrollY;
    getData(`${url}${page + 1}`)
    setPage(prev => prev + 1)
  }

  if(loader) return null


  return (
    <div className="pt-10" ref={listRef}>
      <div className="container mx-auto xl:px-15 my-5">
        <Filter genres={genres} setGenres={setGenres} genresData={FILTER_TV_GENRES} year={year} setYear={setYear} yearData={FILTER_TV_YEAR} country={country} setCountry={setCountry} countryData={FILTER_COUNTRY} type={"tv"} />
      </div>
      <div>
        <MovieGrid data={uniqueMovies} type={"tv"} />
      </div>
      <div className="container mx-auto flex items-center justify-center">
        <button 
          onClick={handleMore}
          className="py-2 w-full bg-slate-800 text-white text-nowrap mb-20 flex items-center justify-center gap-x-2 cursor-pointer" 
        >
          Show more<FaChevronRight className="rotate-90"/>
        </button>
      </div>
    </div>
  )
}

export default TvsPage