import type { CoThemeBase, CoTheme } from '../types';
import { fns } from './fns';

export const attachFunctions = (themeBase: CoThemeBase): CoTheme => {
  return {
    ...themeBase,
    fn: {
      largerThan: fns.largerThan(themeBase),
      smallerThan: fns.smallerThan(themeBase),
      radialGradient: fns.radialGradient,
      linearGradient: fns.linearGradient,
      rgba: fns.rgba,
      size: fns.size,
      lighten: fns.lighten,
      darken: fns.darken,
      spacing: fns.spacing,
    },
  };
};
