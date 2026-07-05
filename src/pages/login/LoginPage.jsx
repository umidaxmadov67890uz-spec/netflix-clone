import { useState } from "react"
import img from "../../assets/images/login-bg1.jpg"
import SignIn from "../../components/sign-in/SignIn"
import SignUp from "../../components/sign-up/SignUp"

function LoginPage() {
  const [activeLoginPage, setActiveLoginPage] = useState("sign-in")
  return (
    <div className="h-dvh w-full relative bg-no-repeat bg-center bg-cover flex items-center justify-center" style={{backgroundImage: `url(${img})`}}>
      <div className="absolute top-0 left-0 ring-0 w-full h-full bg-black opacity-50"></div>
      <div className="max-w-100 w-full p-5 rounded-xl bg-black z-50">
        {/* <h1 className="text-white text-center text-3xl">login</h1> */}
        {/* <p className="text-slate-300 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum nesciunt facere minus, </p> */}
        <div className="grid grid-cols-2">
          <button 
            onClick={() => setActiveLoginPage("sign-in")}
            className={`w-full text-center py-2 text-lg border-b-4 ${activeLoginPage === "sign-in" ? "text-red-500 border-red-600" : "text-white hover:text-red-400 border-transparent"} transition-all duration-200 cursor-pointer`}
          > sign in </button>
          <button 
            onClick={() => setActiveLoginPage("sign-up")}
            className={`w-full text-center py-2 text-lg border-b-4 ${activeLoginPage === "sign-up" ? "text-red-500 border-red-600" : "text-white hover:text-red-400 border-transparent"} transition-all duration-200 cursor-pointer`}
          > sign up </button>
        </div>
        <div>
          {activeLoginPage === "sign-in" && <SignIn/>}
          {activeLoginPage === "sign-up" && <SignUp/>}
        </div>
      </div>
      
    </div>
  )
}

export default LoginPage








