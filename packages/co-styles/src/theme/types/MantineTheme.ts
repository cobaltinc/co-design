import type { CSSProperties } from 'react';
import type { CoSize, CoNumberSize } from './MantineSize';
import type { Tuple } from './Tuple';
import type { DeepPartial } from './DeepPartial';
import { CSSObject } from '../../tss';

export interface HeadingStyle {
  fontSize: CSSProperties['fontSize'];
  lineHeight: CSSProperties['lineHeight'];
}

interface MantineThemeFunctions {
  fontStyles(): CSSObject;
  focusStyles(): CSSObject;
  cover(offset?: number | string): CSSObject;
  themeColor(color: string, shade: number): string;
  rgba(color: string, alpha: number): string;
  size(props: { size: string | number; sizes: Record<string, any> }): any;
  linearGradient(deg: number, ...colors: string[]): string;
  radialGradient(...colors: string[]): string;
  smallerThan(breakpoint: CoNumberSize): string;
  largerThan(breakpoint: CoNumberSize): string;
  lighten(color: string, alpha: number): string;
  darken(color: string, alpha: number): string;
}

export interface MantineTheme {
  colorScheme: 'light' | 'dark';
  colors: Record<string, Tuple<string, 10>>;
  fontFamily: CSSProperties['fontFamily'];
  lineHeight: CSSProperties['lineHeight'];
  fontFamilyMonospace: CSSProperties['fontFamily'];
  primaryColor: string;

  fontSizes: Record<CoSize, number>;
  radius: Record<CoSize, number>;
  spacing: Record<CoSize, number>;
  breakpoints: Record<CoSize, number>;
  shadows: Record<CoSize, string>;

  headings: {
    fontFamily: CSSProperties['fontFamily'];
    fontWeight: CSSProperties['fontWeight'];
    sizes: {
      h1: HeadingStyle;
      h2: HeadingStyle;
      h3: HeadingStyle;
      h4: HeadingStyle;
      h5: HeadingStyle;
      h6: HeadingStyle;
    };
  };

  fn: MantineThemeFunctions;
  extra: Record<string, any>;

  locale: string;
}

export type MantineThemeBase = Omit<MantineTheme, 'fn'>;
export type MantineThemeOverride = DeepPartial<Omit<MantineThemeBase, 'fn' | 'other'>> & {
  other?: Record<string, any>;
};
