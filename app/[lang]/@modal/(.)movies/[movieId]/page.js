// react components.
import Modal from "@/components/shared/Modal";
import MovieDetails from "@/components/movies/MovieDetails";

const MovieModal = async ({ params: { lang, movieId } }) => {
  return (
    <Modal>
      <MovieDetails lang={lang} movieId={movieId} />
    </Modal>
  );
};

export default MovieModal;
