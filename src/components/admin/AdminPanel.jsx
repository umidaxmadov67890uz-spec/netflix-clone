import { useEffect, useRef, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { TailSpin } from "react-loader-spinner";

function AdminPanel(props) {
  const { data, setEditMadalOpen, updateUserSubscription, updateUserRole } = props;
  const [subscriptionOpen, setSubscriptionOpen] = useState(false);
  const [roleOpen, setRoleOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isRole, setIsRole] = useState(data?.role || "");
  const [userSubscription, setUserSubscription] = useState(
    data?.subscription || "",
  );
  const originalRole = data?.role;
  const originalSubscription = data?.subscription;

  const roleRef = useRef(null);
  const subscriptionRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (!roleRef.current?.contains(e.target)) {
        setRoleOpen(false);
      }
      if (!subscriptionRef.current?.contains(e.target)) {
        setSubscriptionOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  function handleRole(value) {
    setIsRole(value);
    setRoleOpen(false);
  }

  function handleSubscription(value) {
    setUserSubscription(value);
    setSubscriptionOpen(false);
  }

  async function handleEdit(e) {
    e?.preventDefault();
    setSuccess(true);
    if (originalRole !== isRole) {
      await updateUserRole(data?.id, isRole);
    }
    if (originalSubscription !== userSubscription) {
      await updateUserSubscription(data?.id, userSubscription);
    }
    setSuccess(false);
    setEditMadalOpen(false);
  }
  console.log(data);
  
  return (
    <div className="absolute top-30 bottom-0 left-0 right-0 m-auto max-w-130 w-full max-h-max h-full bg-slate-900 py-2 px-5 rounded-2xl">
      <div className="flex items-center justify-end w-full">
        <button
          onClick={() => setEditMadalOpen(false)}
          className="p-1 rounded-lg text-slate-200 hover:text-slate-100 text-2xl bg-transparent border border-slate-500 cursor-pointer transition-all duration-200"
        >
          <VscChromeClose />
        </button>
      </div>
      <form onSubmit={handleEdit}>
        <div>
          <div
            key={data?.id}
            className="border border-slate-700 rounded-xl py-2 px-3 my-5"
          >
            <h2 className="text-white text-xl line-clamp-1">
              name: {data?.firstName}
            </h2>
            <h2 className="text-white text-xl line-clamp-1">
              surname: {data?.lastName}
            </h2>
            <p className="text-slate-400 text-lg line-clamp-1">
              email: {data?.email}
            </p>
            <div className="text-slate-400 text-lg flex items-center gap-x-2">
              role:
              <div ref={roleRef} className="relative">
                <div>
                  <button
                    type="button"
                    onClick={() => setRoleOpen((prev) => !prev)}
                    className="text-slate-200 hover:text-slate-50 hover:scale-105 px-4 border border-slate-700 hover:border-slate-600 rounded-l-full rounded-r-full transition-all duration-200 cursor-pointer"
                  >
                    <p>{isRole}</p>
                  </button>
                </div>
                {roleOpen && (
                  <div className="absolute top-10 right-0 p-2 rounded-xl bg-black">
                    <div className="flex flex-col items-start">
                      <span
                        onClick={() => handleRole("user")}
                        className="text-slate-200 hover:text-slate-50 w-max text-nowrap capitalize py-1 px-2 hover:bg-slate-900 rounded-xl cursor-pointer transition-all duration-200"
                      >
                        <span className="flex items-center gap-x-2 text-nowrap">
                          user
                        </span>
                      </span>
                      <span
                        onClick={() => handleRole("admin")}
                        className="text-slate-200 hover:text-slate-50 w-max text-nowrap capitalize py-1 px-2 hover:bg-slate-900 rounded-xl cursor-pointer transition-all duration-200"
                      >
                        <span className="flex items-center gap-x-2 text-nowrap">
                          admin
                        </span>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="text-slate-400 text-lg flex items-center gap-2">
              subscription:
              <div ref={subscriptionRef} className="relative">
                <div>
                  <button
                    type="button"
                    onClick={() => setSubscriptionOpen((prev) => !prev)}
                    className="text-slate-200 hover:text-slate-50 hover:scale-105 px-4 border border-slate-700 hover:border-slate-600 rounded-l-full rounded-r-full transition-all duration-200 cursor-pointer"
                  >
                    <p>{userSubscription}</p>
                  </button>
                </div>
                {subscriptionOpen && (
                  <div className="absolute top-10 right-0 p-2 rounded-xl bg-black">
                    <div className="flex flex-col items-start">
                      <span
                        onClick={() => handleSubscription("free")}
                        className="text-slate-200 hover:text-slate-50 w-max text-nowrap capitalize py-1 px-2 hover:bg-slate-900 rounded-xl cursor-pointer transition-all duration-200"
                      >
                        <span className="flex items-center gap-x-2 text-nowrap">
                          free
                        </span>
                      </span>
                      <span
                        onClick={() => handleSubscription("lite")}
                        className="text-slate-200 hover:text-slate-50 w-max text-nowrap capitalize py-1 px-2 hover:bg-slate-900 rounded-xl cursor-pointer transition-all duration-200"
                      >
                        <span className="flex items-center gap-x-2 text-nowrap">
                          lite
                        </span>
                      </span>
                      <span
                        onClick={() => handleSubscription("pro")}
                        className="text-slate-200 hover:text-slate-50 w-max text-nowrap capitalize py-1 px-2 hover:bg-slate-900 rounded-xl cursor-pointer transition-all duration-200"
                      >
                        <span className="flex items-center gap-x-2 text-nowrap">
                          pro
                        </span>
                      </span>
                      <span
                        onClick={() => handleSubscription("Premium")}
                        className="text-slate-200 hover:text-slate-50 w-max text-nowrap capitalize py-1 px-2 hover:bg-slate-900 rounded-xl cursor-pointer transition-all duration-200"
                      >
                        <span className="flex items-center gap-x-2 text-nowrap">
                          Premium
                        </span>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end mt-5 gap-x-2">
          <button
            type="button"
            onClick={() => setEditMadalOpen(false)}
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
  );
}

export default AdminPanel;
