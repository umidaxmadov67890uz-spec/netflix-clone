import { useEffect, useRef, useState } from "react";
import { FaRegCircleUser, FaRegHeart } from "react-icons/fa6";
import { LuLogOut, LuPanelTop } from "react-icons/lu";
import { Link } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { FaRegUserCircle } from "react-icons/fa";

function UserMenu() {
  const [open, setOpen] = useState(false);
  const {logout, user} = useAuth()

  
  async function handleLogout() {
    await logout()
  }
  const ref = useRef(null)
  useEffect(() => {
    const handler = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [])

  if(!user) return null

  const isAdmin = user?.role === "admin" ? true : false


  return (
    <div 
      ref={ref}
      className="relative">
      <div>
        <button 
          onClick={() => setOpen(prev => !prev)}
          className="text-slate-200 hover:text-slate-50 hover:scale-105 transition-all duration-200 cursor-pointer">
          <FaRegCircleUser className="h-6 w-6" />
        </button>
      </div>
      {open && (
        <div className="absolute top-10 right-0 p-2 rounded-xl bg-black">
          <div className="flex flex-col items-start">
            <span 
              onClick={() => setOpen(false)}
              className="text-slate-200 hover:text-slate-50 w-max text-nowrap capitalize py-1 px-2 hover:bg-slate-900 rounded-xl cursor-pointer transition-all duration-200"
            >
              <Link to={"/account"}>
                <span className="flex items-center gap-x-2 text-nowrap"><FaRegUserCircle />Account</span>
              </Link>
            </span>
            <span 
              onClick={() => setOpen(false)}
              className="text-slate-200 hover:text-slate-50 w-max text-nowrap capitalize py-1 px-2 hover:bg-slate-900 rounded-xl cursor-pointer transition-all duration-200"
            >
              <Link to={"/favorites"}>
                <span className="flex items-center gap-x-2 text-nowrap"><FaRegHeart /> my favorites</span>
              </Link>
            </span>
            {
              isAdmin && (
                <span 
              onClick={() => setOpen(false)}
              className="text-slate-200 hover:text-slate-50 w-max text-nowrap capitalize py-1 px-2 hover:bg-slate-900 rounded-xl cursor-pointer transition-all duration-200"
            >
              <Link to={"/admin"}>
                <span className="flex items-center gap-x-2 text-nowrap"><LuPanelTop />Admin panel</span>
              </Link>
            </span>
              )
            }
            <span className="w-full h-px bg-slate-700"></span>
            <button
              onClick={handleLogout}
              className="text-red-600 hover:text-red-500 flex items-center gap-x-2 py-1 px-2 text-nowrap capitalize cursor-pointer"
            >
              <LuLogOut/> log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
