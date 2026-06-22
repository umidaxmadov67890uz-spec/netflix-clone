import { useState } from "react"
import Input from "../input/Input"
import { useAuth } from "../../hooks/useAuth"
import { TailSpin } from "react-loader-spinner"
import { useNavigate } from "react-router"

function SignUp() {
  const {loading, register, error} = useAuth()
  const navigate  = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")
  const [repeatPasswordError, setRepeatPasswordError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const PasswordRegex = "(?=.*[A-Z])(?=.*[a-z])(?=.*\\d).{8,}"
  const emailPlaceholder = "enter your email address"
  const passwordPlaceholder = "enter password"
  const repeatPasswordPlaceholder = "repeat password"

 
  async function handleSubmit (e) {
    e.preventDefault()
    if(!email.trim() || !password.trim()) {
      setEmailError(true)
      setPasswordError(true)
      setRepeatPasswordError(true)
      console.log("xato")
      return
    }
    if(password !== repeatPassword) {
      setRepeatPasswordError(true)
      return
    }
    await register(email, password)
    if(!error) navigate("/")
  }

  function handleEmailChange (e){
    setEmail(e.target.value)
    if(emailError && !e.target.validity.typeMismatch) setEmailError(false)
  }

  function handlePasswordChange (e){
    setPassword(e.target.value)
    if(passwordError && !e.target.validity.patternMismatch) setPasswordError(false)
  }

  function handleRepeatPasswordChange (e) {
    setRepeatPassword(e.target.value)
    if(repeatPasswordError && password === e.target.value) setRepeatPasswordError(false)
  }
  
  return (
    <div className="w-full">
      <form  onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-y-2">
        <Input 
          error={emailError}
          setError={setEmailError}
          label={"email"}
          type={"email"}
          id={"email"}
          value={email}
          onChange={handleEmailChange}
          placeholder={emailPlaceholder}
        />
        <Input 
          error={passwordError}
          setError={setPasswordError}
          label={"password"}
          type={"password"}
          id={"password"}
          pattern={PasswordRegex}
          value={password}
          onChange={handlePasswordChange}
          placeholder={passwordPlaceholder}
        />
        <Input 
          error={repeatPasswordError}
          setError={setRepeatPasswordError}
          label={"password"}
          type={"password"}
          id={"password"}
          pattern={password}
          value={repeatPassword}
          onChange={handleRepeatPasswordChange}
          placeholder={repeatPasswordPlaceholder}
        />
        <button 
          type="submit"
          className="w-full  text-center text-white font-bold py-2 mt-3 bg-red-600 hover:bg-red-500 rounded-xl cursor-pointer"
          >
          <span className="flex items-center justify-center">
            {loading ? <TailSpin width={30} height={30} color="#fff" /> : "create account"}
          </span>
          </button>
      </form>
    </div>
  )
}

export default SignUp
