// import img from "../../assets/images/login-bg2.jpg"
import HeroSlider from "../../components/hero/HeroSlider"
import MovieRow from "../../components/movie/MovieRow"
import { MOVIE_GENRES, MOVIES, TV_GENRES } from "../../services/tmdb"
import useGetData from "../../hooks/useGetData"
 
function HomePage() {
  const {popular, topRated, trending} = MOVIES
  const {action, adventure, comedy} = MOVIE_GENRES
  const {actionAdventure, drama} = TV_GENRES
  const {data, loader} = useGetData({url: actionAdventure})
  if(loader) return <p className="text-center pt-56">Yuklanmoqda...</p>
  // console.log(data)
  return (
    <div className="w-full"  >
      <div><HeroSlider popular={data[0]} /></div>
      <div><MovieRow movieData={popular} listTitle={"popular"} type={"movie"} /></div>
      <div><MovieRow movieData={topRated} listTitle={"top rated"} type={"movie"} /></div>
      <div><MovieRow movieData={trending} listTitle={"trending"} type={"movie"} /></div>
      <div><MovieRow movieData={action} listTitle={"action"} type={"movie"} /></div>
      <div><MovieRow movieData={adventure} listTitle={"adventure"} type={"movie"} /></div>
      <div><MovieRow movieData={comedy} listTitle={"comedy"} type={"movie"} /></div>
      <div><MovieRow movieData={actionAdventure} listTitle={"action adventure"} type={"tv"} /></div>
      <div><MovieRow movieData={drama} listTitle={"drama"} type={"tv"} /></div>
    </div>
  )
}

export default HomePage

// style={{backgroundImage: `url(${img})`}}
