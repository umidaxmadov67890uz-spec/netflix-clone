import { FaArrowRight } from "react-icons/fa6";
import { HiOutlineTv } from "react-icons/hi2";
import { MdChildCare, MdLocalMovies } from "react-icons/md";

function SubscriptionItem(props) {
  const {title, movieAndTV, TVChannels, cartoons, buyFrom, setOpen,data, setActiveSubscription, setActiveSubscriptionData} = props

  function handleBuy (s) {
    setOpen(true)
    setActiveSubscription(s)
    setActiveSubscriptionData(data?.[s]?.oneMonth?.planId)
  }

  return (
    <div className="w-full flex flex-col gap-y-4 bg-[#1d1f1e] border border-[#252525] py-2 px-4 rounded-2xl">
      <h2 className="text-white text-5xl font-bold capitalize text-center border-b border-[#5f5f5f] pb-4 mx-5">
        {title}
      </h2>
      <div className="flex items-center gap-x-2 ">
        <div className="flex items-center justify-center p-3 rounded-full bg-[#353535]">
          <MdLocalMovies className="text-2xl sm:text-4xl text-white" />
        </div>
        <div>
          <p className="text-white font-bold text-lg sm:text-2xl">{movieAndTV}+</p>
          <p className="text-slate-200 text-lg sm:text-2xl">
            movies and TV series
          </p>
        </div>
      </div>
      <div className="flex items-center gap-x-2 ">
        <div className="flex items-center justify-center p-3 rounded-full bg-[#353535]">
          <HiOutlineTv className="text-2xl sm:text-4xl text-white" />
        </div>
        <div>
          <p className="text-white font-bold text-lg sm:text-2xl">{TVChannels}+</p>
          <p className="text-slate-200 text-lg sm:text-2xl">TV channels</p>
        </div>
      </div>
      <div className="flex items-center gap-x-2 ">
        <div className="flex items-center justify-center p-3 rounded-full bg-[#353535]">
          <MdChildCare className="text-2xl sm:text-4xl text-white" />
        </div>
        <div>
          <p className="text-white font-bold text-lg sm:text-2xl">{cartoons}+</p>
          <p className="text-slate-200 text-lg sm:text-2xl">cartoons</p>
        </div>
      </div>
      <button onClick={() => handleBuy(title)} className="w-full py-1 sm:py-2 flex items-center justify-center gap-x-4 text-center text-lg sm:text-2xl font-bold bg-white rounded-xl hover:scale-101 cursor-pointer transition-all duration-200">
        Buy from {buyFrom} UZS <FaArrowRight />
      </button>
    </div>
  );
}

export default SubscriptionItem;
