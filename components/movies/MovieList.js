// react components.
import MovieItem from "./MovieItem";

// utility functions.
import { getMovies } from "@/lib/movie";

const MovieList = async ({ lang }) => {
  const movies = await getMovies();

  return (
    <>
      {movies?.map((movie) => (
        <MovieItem key={movie?.id} movie={movie} lang={lang} />
      ))}
    </>
  );
};

export default MovieList;
