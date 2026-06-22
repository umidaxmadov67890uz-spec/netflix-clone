import { Link } from "react-router"

function Navbar() {
  return (
    <div className="flex items-center gap-x-3">
      <Link to={"/"} ><span className="text-white hover:text-red-500 transition-all duration-200 capitalize">home</span></Link>
      <Link to={"/movies"} ><span className="text-white hover:text-red-500 transition-all duration-200 capitalize">movies</span></Link>
      <Link to={"/tv"} ><span className="text-white hover:text-red-500 transition-all duration-200 capitalize">TV</span></Link>
      <Link to={"/favorites"} ><span className="text-white hover:text-red-500 transition-all duration-200 capitalize">favorites</span></Link>
    </div>
  )
}

export default Navbar
