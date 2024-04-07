import { useQuery } from 'react-query';
import { useState } from 'react';

import type { Movie } from '../types/movie';

const apiToken = import.meta.env.TOKEN;

export function useData(count: number) {
  const [movies, setMovies] = useState<Movie[] | null>(null);

  const { refetch } = useQuery<Movie[] | null>(
    ['movies', count],
    async () => {
      const url = `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=${10}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'X-API-KEY': apiToken,
        },
      });
      const data = await response.json();
      return data.results;
    },
    {
      refetchOnWindowFocus: false, //которая позволяет автоматически обновлять данные в фоновом режиме при потере фокуса в браузере
      onSuccess: setMovies,
    },
  );

  return { movies, refetch };
}
