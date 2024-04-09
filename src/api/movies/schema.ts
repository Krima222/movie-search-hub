import { z } from 'zod';

export const movieSchema = z.object({
  docs: z
    .object({
      id: z.number(),
      name: z.string(),
      poster: z.object({
        url: z.string(),
        previewUrl: z.string(),
      }),
      description: z.string(),
      persons: z
        .object({
          id: z.number(),
          name: z.string(),
        })
        .array(),
      rating: z.object({
        kp: z.number(),
        imdb: z.number(),
        filmCritics: z.number(),
        russianFilmCritics: z.number(),
      }),
    })
    .array(),
});

export type MoviesResponse = z.infer<typeof movieSchema>;
