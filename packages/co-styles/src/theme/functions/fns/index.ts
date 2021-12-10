import { fontStyles } from './font-styles';
import { focusStyles } from './focus-styles';
import { themeColor } from './theme-color';
import { linearGradient } from './linear-gradient';
import { radialGradient } from './radial-gradient';
import { smallerThan, largerThan } from './breakpoints';
import { rgba } from './rgba';
import { size } from './size';
import { cover } from './cover';
import { darken } from './darken';
import { lighten } from './lighten';

export const fns = {
  fontStyles,
  themeColor,
  focusStyles,
  linearGradient,
  radialGradient,
  smallerThan,
  largerThan,
  rgba,
  size,
  cover,
  darken,
  lighten,
} as const;
