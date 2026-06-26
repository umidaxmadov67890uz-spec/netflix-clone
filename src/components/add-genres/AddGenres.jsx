import { TV } from "../../services/tmdb";
import MovieRow from "../movie/MovieRow";

function AddGenres(props) {
  const {genres, id} = props
  const {byGenre} = TV
  return (
    <div>
      {genres?.map((genre) => (
        <MovieRow
          movieData={byGenre(genre?.id)}
          listTitle={genre?.name}
          type={"tv"}
          key={genre?.id}
          id={id}
        />
      ))}
    </div>
  );
}

export default AddGenres;
