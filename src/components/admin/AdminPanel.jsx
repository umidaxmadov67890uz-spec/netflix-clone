import { useEffect, useRef, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { TailSpin } from "react-loader-spinner";

const userSubscriptionExpiresAtData = [
  { id: 1, value: "1 month", months: 1 },
  { id: 2, value: "2 month", months: 2 },
  { id: 3, value: "3 month", months: 3 },
  { id: 4, value: "4 month", months: 4 },
  { id: 5, value: "5 month", months: 5 },
  { id: 6, value: "6 month", months: 6 },
  { id: 7, value: "7 month", months: 7 },
  { id: 8, value: "8 month", months: 8 },
  { id: 9, value: "9 month", months: 9 },
  { id: 10, value: "10 month", months: 10 },
  { id: 11, value: "11 month", months: 11 },
  { id: 12, value: "1 year", months: 12 },
];

function AdminPanel(props) {
  const { data, setEditMadalOpen, updateUserSubscription, updateUserRole } =
    props;
  const [success, setSuccess] = useState(false);

  const [roleOpen, setRoleOpen] = useState(false);
  const [subscriptionTierOpen, setsubscriptionTierOpen] = useState(false);
  const [subsriptionExpiresAtOpen, setSubsriptionExpiresAtOpen] =
    useState(false);

  const [isRole, setIsRole] = useState(data?.role || "");
  const [userSubscriptionTier, setUserSubscriptionTier] = useState(
    data?.subscriptionTier || "",
  );
  const [userSubscriptionExpiresAt, setUserSubscriptionExpiresAt] =
    useState(null);

  const originalRole = data?.role;
  const originalSubscription = data?.subscriptionTier;

  const roleRef = useRef(null);
  const subscriptionTierRef = useRef(null);
  const subscriptionExpiresAtRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (!roleRef.current?.contains(e.target)) {
        setRoleOpen(false);
      }
      if (!subscriptionTierRef.current?.contains(e.target)) {
        setsubscriptionTierOpen(false);
      }
      if (!subscriptionExpiresAtRef.current?.contains(e.target)) {
        setSubsriptionExpiresAtOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  function handleRole(value) {
    setIsRole(value);
    setRoleOpen(false);
  }

  function handleSubscriptionTier(value) {
    setUserSubscriptionTier(value);
    if (originalSubscription !== value && value !== "free") {
      setUserSubscriptionExpiresAt(userSubscriptionExpiresAtData?.[0]);
    }
    setsubscriptionTierOpen(false);
  }

  function handleSubsriptionExpiresAt(value) {
    setUserSubscriptionExpiresAt(value);
    setSubsriptionExpiresAtOpen(false);
  }

  async function handleEdit(e) {
    e?.preventDefault();
    setSuccess(true);
    if (originalRole !== isRole) {
      await updateUserRole(data?.id, isRole);
    }
    if (
      originalSubscription !== userSubscriptionTier ||
      (userSubscriptionExpiresAt?.months && userSubscriptionTier !== "free")
    ) {
      await updateUserSubscription(
        data?.id,
        userSubscriptionTier,
        userSubscriptionExpiresAt?.months,
      );
    }
    setSuccess(false);
    setEditMadalOpen(false);
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
    <div className="fixed top-0 bottom-0 left-0 right-0 m-auto max-w-130 w-full max-h-max h-full bg-[#202020] py-2 px-5 rounded-2xl">
      <div className="flex items-center justify-end w-full">
        <button
          onClick={() => setEditMadalOpen(false)}
          className="p-1 rounded-lg text-slate-200 hover:text-slate-100 text-2xl bg-transparent border border-[#a0a0a0] cursor-pointer transition-all duration-200"
        >
          <VscChromeClose />
        </button>
      </div>
      <form onSubmit={handleEdit}>
        <div>
          <div className="border flex flex-col gap-y-3 border-[#a0a0a0] rounded-xl py-2 px-3 my-5">
            <div className="text-white text-xl w-full line-clamp-1 flex items-center justify-between">
              <span>name:</span> <h2>{data?.firstName}</h2>
            </div>
            <div className="text-white text-xl w-full line-clamp-1 flex items-center justify-between">
              <span>surname:</span> <h2>{data?.lastName}</h2>
            </div>
            <div className="text-[#aaa] text-lg w-full line-clamp-1 flex items-center justify-between">
              <span>email:</span> <p>{data?.email}</p>
            </div>
            <div className="text-[#aaa] text-lg w-full line-clamp-1 flex items-center justify-between">
              <span>date of subscription purchase:</span> <p>{formatFirestoreDate(data?.subscriptionStartedAt)}</p>
            </div>
            <div className="text-[#aaa] text-lg w-full line-clamp-1 flex items-center justify-between">
              <span>subscription validity period:</span> <p>{formatFirestoreDate(data?.subscriptionExpiresAt)}</p>
            </div>

            <div className="text-[#aaa] text-lg w-full flex items-center justify-between gap-x-2">
              <span>role:</span>
              <div ref={roleRef} className="relative">
                <div>
                  <button
                    type="button"
                    onClick={() => setRoleOpen((prev) => !prev)}
                    className="text-slate-200 hover:text-slate-50 hover:scale-102 px-4 border border-[#a0a0a0] hover:border-[#a2a2a2] rounded-l-full rounded-r-full transition-all duration-200 cursor-pointer"
                  >
                    <p>{isRole}</p>
                  </button>
                </div>
                {roleOpen && (
                  <div className="absolute top-10 right-0 p-2 rounded-xl bg-black z-20">
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

            <div className="text-[#aaa] text-lg w-full flex items-center justify-between gap-2">
              <span>subscription:</span>
              <div ref={subscriptionTierRef} className="relative">
                <div>
                  <button
                    type="button"
                    onClick={() => setsubscriptionTierOpen((prev) => !prev)}
                    className="text-slate-200 hover:text-slate-50 hover:scale-102 px-4 border border-[#a0a0a0] hover:border-[#a2a2a2] rounded-l-full rounded-r-full transition-all duration-200 cursor-pointer"
                  >
                    <p>{userSubscriptionTier}</p>
                  </button>
                </div>
                {subscriptionTierOpen && (
                  <div className="absolute top-10 right-0 p-2 rounded-xl bg-black z-20">
                    <div className="flex flex-col items-start">
                      <span
                        onClick={() => handleSubscriptionTier("free")}
                        className="text-slate-200 hover:text-slate-50 w-max text-nowrap capitalize py-1 px-2 hover:bg-slate-900 rounded-xl cursor-pointer transition-all duration-200"
                      >
                        <span className="flex items-center gap-x-2 text-nowrap capitalize">
                          free
                        </span>
                      </span>
                      <span
                        onClick={() => handleSubscriptionTier("lite")}
                        className="text-slate-200 hover:text-slate-50 w-max text-nowrap capitalize py-1 px-2 hover:bg-slate-900 rounded-xl cursor-pointer transition-all duration-200"
                      >
                        <span className="flex items-center gap-x-2 text-nowrap capitalize">
                          lite
                        </span>
                      </span>
                      <span
                        onClick={() => handleSubscriptionTier("pro")}
                        className="text-slate-200 hover:text-slate-50 w-max text-nowrap capitalize py-1 px-2 hover:bg-slate-900 rounded-xl cursor-pointer transition-all duration-200"
                      >
                        <span className="flex items-center gap-x-2 text-nowrap capitalize">
                          pro
                        </span>
                      </span>
                      <span
                        onClick={() => handleSubscriptionTier("premium")}
                        className="text-slate-200 hover:text-slate-50 w-max text-nowrap capitalize py-1 px-2 hover:bg-slate-900 rounded-xl cursor-pointer transition-all duration-200"
                      >
                        <span className="flex items-center gap-x-2 text-nowrap capitalize">
                          Premium
                        </span>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="text-[#aaa] text-lg w-full flex items-center justify-between gap-2">
              <span> subscription expiration time:</span>
              <div ref={subscriptionExpiresAtRef} className="relative">
                <div>
                  <button
                    type="button"
                    onClick={() => setSubsriptionExpiresAtOpen((prev) => !prev)}
                    className="text-slate-200 hover:text-slate-50 hover:scale-102 px-4 border border-[#a0a0a0] hover:border-[#a2a2a2a2] rounded-l-full rounded-r-full transition-all duration-200 cursor-pointer"
                  >
                    <p>{userSubscriptionExpiresAt?.value || "unknown"}</p>
                  </button>
                </div>
                {subsriptionExpiresAtOpen && (
                  <div className="absolute top-10 right-0 p-2 rounded-xl bg-black z-20">
                    <div className="flex flex-col items-start max-h-32 overflow-y-scroll scrollbar-thumb-[#383838]">
                      {userSubscriptionExpiresAtData?.map((month) => (
                        <span
                          key={month?.id}
                          onClick={() => handleSubsriptionExpiresAt(month)}
                          className="text-slate-200 hover:text-slate-50 w-max text-nowrap capitalize py-1 px-2 hover:bg-slate-900 rounded-xl cursor-pointer transition-all duration-200"
                        >
                          <span className="flex items-center gap-x-2 text-nowrap">
                            {month?.value}
                          </span>
                        </span>
                      ))}
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
            className="py-1 px-5 rounded-l-full rounded-r-full text-slate-200 hover:text-slate-100 text-2xl bg-[#303030] border border-[#555] hover:bg-[#323232] cursor-pointer transition-all duration-200"
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
