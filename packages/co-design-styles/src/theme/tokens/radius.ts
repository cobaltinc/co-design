import { CoSize } from '../types/CoSize';

export type CoRadius = Extract<CoSize, 'small' | 'medium' | 'large'> | 'round' | 'circular';

export const DEFAULT_RADIUS: Record<CoRadius, number | '50%'> = {
  small: 2,
  medium: 4,
  large: 8,
  round: 9999,
  circular: '50%',
};
