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
      width: theme.foundations.tokens.size.size_09,
      height: theme.foundations.tokens.size.size_09,
    },

    small: {
      width: theme.foundations.tokens.size.size_11,
      height: theme.foundations.tokens.size.size_11,
    },

    medium: {
      width: theme.foundations.tokens.size.size_12,
      height: theme.foundations.tokens.size.size_12,
    },

    large: {
      width: theme.foundations.tokens.size.size_14,
      height: theme.foundations.tokens.size.size_14,
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
      backgroundColor: theme.foundations.tokens.color.bg.bg_primary,
      color: theme.foundations.tokens.color.text.text_light,

      '&:not(:disabled):hover': {
        backgroundColor: theme.foundations.tokens.color.bg.bg_primary_hover,
      },

      '&:not(:disabled):active': {
        backgroundColor: theme.foundations.tokens.color.bg.bg_primary_active,
      },

      [`&:disabled:not(.${loading})`]: {
        backgroundColor: theme.foundations.tokens.color.bg.bg_disabled,
        color: theme.foundations.tokens.color.text.text_disabled,
      },
    },
    secondary: {
      backgroundColor: theme.foundations.tokens.color.bg.bg_secondary,
      color: theme.foundations.tokens.color.text.text_light,

      '&:not(:disabled):hover': {
        backgroundColor: theme.foundations.tokens.color.bg.bg_secondary_hover,
      },

      '&:not(:disabled):active': {
        backgroundColor: theme.foundations.tokens.color.bg.bg_secondary_active,
      },
      [`&:disabled:not(.${loading})`]: {
        backgroundColor: theme.foundations.tokens.color.bg.bg_disabled,
        color: theme.foundations.tokens.color.text.text_disabled,
      },
    },
    tertiary: {
      backgroundColor: theme.foundations.tokens.color.bg.bg_tertiary,
      color: theme.foundations.tokens.color.text.text_base,

      '&:not(:disabled):hover': {
        backgroundColor: theme.foundations.tokens.color.bg.bg_tertiary_hover,
      },

      '&:not(:disabled):active': {
        backgroundColor: theme.foundations.tokens.color.bg.bg_tertiary_active,
      },
      [`&:disabled:not(.${loading})`]: {
        backgroundColor: theme.foundations.tokens.color.bg.bg_disabled,
        color: theme.foundations.tokens.color.text.text_disabled,
      },
    },
    ghost: {
      backgroundColor: 'transparent',
      border: `1px solid ${theme.foundations.tokens.color.border.border_ghost}`,
      color: theme.foundations.tokens.color.text.text_base,

      '&:not(:disabled):hover': {
        backgroundColor: theme.foundations.tokens.color.bg.bg_tertiary_hover,
      },

      '&:not(:disabled):active': {
        backgroundColor: theme.foundations.tokens.color.bg.bg_tertiary_active,
      },

      [`&:disabled:not(.${loading})`]: {
        color: theme.foundations.tokens.color.text.text_disabled,
        border: `1px solid ${theme.foundations.tokens.color.text.text_disabled}`,
      },
    },
    ghost_light: {
      backgroundColor: 'transparent',
      border: `1px solid ${theme.foundations.tokens.color.border.border_ghost_light}`,
      color: theme.foundations.tokens.color.text.text_base,

      '&:not(:disabled):hover': {
        backgroundColor: theme.foundations.tokens.color.bg.bg_tertiary_hover,
      },

      '&:not(:disabled):active': {
        backgroundColor: theme.foundations.tokens.color.bg.bg_tertiary_active,
      },

      [`&:disabled:not(.${loading})`]: {
        color: theme.foundations.tokens.color.text.text_disabled,
        border: `1px solid ${theme.foundations.tokens.color.border.border_disabled}`,
      },
    },
    text: {
      backgroundColor: 'transparent',
      color: theme.foundations.tokens.color.text.text_base,

      '&:not(:disabled):hover': {
        backgroundColor: theme.foundations.tokens.color.bg.bg_tertiary_hover,
      },

      '&:not(:disabled):active': {
        backgroundColor: theme.foundations.tokens.color.bg.bg_tertiary_active,
      },

      [`&:disabled:not(.${loading})`]: {
        color: theme.foundations.tokens.color.text.text_disabled,
      },
    },
    link: {
      height: 'auto',
      padding: 0,
      backgroundColor: 'transparent',
      color: theme.foundations.tokens.color.text.text_base,

      '&:not(:disabled):hover': {
        color: theme.foundations.tokens.color.text.text_base_hover,
      },

      '&:not(:disabled):active': {
        color: theme.foundations.tokens.color.text.text_base_active,
      },

      [`&:disabled:not(.${loading})`]: {
        color: theme.foundations.tokens.color.text.text_disabled,
      },
    },
    critical: {
      backgroundColor: theme.foundations.tokens.color.bg.bg_critical,
      color: theme.foundations.tokens.color.text.text_light,

      '&:not(:disabled):hover': {
        backgroundColor: theme.foundations.tokens.color.bg.bg_critical_hover,
      },

      '&:not(:disabled):active': {
        backgroundColor: theme.foundations.tokens.color.bg.bg_critical_active,
      },
      [`&:disabled:not(.${loading})`]: {
        backgroundColor: theme.foundations.tokens.color.bg.bg_disabled,
        color: theme.foundations.tokens.color.text.text_disabled,
      },
    },

    root: {
      ...sizes[size],
      ...defaultFontStyles(theme),
      borderRadius: theme.foundations.tokens.radius.radius_01,
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
          outline: `2px solid ${theme.foundations.tokens.color.border.border_dark}`,
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
