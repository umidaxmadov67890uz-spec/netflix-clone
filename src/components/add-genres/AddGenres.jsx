import { GENRES } from "../../services/tmdb";
import MovieRow from "../movie/MovieRow";

function AddGenres(props) {
  const {genres, id, type} = props
  // console.log(genres)
  return (
    <div>
      {genres?.map((genre) => (
        <MovieRow
          movieData={`${GENRES(type, genre?.id)}1`}
          listTitle={genre?.name}
          type={type}
          key={genre?.id}
          id={id}
          link={`/genre/${type}/${genre?.id}/${genre?.name?.replaceAll(" ", "-")}`}
        />
      ))}
    </div>
  );
}

export default AddGenres;
