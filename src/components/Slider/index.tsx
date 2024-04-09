import { PropsWithChildren } from 'react';

import classes from './index.module.scss';

export function Slider({ children }: PropsWithChildren) {
  return (
    <div className={classes.slider}>
      <div className={classes.slider__container}>{children}</div>
    </div>
  );
}
