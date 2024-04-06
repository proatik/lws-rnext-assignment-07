// utility functions.
import { getMovieById, updateMovie, deleteMovie } from "@/lib/movie";

export async function GET(_request, { params: { movieId } }) {
  const movie = await getMovieById(movieId);

  if (!movie) {
    return new Response(JSON.stringify({ message: "Movie not found" }), {
      status: 404,
    });
  }

  return Response.json({ movie });
}

export async function PATCH(request, { params: { movieId } }) {
  const updateData = await request.json();
  const updatedMovie = await updateMovie(movieId, updateData?.title);

  if (!updatedMovie) {
    return new Response(JSON.stringify({ message: "Movie not found" }), {
      status: 404,
    });
  }

  return Response.json({ movie: updatedMovie });
}

export async function DELETE(_request, { params: { movieId } }) {
  const result = await deleteMovie(movieId);

  if (!result) {
    return new Response(JSON.stringify({ message: "Movie not found" }), {
      status: 404,
    });
  }

  return Response.json({ message: "Movie deleted successfully!" });
}
