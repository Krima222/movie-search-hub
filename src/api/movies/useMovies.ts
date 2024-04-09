import { useQuery } from 'react-query';

import { fetchMovies } from './fetchMovies';

export function useMovies({
  count,
  year,
  age,
  countrie,
}: {
  count: number;
  year: number;
  age: string;
  countrie: string;
}) {
  return useQuery({
    queryFn: () => fetchMovies({ count, year, age, countrie }),
    queryKey: ['movies', { count, year, age, countrie }],
    staleTime: 1000,
  });
}
