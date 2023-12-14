import { createStyles, CoSize, CoTheme, defaultFontStyles, CoColor, getColor } from '@co-design/styles';
import { CO_HEIGHTS } from '../../constants';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'ghost-light' | 'text' | 'link' | 'critical';

interface ButtonStylesProps {
  color?: CoColor;
  size: CoSize;
  fullWidth: boolean;
}

// TODO: Size token
const sizes = {
  xsmall: {
    height: CO_HEIGHTS.xsmall,
    padding: '0 16px',
  },

  small: {
    height: CO_HEIGHTS.small,
    padding: '0 16px',
  },

  medium: {
    height: CO_HEIGHTS.medium,
    padding: '0 24px',
  },

  large: {
    height: CO_HEIGHTS.large,
    padding: '0 24px',
  },

  xlarge: {
    height: CO_HEIGHTS.xlarge,
    padding: '0 30px',
  },
};

const getFontStyles = (theme: CoTheme) => ({
  xsmall: {
    fontWeight: theme.foundations.typography.body.caption.fontWeight,
    fontSize: theme.foundations.typography.body.caption.fontSize,
    lineHeight: theme.foundations.typography.body.caption.lineHeight,
  },

  small: {
    fontWeight: theme.foundations.typography.body.caption.fontWeight,
    fontSize: theme.foundations.typography.body.caption.fontSize,
    lineHeight: theme.foundations.typography.body.caption.lineHeight,
  },

  medium: {
    fontWeight: theme.foundations.typography.body.body_02.fontWeight,
    fontSize: theme.foundations.typography.body.body_02.fontSize,
    lineHeight: theme.foundations.typography.body.body_02.lineHeight,
  },

  large: {
    fontWeight: theme.foundations.typography.body.body_01.fontWeight,
    fontSize: theme.foundations.typography.body.body_01.fontSize,
    lineHeight: theme.foundations.typography.body.body_01.lineHeight,
  },

  xlarge: {
    fontWeight: 'bold',
    fontSize: theme.fontSizes.xlarge,
  },
});

export const heights = Object.keys(sizes).reduce((acc, size) => {
  acc[size] = sizes[size].height;
  return acc;
}, {} as Record<CoSize, number>);

const getWidthStyles = (fullWidth: boolean) => ({
  display: fullWidth ? 'block' : 'inline-block',
  width: fullWidth ? '100%' : 'auto',
});

export default createStyles((theme, { size, color, fullWidth }: ButtonStylesProps, getRef) => {
  const loading = getRef('loading');
  const inner = getRef('inner');
  const spinner = getRef('spinner');
  const _color = getColor(theme, color);

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
    'ghost-light': {
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
      overflow: 'visible',
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
      ...getWidthStyles(fullWidth),
      ...defaultFontStyles(theme),
      ...getFontStyles(theme)[size],
      ...(_color ? { backgroundColor: _color } : {}),
      borderRadius: theme.foundations.tokens.radius.radius_01,
      position: 'relative',
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

    icon: {
      display: 'flex',
      alignItems: 'center',
    },

    leftIcon: {
      marginRight: 10,
    },

    rightIcon: {
      marginLeft: 10,
    },

    inner: {
      ref: inner,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      overflow: 'visible',
    },

    label: {
      whiteSpace: 'nowrap',
      height: '100%',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
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
