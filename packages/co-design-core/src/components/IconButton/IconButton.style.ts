import { createStyles, CoSize, CoPalette, defaultFontStyles } from '@co-design/styles';
import { addAlpha } from '../../utils';
import { CO_HEIGHTS } from '../../constants';

interface IconButtonStylesProps {
  color?: CoPalette;
  size: CoSize;
}

const sizes = {
  xsmall: {
    width: CO_HEIGHTS.xsmall,
    height: CO_HEIGHTS.xsmall,
  },

  small: {
    width: CO_HEIGHTS.small,
    height: CO_HEIGHTS.small,
  },

  medium: {
    width: CO_HEIGHTS.medium,
    height: CO_HEIGHTS.medium,
  },

  large: {
    width: CO_HEIGHTS.large,
    height: CO_HEIGHTS.large,
  },

  xlarge: {
    width: CO_HEIGHTS.xlarge,
    height: CO_HEIGHTS.xlarge,
  },
};

const paddings = {
  xsmall: 8,
  small: 8,
  medium: 16,
  large: 16,
  xlarge: 24,
};

export default createStyles((theme, { color: _color, size }: IconButtonStylesProps, getRef) => {
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
      ...defaultFontStyles(theme),
      borderRadius: theme.radius.medium,
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
