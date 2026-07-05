import { useState } from "react";
import { useEffect } from "react";
import Input from "../../components/input/Input";
import { VscChromeClose } from "react-icons/vsc";
import { useAuth } from "../../hooks/useAuth";
import { TailSpin } from "react-loader-spinner";

function UserAccountPage() {
  const { user, updateUserProfile } = useAuth();
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const firstNamePlaceholder = "enter your name";
  const lastNamePlaceholder = "Enter your last name";
  const originalFirsName = user?.firstName || "";
  const originalLastName = user?.lastName || "";
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
    }
  }, [user]);

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    if (firstNameError && !e.target.value) setFirstNameError(false);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
    if (lastNameError && !e.target.validity.value) setLastNameError(false);
  }

  function handleClose(e) {
    e?.preventDefault();
    setOpen(false);
    setFirstName(user?.firstName);
    setLastName(user?.lastName);
  }

  async function handleEdit(e) {
    e?.preventDefault();
    setSuccess(true);
    await updateUserProfile({ firstName, lastName });
    setSuccess(false);
    setOpen(false);
  }

  console.log(user)

  return (
    <div className="container mx-auto px-2 xl:px-15 relative h-screen">
      {open && (
        <div className="absolute top-0 bottom-0 left-0 right-0 m-auto max-w-130 w-full max-h-max bg-slate-900 py-2 px-5 rounded-2xl">
          <div className="flex items-center justify-end w-full">
            <button
              onClick={handleClose}
              className="p-1 rounded-lg text-slate-200 hover:text-slate-100 text-2xl bg-transparent border border-slate-500 cursor-pointer transition-all duration-200"
            >
              <VscChromeClose />
            </button>
          </div>
          <form onSubmit={handleEdit}>
            <Input
              error={firstNameError}
              setError={setFirstNameError}
              label={"firstName"}
              type={"text"}
              id={"firstName"}
              value={firstName}
              onChange={handleFirstNameChange}
              placeholder={firstNamePlaceholder}
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
            />
            <div className="flex items-center justify-end mt-5 gap-x-2">
              <button
                onClick={handleClose}
                className="py-1 px-5 rounded-l-full rounded-r-full text-slate-200 hover:text-slate-100 text-2xl bg-slate-800 border border-slate-700 hover:bg-slate-700 cursor-pointer transition-all duration-200"
              >
                close
              </button>
              <button
                type="submit"
                className="py-1 px-5 rounded-l-full rounded-r-full text-slate-200 hover:text-slate-100 text-2xl text-center bg-red-600 border border-red-500 hover:bg-red-500 cursor-pointer transition-all duration-200"
              >
                {success ? (
                  <TailSpin width={30} height={30} color="#fff" />
                ) : (
                  "save"
                )}
              </button>
            </div>
          </form>
        </div>
      )}
      
      <div className="w-full h-[70vh] flex items-center justify-center">
        <div className="max-w-200 w-full py-2 px-5 rounded-2xl bg-slate-900 border border-slate-700">
          <h1 className="text-white font-bold text-2xl">Profile</h1>
          <div className="flex items-end justify-between gap-x-5 w-full">
            <Input
              error={firstNameError}
              setError={setFirstNameError}
              label={"firstName"}
              type={"text"}
              id={"firstName"}
              disabled
              value={originalFirsName}
              onChange={handleFirstNameChange}
              placeholder={firstNamePlaceholder}
            />
            <Input
              error={lastNameError}
              setError={setLastNameError}
              label={"lastName"}
              type={"text"}
              id={"lastName"}
              disabled
              value={originalLastName}
              onChange={handleLastNameChange}
              placeholder={lastNamePlaceholder}
            />
            <button
              onClick={() => setOpen(true)}
              className="py-2 px-5 rounded-lg text-slate-200 hover:text-slate-100 text-3xl bg-slate-800 border border-slate-700 hover:bg-slate-700 cursor-pointer transition-all duration-200"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAccountPage;
