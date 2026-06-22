import { useParams } from "react-router"
import { MOVIES } from './../../services/tmdb';
import useGetData from "../../hooks/useGetData";
import { useEffect } from "react";
import Movie from "../../components/movie/Movie";
// import { IoMdPlay } from "react-icons/io";
// import MovieRow from "../../components/movie/MovieRow";
// import Movie from "../../components/movie/Movie";
// import { useEffect, useState } from "react";
// import { FiInfo } from "react-icons/fi";



function MoviePage() {
  const { details} = MOVIES
  const { id } = useParams()
  // const [data, setData] = useState([])
  // const [loader, setLoader] = useState(true)
  const {loader, data, getData} = useGetData(details(id))

  useEffect(() => {
   getData(details(id))
    // console.log(test);
    
  }, [id])
  console.log(data)
  if(loader) return <p className="text-center pt-56">Yuklanmoqda...</p>
  // console.log(details(id))
  
  return (
   <Movie data={data} />
  )
}

export default MoviePage
