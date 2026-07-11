// import { httpsCallable } from "firebase/functions";
import { Link } from "react-router";
import SubscriptionItem from "../../components/subscription/SubscriptionItem";
import { useState } from "react";
import { functions } from "../../firebase/FirebaseConfig";
import { httpsCallable } from 'firebase/functions';

function SubscriptionsPage() {
  const [open, setOpen] = useState(false);
  const [activeSubscription, setActiveSubscription] = useState(null);
  const [activeSubscriptionData, setActiveSubscriptionData] = useState(null);
  const subscriptionData = {
    lite: {
      title: "lite",
      oneMonth: {
        price: 2.41,
        totalPrice: 2.41,
        planId: "lite_1m",
      },
      threeMonths: {
        price: 2.16,
        totalPrice: 6.47,
        planId: "lite_3m",
      },
      oneYear: {
        price: 2,
        totalPrice: 24,
        planId: "lite_1y",
      },
    },
    pro: {
      title: "pro",
      oneMonth: {
        price: 3.24,
        totalPrice: 3.24,
        planId: "pro_1m",
      },
      threeMonths: {
        price: 2.9,
        totalPrice: 8.7,
        planId: "pro_3m",
      },
      oneYear: {
        price: 2.7,
        totalPrice: 32.33,
        planId: "pro_1y",
      },
    },
    premium: {
      title: "premium",
      oneMonth: {
        price: 4.89,
        totalPrice: 4.89,
        planId: "premium_1m",
      },
      threeMonths: {
        price: 4.4,
        totalPrice: 13.18,
        planId: "premium_3m",
      },
      oneYear: {
        price: 4.08,
        totalPrice: 48.89,
        planId: "premium_1y",
      },
    },
  };

  async function handleSubscribe(planId) {
    try {
      const createCheckoutSession = httpsCallable(
        functions,
        "createCheckoutSession",
      );
      const result = await createCheckoutSession({ planId });
      window.location.href = result.data.url;
    } catch (error) {
      console.error("To'lov sahifasini ochishda xato:", error);
    }
  }

  function handleClose() {
    setOpen(false);
    setActiveSubscription(null);
    setActiveSubscriptionData(null);
  }
  return (
    <div className="container mx-auto px-2 xl:px-15 pt-20">
      <div className="relative">
        {open && (
          <div className="z-50 fixed top-0 right-0 left-0 bottom-0 m-auto pt-2 px-4 pb-4 max-w-96 w-full h-max rounded-2xl bg-[#252525] border border-slate-700">
            <h2 className="text-4xl text-white font-bold capitalize text-center">
              {subscriptionData?.[activeSubscription]?.title}
            </h2>

            <div
              onClick={() =>
                setActiveSubscriptionData(
                  subscriptionData?.[activeSubscription]?.oneMonth?.planId,
                )
              }
              className={`py-4 px-2 my-4 w-full h-28 flex flex-col justify-end bg-[#202020] rounded-2xl border ${subscriptionData?.[activeSubscription]?.oneMonth?.planId === activeSubscriptionData ? "border-slate-100" : ""} cursor-pointer`}
            >
              <div className="w-full flex items-end justify-between text-white text-xl">
                <p className="font-bold">1 month</p>
                <p className="font-bold">
                  {subscriptionData?.[activeSubscription]?.oneMonth?.price}{" "}
                  UZS/Month
                </p>
              </div>
              <p className="text-slate-200">
                When paying{" "}
                {subscriptionData?.[activeSubscription]?.oneMonth?.totalPrice}{" "}
                uzs every 1 month
              </p>
            </div>

            <div
              onClick={() =>
                setActiveSubscriptionData(
                  subscriptionData?.[activeSubscription]?.threeMonths?.planId,
                )
              }
              className={`py-4 px-2 my-4 w-full h-28 flex flex-col justify-end bg-[#202020] rounded-2xl border  ${subscriptionData?.[activeSubscription]?.threeMonths?.planId === activeSubscriptionData ? "border-slate-100" : ""}  cursor-pointer`}
            >
              <div className="w-full flex items-end justify-between text-white text-xl">
                <p className="font-bold">3 months</p>
                <p className="font-bold">
                  {subscriptionData?.[activeSubscription]?.threeMonths?.price}{" "}
                  UZS/Month
                </p>
              </div>
              <p className="text-slate-200">
                When paying{" "}
                {
                  subscriptionData?.[activeSubscription]?.threeMonths
                    ?.totalPrice
                }{" "}
                uzs every 3 months
              </p>
            </div>

            <div
              onClick={() =>
                setActiveSubscriptionData(
                  subscriptionData?.[activeSubscription]?.oneYear?.planId,
                )
              }
              className={`py-4 px-2 my-4 w-full h-28 flex flex-col justify-end bg-[#202020] rounded-2xl border ${subscriptionData?.[activeSubscription]?.oneYear?.planId === activeSubscriptionData ? "border-slate-100" : ""} cursor-pointer`}
            >
              <div className="w-full flex items-end justify-between text-white text-xl">
                <p className="font-bold">1 year</p>
                <p className="font-bold">
                  {subscriptionData?.[activeSubscription]?.oneYear?.price}{" "}
                  UZS/Month
                </p>
              </div>
              <p className="text-slate-200">
                When paying{" "}
                {subscriptionData?.[activeSubscription]?.oneYear?.totalPrice}{" "}
                uzs every 1 year
              </p>
            </div>
            <span className="h-px w-9/10 mx-auto bg-[#5f5f5f] my-5 block"></span>
            <button onClick={() => handleSubscribe(activeSubscriptionData)} className="w-full py-1 my-3 text-center bg-white font-bold capitalize text-2xl rounded-2xl hover:scale-101 cursor-pointer transition-all duration-300">
              bosilmasin
            </button>
            <button
              onClick={handleClose}
              className="w-full py-1 text-center bg-[#424242]  text-white font-bold capitalize text-2xl rounded-2xl hover:scale-101 cursor-pointer transition-all duration-300"
            >
              close
            </button>
          </div>
        )}
        <h1 className="text-white text-5xl font-bold">Tariffs</h1>
        <p className="text-slate-100 my-2">
          <Link to={"/"}>
            <span className="capitalize">home page</span>
          </Link>{" "}
          / <span className="text-slate-400">Tariffs</span>{" "}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mb-20">
          <SubscriptionItem
            title={"lite"}
            movieAndTV={"25 000"}
            TVChannels={"120"}
            cartoons={"2000"}
            buyFrom={"29 000"}
            setOpen={setOpen}
            data={subscriptionData}
            setActiveSubscription={setActiveSubscription}
            setActiveSubscriptionData={setActiveSubscriptionData}
          />
          <SubscriptionItem
            title={"pro"}
            movieAndTV={"30 000"}
            TVChannels={"190"}
            cartoons={"2200"}
            buyFrom={"39 000"}
            setOpen={setOpen}
            data={subscriptionData}
            setActiveSubscription={setActiveSubscription}
            setActiveSubscriptionData={setActiveSubscriptionData}
          />
          <SubscriptionItem
            title={"premium"}
            movieAndTV={"50 000"}
            TVChannels={"210"}
            cartoons={"2500"}
            buyFrom={"59 000"}
            setOpen={setOpen}
            data={subscriptionData}
            setActiveSubscription={setActiveSubscription}
            setActiveSubscriptionData={setActiveSubscriptionData}
          />
        </div>
      </div>
    </div>
  );
}

export default SubscriptionsPage;
