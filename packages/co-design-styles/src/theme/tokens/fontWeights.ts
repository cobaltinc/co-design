export type CoFontWeights = 'thin' | 'extra_light' | 'light' | 'normal' | 'medium' | 'semi_bold' | 'bold' | 'extra_bold' | 'black';

export const DEFAULT_FONT_WEIGHTS: Record<CoFontWeights, number> = {
  thin: 100,
  extra_light: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semi_bold: 600,
  bold: 700,
  extra_bold: 800,
  black: 900,
};
