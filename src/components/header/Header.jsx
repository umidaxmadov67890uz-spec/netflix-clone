import { Link } from "react-router"
import Navbar from "./Navbar"
import UserMenu from "./UserMenu"
import loge from "../../../public/netflix_logo_icon.svg"
import { useState } from "react"
import Search from "../search/Search"
import { IoSearch } from "react-icons/io5"
function Header() {
  const [searchOpen, setSearchOpen] = useState(false)
  

  return (
    <header className="w-full h-12 bg-[black]/70 fixed z-50">
      <div className="container mx-auto px-2 xl:px-15 h-full flex items-center justify-between">
        <div className="h-full flex items-center gap-x-5">
          <div className="min-w-30">
            <Link to={"/"} ><img src={loge} alt="netflix logo" /></Link>
          </div>
          <div className={`${searchOpen ? "sm:hidden md:flex" : ""}`}>
            <Navbar />
          </div>
        </div>
        <div className={`flex items-center gap-x-2 justify-end ${searchOpen ? "w-full" : "w-auto"}`}>
          <div className="w-full flex items-center justify-end">
            {searchOpen ?  <Search close={setSearchOpen} /> : (
              <button 
                onClick={() => setSearchOpen(prev => !prev)}
                className="text-slate-200 hover:text-slate-100 text-2xl hover:scale-105 cursor-pointer transition-all duration-200"
              >
                <IoSearch />
              </button>
            )}
          </div>
          <div>
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
