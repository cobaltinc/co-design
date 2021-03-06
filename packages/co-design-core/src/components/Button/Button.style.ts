import { createStyles, CoSize, CoTheme, CoPalette, defaultFontStyles } from '@co-design/styles';
import { addAlpha } from '../../utils';
import { CO_HEIGHTS } from '../../constants';

export type ButtonVariant = 'solid' | 'ghost' | 'light-solid' | 'text';

interface ButtonStylesProps {
  color?: CoPalette;
  size: CoSize;
  fullWidth: boolean;
}

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
    fontWeight: 'normal',
    fontSize: theme.fontSizes.xsmall,
  },

  small: {
    fontWeight: 'normal',
    fontSize: theme.fontSizes.xsmall,
  },

  medium: {
    fontWeight: 'normal',
    fontSize: theme.fontSizes.small,
  },

  large: {
    fontWeight: 'bold',
    fontSize: theme.fontSizes.medium,
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

export default createStyles((theme, { color: _color, size, fullWidth }: ButtonStylesProps, getRef) => {
  const loading = getRef('loading');
  const inner = getRef('inner');
  const spinner = getRef('spinner');
  const color = _color || theme.primaryColor;

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

    solid: {
      backgroundColor: theme.palettes[color][theme.colorScheme === 'light' ? 5 : 3],
      color: theme.colorScheme === 'light' ? theme.colors.white : theme.palettes.gray[9],

      '&:not(:disabled):hover': {
        backgroundColor: theme.palettes[color][theme.colorScheme === 'light' ? 6 : 2],
      },

      '&:not(:disabled):active': {
        backgroundColor: theme.palettes[color][theme.colorScheme === 'light' ? 7 : 1],
      },

      '&:not(:disabled):focus-visible': {
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -2,
          bottom: -2,
          left: -2,
          right: -2,
          borderRadius: 4,
          outline: `1px solid ${theme.palettes[color][theme.colorScheme === 'light' ? 5 : 3]}`,
        },
      },

      [`&:disabled:not(.${loading})`]: {
        backgroundColor: theme.palettes.gray[2],
        color: addAlpha(theme.colors.black, theme.opacity.opacity3),
      },
    },
    ghost: {
      backgroundColor: theme.colors.transparent,
      border: `1px solid ${theme.palettes[color][theme.colorScheme === 'light' ? 5 : 3]}`,
      color: theme.palettes[color][theme.colorScheme === 'light' ? 5 : 3],

      '&:not(:disabled):hover': {
        backgroundColor: addAlpha(theme.palettes[color][theme.colorScheme === 'light' ? 0 : 8], theme.opacity.opacity3),
      },

      '&:not(:disabled):active': {
        backgroundColor: addAlpha(theme.palettes[color][theme.colorScheme === 'light' ? 1 : 7], theme.opacity.opacity3),
      },

      '&:not(:disabled):focus-visible': {
        '&::before': {
          content: '""',
          position: 'absolute',
          top: -2,
          bottom: -2,
          left: -2,
          right: -2,
          borderRadius: 4,
          outline: `1px solid ${theme.palettes[color][theme.colorScheme === 'light' ? 5 : 3]}`,
        },
      },

      [`&:disabled:not(.${loading})`]: {
        color: addAlpha(theme.palettes[color][1], theme.opacity.opacity3),
        border: `1px solid ${addAlpha(theme.palettes[color][1], theme.opacity.opacity3)}`,
      },
    },
    'light-solid': {
      backgroundColor: addAlpha(theme.colorScheme === 'light' ? theme.colors.black : theme.colors.white, theme.opacity.opacity1),
      color: theme.palettes[color][theme.colorScheme === 'light' ? 5 : 3],

      '&:not(:disabled):hover': {
        backgroundColor: addAlpha(theme.palettes.dark[theme.colorScheme === 'light' ? 8 : 1], theme.opacity.opacity2),
      },

      '&:not(:disabled):active': {
        backgroundColor: addAlpha(theme.palettes.dark[theme.colorScheme === 'light' ? 7 : 2], theme.opacity.opacity3),
      },

      '&:not(:disabled):focus-visible': {
        outline: `1px solid ${theme.palettes[color][theme.colorScheme === 'light' ? 5 : 3]}`,

        '&::before': {
          content: '""',
          position: 'absolute',
          top: -2,
          bottom: -2,
          left: -3,
          right: -3,
          borderRadius: 4,
          outline: `1px solid ${theme.palettes[color][theme.colorScheme === 'light' ? 5 : 3]}`,
        },
      },

      [`&:disabled:not(.${loading})`]: {
        backgroundColor: addAlpha(theme.palettes.dark[theme.colorScheme === 'light' ? 4 : 1], theme.opacity.opacity1),
        color: addAlpha(theme.palettes[color][theme.colorScheme === 'light' ? 7 : 3], theme.opacity.opacity3),
      },
    },
    text: {
      backgroundColor: 'transparent',
      color: theme.palettes[color][theme.colorScheme === 'light' ? 5 : 3],

      '&:not(:disabled):hover': {
        backgroundColor: addAlpha(theme.palettes[color][theme.colorScheme === 'light' ? 8 : 1], theme.opacity.opacity2),
      },

      '&:not(:disabled):active': {
        backgroundColor: addAlpha(theme.palettes[color][theme.colorScheme === 'light' ? 7 : 2], theme.opacity.opacity3),
      },

      '&:not(:disabled):focus-visible': {
        outline: `1px solid ${theme.palettes[color][theme.colorScheme === 'light' ? 5 : 3]}`,

        '&::before': {
          content: '""',
          position: 'absolute',
          top: -2,
          bottom: -2,
          left: -3,
          right: -3,
          borderRadius: 4,
          outline: `1px solid ${theme.palettes[color][theme.colorScheme === 'light' ? 5 : 3]}`,
        },
      },

      [`&:disabled:not(.${loading})`]: {
        color: addAlpha(theme.palettes[color][theme.colorScheme === 'light' ? 7 : 3], theme.opacity.opacity3),
      },
    },

    root: {
      ...sizes[size],
      ...getWidthStyles(fullWidth),
      ...defaultFontStyles(theme),
      ...getFontStyles(theme)[size],
      borderRadius: theme.radius.medium,
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
