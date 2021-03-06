import { CoSize } from '../types/CoSize';

export type CoFontSizes = 'tiny' | CoSize;

export const DEFAULT_FONT_SIZES: Record<CoFontSizes, number> = {
  tiny: 11,
  xsmall: 12,
  small: 14,
  medium: 16,
  large: 18,
  xlarge: 20,
};
