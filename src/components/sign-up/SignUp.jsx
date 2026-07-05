import { useState } from "react";
import Input from "../input/Input";
import { useAuth } from "../../hooks/useAuth";
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from "react-router";
import { useToast } from "../../hooks/useToast";

function SignUp() {
  const { loading, register } = useAuth();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [repeatPasswordError, setRepeatPasswordError] = useState(false);
  const PasswordRegex = "(?=.*[A-Z])(?=.*[a-z])(?=.*\\d).{8,}";
  const firstNamePlaceholder = "enter your name";
  const lastNamePlaceholder = "Enter your last name";
  const emailPlaceholder = "enter your email address";
  const passwordPlaceholder = "enter password";
  const repeatPasswordPlaceholder = "repeat password";
  const firstNameErrorText = "Enter your username"
  const lastNameErrorText = "please enter your last name"
  const emailErrorText = "please enter your email address"
  const passwordErrorText = "The password must be at least 8 characters long and contain the letters A-Z a-z 1-9."
  const repeatPasswordErrorText = "Please enter the correct password."
  // console.log(user);

  const toast = useToast();

  const handleError = (err) => {
    toast.error(err);
  };

  const handleSuccess = () => {
    toast.success("Saved successfully!");
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if(loading) return
    if (
      !firstName?.trim() ||
      !lastName?.trim() ||
      !email?.trim() ||
      !password?.trim()
    ) {
      setFirstNameError(true);
      setLastNameError(true);
      setEmailError(true);
      setPasswordError(true);
      setRepeatPasswordError(true);
      return;
    }
    if (password !== repeatPassword) {
      setRepeatPasswordError(true);
      return;
    }
    const result = await register(email, password, firstName, lastName);

    if (!result.success) {
      handleError(result.error);
      return;
    }

    navigate("/");
    handleSuccess();
  }

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    if (firstNameError && !e.target.value) setFirstNameError(false);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
    if (lastNameError && !e.target.validity.value) setLastNameError(false);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    if (emailError && !e.target.validity.typeMismatch) setEmailError(false);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    if (passwordError && !e.target.validity.patternMismatch)
      setPasswordError(false);
  }

  function handleRepeatPasswordChange(e) {
    setRepeatPassword(e.target.value);
    if (repeatPasswordError && password === e.target.value)
      setRepeatPasswordError(false);
  }

  return (
    <div className="w-full">
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-y-2">
        <Input
          error={firstNameError}
          setError={setFirstNameError}
          label={"firstName"}
          type={"text"}
          id={"firstName"}
          value={firstName}
          onChange={handleFirstNameChange}
          placeholder={firstNamePlaceholder}
          errorText={firstNameErrorText}
        />
        <Input
          error={lastNameError}
          setError={setLastNameError}
          label={"lastName"}
          type={"text"}
          id={"lastName"}
          value={lastName}
          onChange={handleLastNameChange}
          placeholder={lastNamePlaceholder}
          errorText={lastNameErrorText}
        />
        <Input
          error={emailError}
          setError={setEmailError}
          label={"email"}
          type={"email"}
          id={"email"}
          value={email}
          onChange={handleEmailChange}
          placeholder={emailPlaceholder}
          errorText={emailErrorText}
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
          errorText={passwordErrorText}
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
          errorText={repeatPasswordErrorText}
        />
        <button
          type="submit"
          className="w-full  text-center text-white font-bold py-2 mt-3 bg-red-600 hover:bg-red-500 rounded-xl cursor-pointer"
        >
          <span className="flex items-center justify-center">
            {loading ? (
              <TailSpin width={30} height={30} color="#fff" />
            ) : (
              "create account"
            )}
          </span>
        </button>
      </form>
    </div>
  );
}

export default SignUp;
