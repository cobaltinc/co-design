import { CoSize, CoThemeBase } from '../../types';
import { size } from './size';

export const largerThan = (theme: CoThemeBase) => {
  return (breakpoint: CoSize | number) => `@media (min-width: ${size({ size: breakpoint, sizes: theme.breakpoints }) + 1}px)`;
};

export const smallerThan = (theme: CoThemeBase) => {
  return (breakpoint: CoSize | number) => `@media (max-width: ${size({ size: breakpoint, sizes: theme.breakpoints })}px)`;
};
