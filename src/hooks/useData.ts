import { useEffect, useState } from 'react';

import type { MoviesResponse } from '../api/movies/schema';

const apiToken = import.meta.env.VITE_API_TOKEN;

export function useData(count: string) {
  const [movies, setMovies] = useState<MoviesResponse[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            'X-API-KEY': apiToken,
          },
        };
        const response = await fetch(
          `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=${parseInt(count)}&selectFields=id&selectFields=name&selectFields=poster&selectFields=rating`,
          options,
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {};
  }, [count]);

  return { movies };
}
