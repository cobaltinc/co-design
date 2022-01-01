import { CoTheme, CoThemeBase } from './types';
import {
  DEFAULT_BREAKPOINTS,
  DEFAULT_COLORS,
  DEFAULT_FONT_SIZES,
  DEFAULT_HEADINGS,
  DEFAULT_RADIUS,
  DEFAULT_SPACING,
  DEFAULT_SHADOWS,
  DEFAULT_OPACITY,
  DEFAULT_PALETTES,
  DEFAULT_Z_INDEX,
} from './tokens';
import { CSSObject } from '../tss';
import { attachFunctions } from './functions/attachFunctions';

export const CO_PALETTES = Object.keys(DEFAULT_PALETTES);
export const CO_COLORS = Object.keys(DEFAULT_COLORS);
export const CO_SIZES = ['xsmall', 'small', 'medium', 'large', 'xlarge'] as const;

export const defaultFontStyles = (theme: CoTheme) => {
  return (): CSSObject => ({
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    fontFamily: theme.fontFamily || 'sans-serif',
  });
};

export const _DEFAULT_THEME: CoThemeBase = {
  locale: 'en',
  colorScheme: 'light',
  lineHeight: 1.55,
  fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  fontFamilyMonospace: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
  primaryColor: 'purple',

  colors: DEFAULT_COLORS,

  palettes: DEFAULT_PALETTES,

  shadows: DEFAULT_SHADOWS,

  fontSizes: DEFAULT_FONT_SIZES,

  radius: DEFAULT_RADIUS,

  spacing: DEFAULT_SPACING,

  breakpoints: DEFAULT_BREAKPOINTS,

  headings: DEFAULT_HEADINGS,

  opacity: DEFAULT_OPACITY,

  zIndex: DEFAULT_Z_INDEX,

  extra: {},
};

export const DEFAULT_THEME = attachFunctions(_DEFAULT_THEME);
