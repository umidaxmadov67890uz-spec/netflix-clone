import { FaArrowRight } from "react-icons/fa6";
import { HiOutlineTv } from "react-icons/hi2";
import { MdChildCare, MdLocalMovies } from "react-icons/md";
import { Link } from "react-router";

function SubscriptionsPage() {
  return (
    <div className="container mx-auto px-2 xl:px-15 pt-20">
      <h1 className="text-white text-5xl font-bold">Tariffs</h1>
      <p className="text-slate-100 my-2">
        <Link to={"/"}>
          <span className="capitalize">home page</span>
        </Link>{" "}
        / <span className="text-slate-400">Tariffs</span>{" "}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <div className="w-full flex flex-col gap-y-4 bg-[#1d1f1e] border border-[#252525] py-2 px-4 rounded-2xl">
          <h2 className="text-white text-5xl font-bold capitalize text-center border-b border-slate-600 pb-4 mx-5">
            lite
          </h2>
          <div className="flex items-center gap-x-2 ">
            <div className="flex items-center justify-center p-3 rounded-full bg-[#353535]">
              <MdLocalMovies className="text-2xl sm:text-4xl text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-lg sm:text-2xl">25 000+</p>
              <p className="text-slate-200 text-lg sm:text-2xl">movies and TV series</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2 ">
            <div className="flex items-center justify-center p-3 rounded-full bg-[#353535]">
              <HiOutlineTv className="text-2xl sm:text-4xl text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-lg sm:text-2xl">120+</p>
              <p className="text-slate-200 text-lg sm:text-2xl">TV channels</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2 ">
            <div className="flex items-center justify-center p-3 rounded-full bg-[#353535]">
              <MdChildCare className="text-2xl sm:text-4xl text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-lg sm:text-2xl">2000+</p>
              <p className="text-slate-200 text-lg sm:text-2xl">cartoons</p>
            </div>
          </div>
          <button className="w-full py-1 sm:py-2 flex items-center justify-center gap-x-4 text-center text-lg sm:text-2xl font-bold bg-white rounded-xl hover:scale-101 cursor-pointer transition-all duration-200">
            Buy from 29 000 UZS <FaArrowRight />
          </button>
        </div>

        <div className="w-full flex flex-col gap-y-4 bg-[#1d1f1e] border border-[#252525] py-2 px-4 rounded-2xl">
          <h2 className="text-white text-5xl font-bold capitalize text-center border-b border-slate-600 pb-4 mx-5">
            pro
          </h2>
          <div className="flex items-center gap-x-2 ">
            <div className="flex items-center justify-center p-3 rounded-full bg-[#353535]">
              <MdLocalMovies className="text-2xl sm:text-4xl text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-lg sm:text-2xl">30 000+</p>
              <p className="text-slate-200 text-lg sm:text-2xl">movies and TV series</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2 ">
            <div className="flex items-center justify-center p-3 rounded-full bg-[#353535]">
              <HiOutlineTv className="text-2xl sm:text-4xl text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-lg sm:text-2xl">190+</p>
              <p className="text-slate-200 text-lg sm:text-2xl">TV channels</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2 ">
            <div className="flex items-center justify-center p-3 rounded-full bg-[#353535]">
              <MdChildCare className="text-2xl sm:text-4xl text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-lg sm:text-2xl">2200+</p>
              <p className="text-slate-200 text-lg sm:text-2xl">cartoons</p>
            </div>
          </div>
          <button className="w-full py-1 sm:py-2 flex items-center justify-center gap-x-4 text-center text-lg sm:text-2xl font-bold bg-white rounded-xl hover:scale-101 cursor-pointer transition-all duration-200">
            Buy from 39 000 UZS <FaArrowRight />
          </button>
        </div>

        <div className="w-full flex flex-col gap-y-4 bg-[#1d1f1e] border border-[#252525] py-2 px-4 rounded-2xl">
          <h2 className="text-white text-5xl font-bold capitalize text-center border-b border-slate-600 pb-4 mx-5">
            premium
          </h2>
          <div className="flex items-center gap-x-2 ">
            <div className="flex items-center justify-center p-3 rounded-full bg-[#353535]">
              <MdLocalMovies className="text-2xl sm:text-4xl text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-lg sm:text-2xl">50 000+</p>
              <p className="text-slate-200 text-lg sm:text-2xl">movies and TV series</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2 ">
            <div className="flex items-center justify-center p-3 rounded-full bg-[#353535]">
              <HiOutlineTv className="text-2xl sm:text-4xl text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-lg sm:text-2xl">220+</p>
              <p className="text-slate-200 text-lg sm:text-2xl">TV channels</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2 ">
            <div className="flex items-center justify-center p-3 rounded-full bg-[#353535]">
              <MdChildCare className="text-2xl sm:text-4xl text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-lg sm:text-2xl">2500+</p>
              <p className="text-slate-200 text-lg sm:text-2xll">cartoons</p>
            </div>
          </div>
          <button className="w-full py-1 sm:py-2 flex items-center justify-center gap-x-4 text-center text-lg sm:text-2xl font-bold bg-white rounded-xl hover:scale-101 cursor-pointer transition-all duration-200">
            Buy from 59 000 UZS <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionsPage;
