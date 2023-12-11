import { CoPalette } from '../tokens';
import { FoundationPaletteColor, FoundationSemanticColor } from './CoFoundations';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

export type CoColor = CoPalette | FoundationPaletteColor | FoundationSemanticColor | Color;
