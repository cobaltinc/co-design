export type CoSpacing =
  | 'spacing0'
  | 'spacing1'
  | 'spacing2'
  | 'spacing3'
  | 'spacing4'
  | 'spacing5'
  | 'spacing6'
  | 'spacing7'
  | 'spacing8'
  | 'spacing9';

export const DEFAULT_SPACING: Record<CoSpacing, number> = {
  spacing0: 0,
  spacing1: 4,
  spacing2: 8,
  spacing3: 16,
  spacing4: 24,
  spacing5: 32,
  spacing6: 40,
  spacing7: 48,
  spacing8: 56,
  spacing9: 64,
};
