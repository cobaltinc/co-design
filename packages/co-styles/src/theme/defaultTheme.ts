import { CoTheme } from './types';
import {
  DEFAULT_BREAKPOINTS,
  DEFAULT_COLORS,
  DEFAULT_FONT_SIZES,
  DEFAULT_HEADINGS,
  DEFAULT_RADIUS,
  DEFAULT_SPACING,
  DEFAULT_SHADOWS,
} from './tokens';

export const CO_COLORS = Object.keys(DEFAULT_COLORS);
export const CO_SIZES = ['xsmall', 'small', 'medium', 'large', 'xlarge'] as const;

export const DEFAULT_THEME: CoTheme = {
  colorScheme: 'light',
  lineHeight: 1.55,
  fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  fontFamilyMonospace: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
  primaryColor: 'purple',

  colors: DEFAULT_COLORS,

  shadows: DEFAULT_SHADOWS,

  fontSizes: DEFAULT_FONT_SIZES,

  radius: DEFAULT_RADIUS,

  spacing: DEFAULT_SPACING,

  breakpoints: DEFAULT_BREAKPOINTS,

  headings: DEFAULT_HEADINGS,

  extra: {},
  locale: 'en',
};
