import { createStyles, CoNumberSize, CoColorPalette, CoColor } from '@co/styles';
import { CO_HEIGHTS } from '../../constants';

interface BurgerStyles {
  size: CoNumberSize;
  color: CoColorPalette | CoColor | string;
}

export const sizes = {
  xs: 12,
  sm: 18,
  md: 24,
  lg: 34,
  xl: 42,
};

export default createStyles((theme, { size, color }: BurgerStyles, getRef) => {
  const sizeValue = size in CO_HEIGHTS ? CO_HEIGHTS[size] : size;
  const opened = { ref: getRef('opened') } as const;

  return {
    opened,

    root: {
      WebkitTapHighlightColor: 'transparent',
      width: sizeValue,
      height: sizeValue,
      padding: 0,
      // padding: theme.spacing.spacing1,
      backgroundColor: 'transparent',
      border: 0,
      cursor: 'pointer',
    },

    burger: {
      position: 'relative',
      userSelect: 'none',
      boxSizing: 'border-box',

      '&, &:before, &:after': {
        display: 'block',
        width: sizeValue,
        height: Math.ceil(sizeValue / 12),
        backgroundColor: color,
        outline: '1px solid transparent',
        transitionProperty: 'background-color, transform',
        transitionDuration: '300ms',
        '@media (prefers-reduced-motion)': {
          transitionDuration: '0ms',
        },
      },

      '&:before, &:after': {
        position: 'absolute',
        content: '""',
        left: 0,
      },

      '&:before': {
        top: (sizeValue / 3) * -1,
      },

      '&:after': {
        top: sizeValue / 3,
      },

      [`&.${opened.ref}`]: {
        backgroundColor: 'transparent',

        '&:before': {
          transform: `translateY(${sizeValue / 3}px) rotate(45deg)`,
        },

        '&:after': {
          transform: `translateY(-${sizeValue / 3}px) rotate(-45deg)`,
        },
      },
    },
  };
});
