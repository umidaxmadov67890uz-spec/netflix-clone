import { FaUserCircle } from "react-icons/fa";
import useGetData from "../../hooks/useGetData";
import { IMG_URL } from "../../services/tmdb";

function ActersList(props) {
  const { actersData, title } = props;
  const { loader, data } = useGetData({ url: actersData });

  if (loader) return <p className="text-center pt-56">Yuklanmoqda...</p>;

  return (
    <div>
      <h1 className="text-white font-bold text-2xl">{title}</h1>
      <div className="flex flex-nowrap items-start gap-x-4 mt-3 overflow-x-scroll scrollbar-none">
        {data?.cast
          ?.map((acter) => (
            <div key={acter?.id}>
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-transparent hover:border-red-500 cursor-pointer transition-all duration-200">
                {acter?.profile_path ? (
                  <img
                    className="w-full h-full object-cover"
                    src={`${IMG_URL}${acter?.profile_path}`}
                    alt={acter?.name}
                  />
                ) : (
                  <FaUserCircle className="w-full h-full text-white" />
                )}
              </div>
              <p className="text-white text-wrap text-center">{acter?.name}</p>
            </div>
          ))
          .slice(0, 20)}
      </div>
    </div>
  );
}

export default ActersList;
