// export type User = {
//   id: {
//     value: string;
//   };
//   name: string;
// };
export type Movie = {
  id: string;
  // status: null | any; // Тип статуса не указан в ваших данных, пока что оставим как null | any
  rating: {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    // await: null | any; // Тип await не указан в ваших данных, пока что оставим как null | any
  };
  votes: {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };
  backdrop: {
    url: string;
    previewUrl: string;
  };
  movieLength: number;
  type: string;
  name: string;
  description: string;
  year: number;
  poster: {
    url: string;
    previewUrl: string;
  };
  genres: { name: string }[];
  countries: { name: string }[];
  typeNumber: number;
  alternativeName: string;
  enName: string | null;
  names: {
    name: string;
    language?: string;
    type?: string | null;
  }[];
};
