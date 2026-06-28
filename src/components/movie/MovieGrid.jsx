import MovieItem from "./MovieItem";

function MovieGrid(props) {
  const {data, type} = props
  return (
    <div className="container mx-auto xl:px-15">
      <div className="flex flex-wrap justify-between sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-10 gap-x-4">
        {data?.map((movie, index) => (
          movie?.backdrop_path && (
            <div
              key={movie?.id + index}
              className="h-50 min-w-60 sm:min-w-auto sm:w-9/10 mx-auto flex justify-center"
            >
              <MovieItem data={movie} type={type} />
            </div>
          )
        ))}
      </div>
    </div>
  );
}

export default MovieGrid;
