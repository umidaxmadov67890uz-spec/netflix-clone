import { useState } from "react"
import { TvDataContext } from "./TvDataContext"

function TvDataProvider({children}) {
  const [tvsData, setTvsData] = useState([])
  return (
    <TvDataContext.Provider value={{tvsData, setTvsData}}>
      {children}
    </TvDataContext.Provider>
  )
}

export default TvDataProvider
