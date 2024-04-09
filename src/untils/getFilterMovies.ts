import type { MoviesResponse } from '../api/movies/schema';

export const getfilteredUsers = (
  movies: MoviesResponse | undefined,
  searchQuery: string,
) => {
  if (!movies) {
    return [];
  }

  if (searchQuery) {
    return movies.docs.filter((movie) => {
      return movie.name
        .toLocaleLowerCase()
        .includes(searchQuery.toLocaleLowerCase());
    });
  }

  return movies.docs;
};
