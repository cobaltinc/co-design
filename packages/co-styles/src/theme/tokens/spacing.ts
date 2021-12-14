import { CoSize } from '../types/CoSize';

export type CoSpacing = CoSize;

export const DEFAULT_SPACING: Record<CoSpacing, number> = {
  xsmall: 4,
  small: 8,
  medium: 16,
  large: 24,
  xlarge: 32,
};
