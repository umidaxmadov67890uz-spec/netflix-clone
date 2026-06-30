import { Link } from "react-router"
import Navbar from "./Navbar"
import UserMenu from "./UserMenu"
import loge from "../../../public/netflix_logo_icon.svg"
function Header() {

  return (
    <header className="w-full h-12 bg-[black]/70 fixed z-50">
      <div className="container mx-auto px-2 xl:px-15 h-full flex items-center justify-between">
        <div className="h-full flex items-center gap-x-5">
          <div>
            <Link to={"/"} ><img src={loge} alt="" /></Link>
          </div>
          <div>
            <Navbar />
          </div>
        </div>
        <div>
          <UserMenu />
        </div>
      </div>
    </header>
  )
}

export default Header
