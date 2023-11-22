import { createStyles, CoSize, CoPalette, defaultFontStyles } from '@co-design/styles';
import { addAlpha } from '../../utils';

interface IconButtonStylesProps {
  color?: CoPalette;
  size: CoSize;
}

export default createStyles((theme, { color: _color, size }: IconButtonStylesProps, getRef) => {
  const loading = getRef('loading');
  const inner = getRef('inner');
  const spinner = getRef('spinner');
  const color = _color || theme.primaryColor;

  const sizes = {
    xsmall: {
      width: theme.foundations.tokens.size['size-09'],
      height: theme.foundations.tokens.size['size-09'],
    },

    small: {
      width: theme.foundations.tokens.size['size-11'],
      height: theme.foundations.tokens.size['size-11'],
    },

    medium: {
      width: theme.foundations.tokens.size['size-12'],
      height: theme.foundations.tokens.size['size-12'],
    },

    large: {
      width: theme.foundations.tokens.size['size-14'],
      height: theme.foundations.tokens.size['size-14'],
    },
  };

  const paddings = {
    xsmall: 8,
    small: 8,
    medium: 16,
    large: 16,
    xlarge: 24,
  };

  return {
    loading: {
      ref: loading,
      pointerEvents: 'none',

      '&::before': {
        content: '""',
        position: 'absolute',
        top: -1,
        left: -1,
        right: -1,
        bottom: -1,
        cursor: 'not-allowed',
      },

      [`.${inner}`]: {
        opacity: 0,
      },

      [`.${spinner}`]: {
        display: 'flex',
      },
    },

    primary: {
      backgroundColor: theme.foundations.tokens.color.bg['bg-primary'],
      color: theme.foundations.tokens.color.text['text-light'],

      '&:not(:disabled):hover': {
        backgroundColor: theme.foundations.tokens.color.bg['bg-primary-hover'],
      },

      '&:not(:disabled):active': {
        backgroundColor: theme.foundations.tokens.color.bg['bg-primary-active'],
      },

      [`&:disabled:not(.${loading})`]: {
        backgroundColor: theme.foundations.tokens.color.bg['bg-disabled'],
        color: theme.foundations.tokens.color.text['text-disabled'],
      },
    },
    secondary: {
      backgroundColor: theme.foundations.tokens.color.bg['bg-secondary'],
      color: theme.foundations.tokens.color.text['text-light'],

      '&:not(:disabled):hover': {
        backgroundColor: theme.foundations.tokens.color.bg['bg-secondary-hover'],
      },

      '&:not(:disabled):active': {
        backgroundColor: theme.foundations.tokens.color.bg['bg-secondary-active'],
      },
      [`&:disabled:not(.${loading})`]: {
        backgroundColor: theme.foundations.tokens.color.bg['bg-disabled'],
        color: theme.foundations.tokens.color.text['text-disabled'],
      },
    },
    tertiary: {
      backgroundColor: theme.foundations.tokens.color.bg['bg-tertiary'],
      color: theme.foundations.tokens.color.text['text-base'],

      '&:not(:disabled):hover': {
        backgroundColor: theme.foundations.tokens.color.bg['bg-tertiary-hover'],
      },

      '&:not(:disabled):active': {
        backgroundColor: theme.foundations.tokens.color.bg['bg-tertiary-active'],
      },
      [`&:disabled:not(.${loading})`]: {
        backgroundColor: theme.foundations.tokens.color.bg['bg-disabled'],
        color: theme.foundations.tokens.color.text['text-disabled'],
      },
    },
    ghost: {
      backgroundColor: 'transparent',
      border: `1px solid ${theme.foundations.tokens.color.border['border-ghost']}`,
      color: theme.foundations.tokens.color.text['text-base'],

      '&:not(:disabled):hover': {
        backgroundColor: theme.foundations.tokens.color.bg['bg-tertiary-hover'],
      },

      '&:not(:disabled):active': {
        backgroundColor: theme.foundations.tokens.color.bg['bg-tertiary-active'],
      },

      [`&:disabled:not(.${loading})`]: {
        color: theme.foundations.tokens.color.text['text-disabled'],
        border: `1px solid ${theme.foundations.tokens.color.text['text-disabled']}`,
      },
    },
    'ghost-light': {
      backgroundColor: 'transparent',
      border: `1px solid ${theme.foundations.tokens.color.border['border-ghost-light']}`,
      color: theme.foundations.tokens.color.text['text-base'],

      '&:not(:disabled):hover': {
        backgroundColor: theme.foundations.tokens.color.bg['bg-tertiary-hover'],
      },

      '&:not(:disabled):active': {
        backgroundColor: theme.foundations.tokens.color.bg['bg-tertiary-active'],
      },

      [`&:disabled:not(.${loading})`]: {
        color: theme.foundations.tokens.color.text['text-disabled'],
        border: `1px solid ${theme.foundations.tokens.color.border['border-disabled']}`,
      },
    },
    text: {
      backgroundColor: 'transparent',
      color: theme.foundations.tokens.color.text['text-base'],

      '&:not(:disabled):hover': {
        backgroundColor: theme.foundations.tokens.color.bg['bg-tertiary-hover'],
      },

      '&:not(:disabled):active': {
        backgroundColor: theme.foundations.tokens.color.bg['bg-tertiary-active'],
      },

      [`&:disabled:not(.${loading})`]: {
        color: theme.foundations.tokens.color.text['text-disabled'],
      },
    },
    link: {
      height: 'auto',
      padding: 0,
      backgroundColor: 'transparent',
      color: theme.foundations.tokens.color.text['text-base'],

      '&:not(:disabled):hover': {
        color: theme.foundations.tokens.color.text['text-base-hover'],
      },

      '&:not(:disabled):active': {
        color: theme.foundations.tokens.color.text['text-base-active'],
      },

      [`&:disabled:not(.${loading})`]: {
        color: theme.foundations.tokens.color.text['text-disabled'],
      },
    },
    critical: {
      backgroundColor: theme.foundations.tokens.color.bg['bg-critical'],
      color: theme.foundations.tokens.color.text['text-light'],

      '&:not(:disabled):hover': {
        backgroundColor: theme.foundations.tokens.color.bg['bg-critical-hover'],
      },

      '&:not(:disabled):active': {
        backgroundColor: theme.foundations.tokens.color.bg['bg-critical-active'],
      },
      [`&:disabled:not(.${loading})`]: {
        backgroundColor: theme.foundations.tokens.color.bg['bg-disabled'],
        color: theme.foundations.tokens.color.text['text-disabled'],
      },
    },

    root: {
      ...sizes[size],
      ...defaultFontStyles(theme),
      borderRadius: theme.foundations.tokens.radius['radius-01'],
      position: 'relative',
      padding: 0,
      lineHeight: 1,
      WebkitTapHighlightColor: 'transparent',
      userSelect: 'none',
      boxSizing: 'border-box',
      textDecoration: 'none',
      cursor: 'pointer',
      appearance: 'none',
      WebkitAppearance: 'none',
      outline: 'none',
      border: 'none',

      '&:not(:disabled):focus-visible': {
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -2,
          bottom: -2,
          left: -2,
          right: -2,
          borderRadius: 4,
          outline: `2px solid ${theme.foundations.tokens.color.border['border-dark']}`,
        },
      },

      '&:not(:disabled):active': {
        transform: 'translateY(1px)',
      },

      '&:disabled': {
        cursor: 'not-allowed',
      },
    },

    inner: {
      ref: inner,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      overflow: 'visible',

      '& > *': {
        width: sizes[size].width - paddings[size],
        height: sizes[size].height - paddings[size],
      },
    },

    spinnerWrapper: {
      ref: spinner,
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: 'none',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
});
