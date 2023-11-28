import { foundations } from '../tokens';

export type FoundationSemanticColor =
  | keyof typeof foundations.tokens.color.text
  | keyof typeof foundations.tokens.color.bg
  | keyof typeof foundations.tokens.color.border
  | keyof typeof foundations.tokens.color.icon
  | keyof typeof foundations.tokens.color.specialty;

export type FoundationPaletteColor = keyof typeof foundations.color;
