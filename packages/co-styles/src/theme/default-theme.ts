import { MantineThemeBase } from './types';
import { DEFAULT_COLORS } from './default-colors';
import { attachFunctions } from './functions/attach-functions';

export const MANTINE_COLORS = Object.keys(DEFAULT_COLORS);
export const MANTINE_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export const _DEFAULT_THEME: MantineThemeBase = {
  colorScheme: 'light',
  colors: DEFAULT_COLORS,
  lineHeight: 1.55,
  fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  fontFamilyMonospace: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
  primaryColor: 'blue',

  shadows: {
    xsmall: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
    small: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px',
    medium: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
    large: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px',
    xlarge: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px',
  },

  fontSizes: {
    xsmall: 12,
    small: 14,
    medium: 16,
    large: 18,
    xlarge: 20,
  },

  radius: {
    xsmall: 2,
    small: 4,
    medium: 8,
    large: 16,
    xlarge: 32,
  },

  spacing: {
    xsmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xlarge: 24,
  },

  breakpoints: {
    xsmall: 576,
    small: 768,
    medium: 992,
    large: 1200,
    xlarge: 1400,
  },

  headings: {
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
    fontWeight: 700,
    sizes: {
      h1: { fontSize: 34, lineHeight: 1.3 },
      h2: { fontSize: 26, lineHeight: 1.35 },
      h3: { fontSize: 22, lineHeight: 1.4 },
      h4: { fontSize: 18, lineHeight: 1.45 },
      h5: { fontSize: 16, lineHeight: 1.5 },
      h6: { fontSize: 14, lineHeight: 1.5 },
    },
  },

  extra: {},
  locale: 'en',
};

export const DEFAULT_THEME = attachFunctions(_DEFAULT_THEME);
