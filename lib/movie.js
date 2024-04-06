const loadMovies = () => {
  let movies = import("@/data/movies.json")
    .then((module) => module.default)
    .then((data) => data.results);

  return movies;
};

let movies = await loadMovies();

export const getMovies = async () => {
  return movies;
};

export const getMovieById = async (movieId) => {
  return movies.find((movie) => movie.id == movieId);
};

export const createMovie = async (movie) => {
  const newMovie = { id: nextId(), ...movie };
  movies.push(newMovie);
  return newMovie;
};

export const nextId = () => {
  const maxId = movies.reduce((max, { id }) => Math.max(max, id), 0);
  return maxId + 1;
};

export const updateMovie = async (movieId, title) => {
  const movie = movies.find((movie) => movie.id == movieId);

  if (movie) movie.title = title || movie.title;

  return movie;
};

export const deleteMovie = async (movieId) => {
  const filteredMovies = movies.filter((movie) => movie.id != movieId);

  if (movies.length === filteredMovies.length) return false;
  else {
    movies = filteredMovies;
    return true;
  }
};
