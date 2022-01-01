import { linearGradient, radialGradient } from './gradient';
import { smallerThan, largerThan } from './breakpoints';
import { rgba } from './rgba';
import { size } from './size';
import { darken } from './darken';
import { lighten } from './lighten';
import { spacing } from './spacing';

export const fns = {
  linearGradient,
  radialGradient,
  smallerThan,
  largerThan,
  rgba,
  size,
  darken,
  lighten,
  spacing,
} as const;
