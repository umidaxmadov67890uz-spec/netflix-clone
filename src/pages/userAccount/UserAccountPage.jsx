import { useState } from "react";
import { useEffect } from "react";
import Input from "../../components/input/Input";
import { VscChromeClose } from "react-icons/vsc";
import { useAuth } from "../../hooks/useAuth";
import { TailSpin } from "react-loader-spinner";
import { Link } from "react-router";

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

  if (!user) return null;

  const isActiveSubscription =
    user?.subscriptionStatus === "active" ? false : true;

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

  function formatFirestoreDate(timestamp) {
    if (!timestamp) return null;

    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}-${month < 10 ? "0" + month : month}-${year}`;
  }

  return (
    <div className="container mx-auto px-2 xl:px-15 relative pt-20">
      {open && (
        <div className="fixed top-0 bottom-0 left-0 right-0 m-auto max-w-130 w-full max-h-max bg-[#161616] py-2 px-5 rounded-2xl">
          <div className="flex items-center justify-end w-full">
            <button
              onClick={handleClose}
              className="p-1 rounded-lg text-slate-200 hover:text-slate-100 text-2xl bg-transparent border border-[#a0a0a0] cursor-pointer transition-all duration-200"
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
                className="py-1 px-5 rounded-l-full rounded-r-full text-slate-200 hover:text-slate-100 text-2xl bg-[#303030] border border-slate-700 hover:bg-[#323232] cursor-pointer transition-all duration-200"
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

      <div className="w-full flex items-center justify-center pt-20 mb-32">
        <div className="max-w-200 w-full py-2 px-5 rounded-2xl bg-[#202020] border border-slate-800">
          <h1 className="text-white font-bold text-4xl">Profile</h1>
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
              className="py-2 px-5 rounded-lg text-slate-200 hover:text-slate-100 text-3xl bg-[#303030] border border-[#a0a0a0] hover:bg-[#323232] cursor-pointer transition-all duration-200"
            >
              Edit
            </button>
          </div>
          <div className="p-4 my-4 w-full rounded-2xl bg-[#151515] border border-[#555] ">
            <h2 className="text-white font-bold text-3xl">
              {user?.displayName}
            </h2>
            <div className="flex items-center justify-between text-white text-xl">
              <p className="text-[#8f8f8f]">email:</p>
              <p className="font-bold line-clamp-1">{user?.email}</p>
            </div>
            <div className="flex items-center justify-between text-white text-xl">
              <p className="text-[#8f8f8f]">subscription:</p>
              <p className="font-bold">{user?.subscriptionTier}</p>
            </div>
            <div className="flex items-center justify-between text-white text-xl">
              <p className="text-[#8f8f8f]">date of subscription purchase:</p>
              <p className="font-bold">
                {formatFirestoreDate(user?.subscriptionStartedAt) || ""}
              </p>
            </div>
            <div className="flex items-center justify-between text-white text-xl">
              <p className="text-[#8f8f8f]">subscription validity period:</p>
              <p className="font-bold">
                {formatFirestoreDate(user?.subscriptionExpiresAt) || (
                  <span className="text-red-500 font-normal">
                    No active subscription available
                  </span>
                )}
              </p>
            </div>
          </div>
          {isActiveSubscription && (
            <div className="flex items-center justify-center w-full mt-8">
              <div className="w-9/10 mx-auto rounded-2xl py-6 bg-[#353535] border border-slate-700">
                <h2 className="text-white text-center mb-5 text-3xl">
                  You do not have any active tariffs yet.
                </h2>
                <div className="flex items-center justify-center">
                  <Link to={"/subscriptions"}>
                    <span className="bg-white rounded-xl py-1 px-4 font-bold text-2xl">
                      tariff selection
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserAccountPage;
