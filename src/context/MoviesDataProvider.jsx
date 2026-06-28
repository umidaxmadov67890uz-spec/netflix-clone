import {   useState } from "react"
import { MoviesDataContext } from "./MoviesDataContext"

function MoviesDataProvider({children}) {
  const [moviesData, setMoviesData] = useState([])

  return (
    <MoviesDataContext.Provider value={{moviesData, setMoviesData}}>
      {children}
    </MoviesDataContext.Provider>
  )
}

export default MoviesDataProvider
