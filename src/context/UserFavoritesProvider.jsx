import { useEffect, useState } from "react"
import { UserFavoritesContext } from "./UserFavoritesContext"

function UserFavoritesProvider({children}) {
  const [userFavoritesData, setUserFavoritesData] = useState(() => {
    const seved = localStorage.getItem("favorites")
    return seved ? JSON.parse(seved) : []
  })

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(userFavoritesData))
  }, [userFavoritesData])

  return (
    <UserFavoritesContext.Provider value={{userFavoritesData, setUserFavoritesData}}>
      {children}
    </UserFavoritesContext.Provider>
  )
}

export default UserFavoritesProvider
