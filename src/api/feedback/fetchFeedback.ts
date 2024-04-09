const apiToken = import.meta.env.VITE_API_TOKEN;

if (!apiToken) {
  throw new Error('VITE_API_TOKEN is not specified in the .env file');
}

export async function fetchFeedback() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': apiToken,
    },
  };
  const response = await fetch(
    `https://api.kinopoisk.dev/v1.4/review?page=1&limit=10&id=&movieId=3363962`,
    options,
  );

  return await response.json();
}
