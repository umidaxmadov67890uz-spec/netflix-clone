import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";

function SuccessPage() {
  return (
    <div className="container mx-auto px-2 xl:px-15 pt-20">
      <div className="max-w-130 w-full mx-auto mt-20 py-4 px-5 rounded-2xl bg-[#202020]">
        <h1 className="text-white font-bold text-center text-4xl">
          The payment was completed successfully!
        </h1>
        <div className="w-full flex items-center justify-center mt-6">
          <Link to={"/"}>
            <span className="py-1 px-4 bg-white rounded-xl font-bold text-center text-xl flex items-center gap-x-2">
              home page <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SuccessPage;
