import type { Movie } from '../../types/movie';

import classes from './Card.module.scss';

type Iprops = {
  user: Movie;
};

export function Card({ user }: Iprops) {
  return <div className={classes.blok}>{user.name}</div>;
}
