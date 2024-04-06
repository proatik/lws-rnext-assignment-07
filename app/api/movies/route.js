// utility functions.
import { getMovies, createMovie } from "@/lib/movie";

export async function GET() {
  const movies = await getMovies();
  return Response.json({ movies });
}

export async function POST(request) {
  const movieData = await request.json();
  const newMovie = await createMovie(movieData);

  return Response.json({ movie: newMovie });
}
