import { useContext, useEffect, useRef, useState } from "react"
import MovieGrid from "../../components/movie/MovieGrid"
import useGetData from "../../hooks/useGetData"
import { API_KEY, BASE_URL } from "../../services/tmdb"
import { MoviesDataContext } from "../../context/MoviesDataContext"
import Filter from "../../components/filter/Filter"
import { FILTER_COUNTRY, FILTER_MOVIE_GENRES, FILTER_MOVIE_YEAR } from "../../components/filter/filterData"
import { FaChevronRight } from "react-icons/fa"
import { Link } from "react-router"

function MoviesPage() {
  const [genres, setGenres] = useState("")
  const [year, setYear] = useState("")
  const [country, setCountry] = useState("")
  const [page, setPage] = useState(1)
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}${genres}${year}${country}&page=`
  const {data, loader, getData} = useGetData({url: `${url}${page}`})
  const { moviesData, setMoviesData } = useContext(MoviesDataContext)
  const listRef = useRef(null);
  const scrollPos = useRef(0);

  useEffect(() => {
    if(data) setMoviesData(prev => [...prev, ...data])
    if(data) {
      window.scrollTo(0, scrollPos.current);
    }
  }, [data])

  const uniqueMovies = moviesData.filter(
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
        <h1 className="text-white text-5xl font-bold">Movies</h1>
        <p className="text-slate-100 my-2"><Link to={"/"} ><span className="capitalize">home page</span></Link> / <span className="text-slate-400">movies</span> </p>
        <div>
          <Filter genres={genres} setGenres={setGenres} genresData={FILTER_MOVIE_GENRES} year={year} setYear={setYear} yearData={FILTER_MOVIE_YEAR} country={country} setCountry={setCountry} countryData={FILTER_COUNTRY} type={"movie"} />
        </div>
      </div>
      <div>
        <MovieGrid data={uniqueMovies} type={"movie"} />
      </div>
      <div className="container mx-auto flex items-center justify-center">
        <button 
          onClick={handleMore}
          className="py-2 w-full bg-[#202020] text-white text-nowrap flex items-center justify-center gap-x-2 mb-20 cursor-pointer" 
        >
          Show more <FaChevronRight className="rotate-90" />
        </button>
      </div>
    </div>
  )
}

export default MoviesPage
