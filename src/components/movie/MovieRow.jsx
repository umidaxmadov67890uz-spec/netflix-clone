import { Link } from "react-router"
import MovieItem from "./MovieItem"
import { GrNext } from "react-icons/gr"
import useGetData from "../../hooks/useGetData"

function MovieRow(props) {
  const {movieData, listTitle, link, type, id} = props
  const {data, loader} = useGetData({url: movieData})
  if(loader) return
  const finalData = data?.filter(e => e?.id !== id)
  return (
    <>
      {finalData && 
        <div className="container mx-auto px-2 xl:px-15">
          <div className="flex items-center justify-between">
            <h2 className="text-white text-2xl font-bold capitalize">{listTitle}</h2>
            <Link to={link} ><GrNext className="text-white text-2xl" /></Link>
          </div>
          <div className="flex items-start gap-x-6 flex-nowrap h-64 pt-4 overflow-x-scroll scrollbar-none">
            {finalData?.map(movie => (
              movie?.backdrop_path && (
                <div key={movie?.id} className="h-50 min-w-64  mx-auto flex justify-center">
                  <MovieItem data={movie}  type={type} />
                </div>
              )
            ))}
          </div>
        </div>
      }
    </>
  )
  
}

export default MovieRow
