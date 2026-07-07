import { useState } from "react";
import Input from "../input/Input";
import { TailSpin } from "react-loader-spinner";
import { useAuth } from "./../../hooks/useAuth";
import { useNavigate } from "react-router";
import { useToast } from "../../hooks/useToast";

function SignIn() {
  const { loading, login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const PasswordRegex = "(?=.*[A-Z])(?=.*[a-z])(?=.*\\d).{8,}";
  const emailPlaceholder = "enter your email address";
  const passwordPlaceholder = "enter password";
  const toast = useToast();

  const handleError = (err) => {
    toast.error(err);
  };

  const handleSuccess = () => {
    toast.success("Registration Successful!");
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if(loading) return
    if (!email.trim() || !password.trim()) {
      setEmailError(true);
      setPasswordError(true);
      return;
    }
    const result = await login(email, password);

    if (!result.success) {
      handleError(result.error);
      return;
    }

    navigate("/");
    handleSuccess();
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    if (emailError && !e.target.validity.typeMismatch) setEmailError(false);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    console.log(e.target.validity.patternMismatch);
    if (passwordError && !e.target.validity.patternMismatch)
      setPasswordError(false);
  }
  

  return (
    <div className="w-full">
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-y-2">
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
        <button
          type="submit"
          className="w-full text-center text-white font-bold py-2 mt-3 bg-red-600 hover:bg-red-500 rounded-xl cursor-pointer"
        >
          <span className="flex items-center justify-center">
            {loading ? (
              <TailSpin width={30} height={30} color="#fff" />
            ) : (
              "Login"
            )}
          </span>
        </button>
      </form>
    </div>
  );
}

export default SignIn;
