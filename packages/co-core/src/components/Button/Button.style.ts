import { createStyles, CoSize, CoTheme, CoColorPalette } from '@co/styles';
import { addAlpha } from '../../utils';
import { CO_HEIGHTS } from '../../constants';

export type ButtonVariant = 'primary' | 'secondary' | 'inverse' | 'tertiary';

interface ButtonStylesProps {
  color?: CoColorPalette;
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
    fontSize: theme.fontSizes.medium,
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

    primary: {
      backgroundColor: theme.colorPalettes[color][6],
      color: 'white',

      '&:not(:disabled):hover': {
        backgroundColor: theme.colorPalettes[color][7],
      },

      '&:not(:disabled):active': {
        backgroundColor: theme.colorPalettes[color][8],
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
          outline: `1px solid ${theme.colorPalettes[color][6]}`,
        },
      },

      [`&:disabled:not(.${loading})`]: {
        backgroundColor: theme.colorPalettes.dark[2],
        color: addAlpha(theme.colors.black, theme.opacity.opacity3),
      },
    },
    inverse: {
      backgroundColor: theme.colors.white,

      color: theme.colorPalettes[color][6],

      '&:not(:disabled):hover': {
        backgroundColor: theme.colorPalettes.dark[3],
      },

      '&:not(:disabled):active': {
        backgroundColor: theme.colorPalettes.dark[4],
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
          outline: `1px solid ${theme.colors.white}`,
        },
      },

      [`&:disabled:not(.${loading})`]: {
        backgroundColor: theme.colorPalettes.dark[2],
        color: addAlpha(theme.colors.black, theme.opacity.opacity3),
      },
    },
    secondary: {
      backgroundColor: theme.colors.transparent,
      border: `1px solid ${theme.colorPalettes[color][6]}`,
      color: theme.colorPalettes[color][6],

      '&:not(:disabled):hover': {
        backgroundColor: addAlpha(theme.colorPalettes[color][1], theme.opacity.opacity2),
      },

      '&:not(:disabled):active': {
        backgroundColor: addAlpha(theme.colorPalettes[color][2], theme.opacity.opacity3),
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
          outline: `1px solid ${theme.colorPalettes[color][6]}`,
        },
      },

      [`&:disabled:not(.${loading})`]: {
        color: addAlpha(theme.colorPalettes[color][2], theme.opacity.opacity3),
        border: `1px solid ${addAlpha(theme.colorPalettes[color][2], theme.opacity.opacity3)}`,
      },
    },
    tertiary: {
      backgroundColor: addAlpha(theme.colorPalettes[color][9], theme.opacity.opacity1),
      color: theme.colorPalettes[color][6],

      '&:not(:disabled):hover': {
        backgroundColor: addAlpha(theme.colorPalettes[color][9], theme.opacity.opacity2),
      },

      '&:not(:disabled):active': {
        backgroundColor: addAlpha(theme.colorPalettes[color][8], theme.opacity.opacity3),
      },

      '&:not(:disabled):focus-visible': {
        outline: `1px solid ${theme.colorPalettes[color][6]}`,

        '&::before': {
          content: '""',
          position: 'absolute',
          top: -2,
          bottom: -2,
          left: -3,
          right: -3,
          borderRadius: 4,
          outline: `1px solid ${theme.colorPalettes[color][6]}`,
        },
      },

      [`&:disabled:not(.${loading})`]: {
        color: addAlpha(theme.colorPalettes[color][8], theme.opacity.opacity3),
      },
    },

    root: {
      ...sizes[size],
      ...getWidthStyles(fullWidth),
      ...getFontStyles(theme)[size],
      fontFamily: theme.fontFamily,
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

    spinner: {
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
