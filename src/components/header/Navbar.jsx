import { Link } from "react-router"

function Navbar() {
  return (
    <div className="hidden sm:flex items-center gap-x-3">
      <Link to={"/"} ><span className="text-white hover:text-red-500 transition-all duration-200 capitalize">home</span></Link>
      <Link to={"/movies"} ><span className="text-white hover:text-red-500 transition-all duration-200 capitalize">movies</span></Link>
      <Link to={"/series"} ><span className="text-white hover:text-red-500 transition-all duration-200 capitalize">series</span></Link>
      <Link to={"/favorites"} ><span className="text-white hover:text-red-500 transition-all duration-200 capitalize">favorites</span></Link>
      <Link to={"/subscriptions"} ><span className="text-white hover:text-red-500 transition-all duration-200 capitalize">Tariffs</span></Link>
    </div>
  )
}

export default Navbar
