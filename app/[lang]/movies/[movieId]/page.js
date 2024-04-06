// react components.
import MovieDetails from "@/components/movies/MovieDetails";

const MoviePage = async ({ params: { lang, movieId } }) => {
  return <MovieDetails lang={lang} movieId={movieId} />;
};

export default MoviePage;
