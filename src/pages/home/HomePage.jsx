// import img from "../../assets/images/login-bg2.jpg"
import HeroSlider from "../../components/hero/HeroSlider"
import MovieRow from "../../components/movie/MovieRow"
import { MOVIE_GENRES,  MOVIES,  TV_GENRES } from "../../services/tmdb"
import useGetData from "../../hooks/useGetData"
 
function HomePage() {
  const {popular} = MOVIES
  const {action, adventure, comedy, crime, romance} = MOVIE_GENRES
  const {actionAdventure, drama, documentary} = TV_GENRES
  const {data, loader} = useGetData({url: popular})
  if(loader) return <p className="text-center pt-56">Yuklanmoqda...</p>
  // console.log(data)
  return (
    <div className="w-full"  >
      <div><HeroSlider popular={data} /></div>
      <div><MovieRow movieData={crime} listTitle={"crime"} type={"movie"} link={`/genre/movie/80/crime`} /></div>
      <div><MovieRow movieData={documentary} listTitle={"documentary"} type={"tv"} link={`/genre/tv/99/documentary`} /></div>
      <div><MovieRow movieData={romance} listTitle={"romance"} type={"movie"} link={`/genre/movie/10749/romance`} /></div>
      <div><MovieRow movieData={action} listTitle={"action"} type={"movie"} link={`/genre/movie/28/action`} /></div>
      <div><MovieRow movieData={adventure} listTitle={"adventure"} type={"movie"} link={`/genre/movie/12/adventure`} /></div>
      <div><MovieRow movieData={comedy} listTitle={"comedy"} type={"movie"} link={`/genre/movie/35/comedy`} /></div>
      <div><MovieRow movieData={actionAdventure} listTitle={"action adventure"} type={"tv"} link={`/genre/tv/10759/action-adventure`} /></div>
      <div><MovieRow movieData={drama} listTitle={"drama"} type={"tv"} link={`/genre/tv/18/drama`} /></div>
    </div>
  )
}

export default HomePage

// style={{backgroundImage: `url(${img})`}}
