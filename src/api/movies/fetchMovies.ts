import { movieSchema } from './schema';

const apiToken = import.meta.env.VITE_API_TOKEN;

if (!apiToken) {
  throw new Error('VITE_API_TOKEN is not specified in the .env file');
}

export async function fetchMovies({
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
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': apiToken,
    },
  };
  const response = await fetch(
    `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=${count}&selectFields=id&selectFields=name&selectFields=poster&selectFields=rating&selectFields=description&selectFields=persons&year=${year}&ageRating=${age}&countries.name=${countrie}`,
    // `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=${count}&year=${year}&ageRating=${age}&countries.name=${countrie}&selectFields=persons`,
    options,
  );

  return movieSchema.parse(await response.json());
}
