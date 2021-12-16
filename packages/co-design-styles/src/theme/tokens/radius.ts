import { CoSize } from '../types/CoSize';

export type CoRadius = Extract<CoSize, 'small' | 'medium' | 'large'>;

export const DEFAULT_RADIUS: Record<CoRadius, number> = {
  small: 2,
  medium: 4,
  large: 8,
};
