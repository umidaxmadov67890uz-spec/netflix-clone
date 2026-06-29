import { useParams } from "react-router"
import { MOVIES } from './../../services/tmdb';
import useGetData from "../../hooks/useGetData";
import Movie from "../../components/movie/Movie";

function MoviePage() {
  const { details} = MOVIES
  const { id } = useParams()
  const {loader, data} = useGetData({url: details(id)})

  if(loader) return <p className="text-center pt-56">Yuklanmoqda...</p>
  // console.log(data)
  
  return (
   <Movie movieData={data} />
  )
}

export default MoviePage
