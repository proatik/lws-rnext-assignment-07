// react components.
import MovieList from "@/components/movies/MovieList";

export default function HomePage({ params: { lang } }) {
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        <MovieList lang={lang} />
      </div>
    </div>
  );
}
