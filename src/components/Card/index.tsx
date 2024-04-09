import type { Movie } from '../../types/movie';

import cx from 'clsx';
import classes from './index.module.scss';

type Iprops = {
  movie: Movie;
};

export function Card({ movie }: Iprops) {
  const ratingClasses = cx(classes.rating, {
    [classes.green]: movie.rating.imdb > 7,
    [classes.red]: movie.rating.imdb < 4,
  });
  return (
    <button className={classes.block}>
      <div className={ratingClasses}>{movie.rating.imdb}</div>
      <div className={classes.icon}>
        <img src={movie.poster.url} alt={movie.name} />
      </div>
      <div className={classes.text}>{movie.name}</div>
    </button>
  );
}
