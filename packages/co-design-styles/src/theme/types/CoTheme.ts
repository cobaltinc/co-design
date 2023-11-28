import type { CSSProperties } from 'react';
import type { Tuple } from './Tuple';
import type { DeepPartial } from './DeepPartial';
import { CoBreakpoints, CoPalette, CoFontSizes, CoOpacity, CoRadius, CoShadows, CoSpacing, CoZIndex, foundations } from '../tokens';
import { CoSize } from './CoSize';
import { CoFontWeights } from '../tokens/fontWeights';
import { CoColor } from './CoColor';

export interface HeadingStyle {
  fontSize: CSSProperties['fontSize'];
  lineHeight: CSSProperties['lineHeight'];
}

interface CoThemeFunctions {
  rgba(color: string, alpha: number): string;
  size(props: { size: string | number; sizes: Record<string, any> }): any;
  linearGradient(deg: number, ...colors: string[]): string;
  radialGradient(...colors: string[]): string;
  smallerThan(breakpoint: CoSize | number): string;
  largerThan(breakpoint: CoSize | number): string;
  lighten(color: string, alpha: number): string;
  darken(color: string, alpha: number): string;
  spacing(size: number): number;
}

export interface CoTheme {
  locale: string;
  colorScheme: 'light' | 'dark';
  fontFamily: CSSProperties['fontFamily'];
  lineHeight: CSSProperties['lineHeight'];
  fontFamilyMonospace: CSSProperties['fontFamily'];
  primaryColor: string;

  colors: Record<CoColor, string>;
  palettes: Record<CoPalette, Tuple<string, 10>>;
  fontSizes: Record<CoFontSizes, number>;
  fontWeights: Record<CoFontWeights, number>;
  radius: Record<CoRadius, number | string>;
  spacing: Record<CoSpacing, number>;
  breakpoints: Record<CoBreakpoints, number>;
  shadows: Record<CoShadows, string>;
  opacity: Record<CoOpacity, number>;
  zIndex: Record<CoZIndex, number>;

  headings: {
    h1: HeadingStyle;
    h2: HeadingStyle;
    h3: HeadingStyle;
    h4: HeadingStyle;
    h5: HeadingStyle;
    h6: HeadingStyle;
  };

  fn: CoThemeFunctions;
  extra: Record<string, any>;

  foundations?: typeof foundations;

  fontFace?: Record<string, any>;
}

export type CoThemeBase = Omit<CoTheme, 'fn'>;

export type CoThemeOverride = DeepPartial<Omit<CoTheme, 'extra'>> & {
  extra?: Record<string, any>;
};
