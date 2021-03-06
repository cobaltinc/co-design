import { createStyles, CoNumberSize, CoPalette, CoColor } from '@co-design/styles';
import { CO_HEIGHTS } from '../../constants';
import { getFieldValue } from '../../utils';

interface BurgerStyles {
  size: CoNumberSize;
  color: CoPalette | CoColor | string;
}

export default createStyles((_, { size, color }: BurgerStyles, getRef) => {
  const sizeValue = getFieldValue(size, CO_HEIGHTS);
  const opened = { ref: getRef('opened') } as const;

  return {
    opened,

    root: {
      WebkitTapHighlightColor: 'transparent',
      width: sizeValue,
      height: sizeValue,
      padding: 0,
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
