import { CoSize } from '../types/CoSize';

export type CoRadius = CoSize;

export const DEFAULT_RADIUS: Record<CoRadius, number> = {
  xsmall: 2,
  small: 4,
  medium: 8,
  large: 16,
  xlarge: 32,
};
