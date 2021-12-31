import type { CSSProperties } from 'react';
import type { Tuple } from './Tuple';
import type { DeepPartial } from './DeepPartial';
import { CoBreakpoints, CoColor, CoPalette, CoFontSizes, CoOpacity, CoRadius, CoShadows, CoSpacing, CoZIndex } from '../tokens';

export interface HeadingStyle {
  fontSize: CSSProperties['fontSize'];
  lineHeight: CSSProperties['lineHeight'];
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
  radius: Record<CoRadius, number>;
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

  extra: Record<string, any>;
}

export type CoThemeOverride = DeepPartial<Omit<CoTheme, 'extra'>> & {
  extra?: Record<string, any>;
};
