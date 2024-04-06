import Image from "next/image";
import { notFound } from "next/navigation";

// utility functions.
import { getMovieById } from "@/lib/movie";
import { getDictionary } from "@/app/[lang]/dictionaries";

const MovieDetails = async ({ movieId, lang }) => {
  const dict = await getDictionary(lang);
  const movie = await getMovieById(movieId);

  if (!movie) notFound();

  return (
    <section>
      <div>
        <Image
          width={800}
          height={500}
          alt="thumbnail"
          src={movie?.backdrop_path}
          className="w-full object-cover h-auto max-h-[300px] lg:max-h-[500px]"
        />
      </div>
      <div className="grid grid-cols-12 gap-8 py-12">
        <div className="col-span-2">
          <Image
            width={177}
            height={265}
            alt="thumbnail"
            src={movie?.poster_path}
            className="w-full h-auto"
          />
        </div>
        <div className="col-span-8">
          <h2 className="text-2xl font-bold">{movie?.title}</h2>
          <p className="my-2 italic text-slate-600 dark:text-slate-400">
            {movie?.overview}
          </p>
          <ul className="my-8 space-y-2">
            <li>
              {dict?.movieDetails?.releaseDate} : {movie?.release_date}
            </li>
            <li>
              {dict?.movieDetails?.averageVote} : {movie?.vote_average}
            </li>
            <li>
              {dict?.movieDetails?.voteCount} : {movie?.vote_count}
            </li>
            <li>
              {dict?.movieDetails?.popularity} : {movie?.popularity}
            </li>
          </ul>
        </div>
        <div className="col-span-2 space-y-4">
          <button className="w-full py-2 font-medium rounded-md bg-primary text-slate-800 text-ellipsis">
            {dict?.movieDetails?.streamButton}
          </button>
          <button className="w-full py-2 font-medium rounded-md bg-primary text-slate-800 text-ellipsis">
            {dict?.movieDetails?.downloadButton}
          </button>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
