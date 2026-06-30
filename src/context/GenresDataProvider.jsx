import { useState } from "react"
import { GenresDataContext } from "./GenresDataContext"

function GenresDataProvider({children}) {
  const [genresData, setGenresData] = useState([])
  return (
    <GenresDataContext.Provider value={{genresData, setGenresData}}>
      {children}
    </GenresDataContext.Provider>
  )
}

export default GenresDataProvider
