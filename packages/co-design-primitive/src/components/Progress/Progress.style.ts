import { createStyles, CoPalette, keyframes, CoRadius, CoSize } from '@co-design/styles';

export const sizes = {
  xsmall: 6,
  small: 8,
  medium: 12,
  large: 16,
  xlarge: 24,
};

export interface ProgressStylesParams {
  color: CoPalette;
  radius: CoRadius | number;
  size: CoSize | number;
  striped: boolean;
  animate: boolean;
}

const stripesAnimation = keyframes({
  from: { backgroundPosition: '0 0' },
  to: { backgroundPosition: '40px 0' },
});

export default createStyles((theme, { color, radius, size, striped, animate }: ProgressStylesParams) => ({
  root: {
    position: 'relative',
    height: theme.fn.size({ size, sizes }),
    backgroundColor: theme.colorScheme === 'dark' ? theme.palettes.gray[4] : theme.palettes.gray[2],
    borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
    overflow: 'hidden',
  },

  bar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palettes[color || theme.primaryColor][5],
    transition: 'width 100ms linear',
    animation: animate ? `${stripesAnimation} 1000ms linear infinite` : 'none',
    backgroundSize: '20px 20px',
    backgroundImage: striped
      ? 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)'
      : 'none',

    '&:last-of-type': {
      borderTopRightRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
      borderBottomRightRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
    },

    '&:first-of-type': {
      borderTopLeftRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
      borderBottomLeftRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
    },

    '@media (prefers-reduced-motion)': {
      transitionDuration: '0ms',
    },
  },

  label: {
    color: theme.colors.white,
    fontSize: theme.fn.size({ size, sizes }) * 0.65,
    fontWeight: 700,
    userSelect: 'none',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
}));
