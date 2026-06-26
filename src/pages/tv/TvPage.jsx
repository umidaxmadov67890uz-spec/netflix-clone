import { useParams } from "react-router"
import { TV } from "../../services/tmdb"
import useGetData from "../../hooks/useGetData"
import MovieHero from "../../components/hero/MovieHero"
import Description from "../../components/description/Description"
import AddGenres from "../../components/add-genres/AddGenres"
import Seasons from "../../components/seasons/Seasons"
// import { useState } from "react"

function TvPage() {
  const { details} = TV
  const { id } = useParams()
  const {loader, data} = useGetData({url: details(id)})
  // const [seasonNumberData, setSeasonNumberData] = useState()

  if(loader) return <p className="text-center pt-56">Yuklanmoqda...</p>

  // setSeasonNumberData(season(data?.id, data?.last_episode_to_air?.season_number))
  // console.log(seasonNumberData)
  console.log(data)
  
  return (
    <div>
      <MovieHero bgImg={data?.backdrop_path} title={data?.original_name} />
      <div className="container mx-auto xl:px-15">
        <div>
          <Description img={data?.poster_path} title={data?.name} genres={data?.genres} date={data?.last_air_date} overview={data?.overview} />
        </div>
        <div className="w-full bg-slate-900 rounded-2xl border border-slate-800 p-4 mt-5">
          <Seasons seasons={data?.seasons} seasonNumber={data?.last_episode_to_air?.season_number} id={data?.id} />
        </div>
      </div>
      <div>
        <AddGenres genres={data?.genres} id={data?.id} />
      </div>
    </div>
  )
}

export default TvPage
