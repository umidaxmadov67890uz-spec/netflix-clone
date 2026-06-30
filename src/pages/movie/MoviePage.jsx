import { useParams } from "react-router"
import { MOVIES } from './../../services/tmdb';
import useGetData from "../../hooks/useGetData";
import MovieHero from "../../components/hero/MovieHero";
import Description from "../../components/description/Description";
import YoutubeTrailer from "../../components/trailer/YoutubeTrailer";
import AddGenres from "../../components/add-genres/AddGenres";
import { FaRegStar } from "react-icons/fa";
import ActersList from './../../components/acters/ActersList';

function MoviePage() {
  const { actors, details, videos} = MOVIES
  const { id } = useParams()
  const {loader, data} = useGetData({url: details(id)})

  const actersData = actors(data?.id);

  if(loader) return <p className="text-center pt-56">Yuklanmoqda...</p>
  const youtubeTrailerData = videos(data?.id)
  console.log(data)
  // <Movie movieData={data} />
  
  return (
    <>
      <MovieHero bgImg={data?.backdrop_path} title={data?.original_title} />
      <div className="container mx-auto px-2 xl:px-15">
        <div>
          <Description img={data?.poster_path} title={data?.title} genres={data?.genres} date={data?.release_date} time={data?.runtime} overview={data?.overview} id={data?.id} type={"movie"} />
        </div>
        <div className="flex items-center gap-x-4 mt-2">
          <div className="py-3 px-7 bg-gray-800 rounded-xl flex flex-col items-center justify-center">
            <p className="text-white text-2xl font-bold">
              {data?.vote_average.toFixed(1)}
            </p>
            <p className="text-slate-200 text-sm flex items-center gap-x-1">
              <FaRegStar /> IMDb
            </p>
          </div>
          <div className="py-3 px-7 bg-gray-800 rounded-xl flex flex-col items-center justify-center">
            <p className="text-white text-2xl font-bold">
              ${data?.budget}
            </p>
            <p className="text-slate-200 text-sm">budget</p>
          </div>
          <div className="py-3 px-7 bg-gray-800 rounded-xl flex flex-col items-center justify-center">
            <p className="text-white text-2xl font-bold">
              ${data?.revenue}
            </p>
            <p className="text-slate-200 text-sm">revenue</p>
          </div>
        </div>
        <div>
          <YoutubeTrailer youtubeTrailerData={youtubeTrailerData} />
        </div>
        <div className="my-5">
          <ActersList
            actersData={actersData}
            title={"actors who appeared in the film"}
          />
        </div>
      </div>
      <div>
        <AddGenres genres={data?.genres} id={data?.id} type={"movie"} />
      </div>
    </>
  )
}

export default MoviePage
