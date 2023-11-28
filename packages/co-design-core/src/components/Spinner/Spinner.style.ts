import { CoColor, CoPalette, CoSize, createStyles } from '@co-design/styles';
import { CO_HEIGHTS } from '../../constants';

interface SpinnerStyles {
  size: CoSize | number;
  color?: CoPalette | CoColor | string;
}

export default createStyles((theme, { size, color }: SpinnerStyles) => {
  const svgColor =
    color === undefined
      ? theme.foundations.tokens.color.bg.bg_primary
      : color in theme.palettes
      ? theme.colorScheme === 'light'
        ? theme.palettes[color][5]
        : theme.palettes[color][3]
      : color;

  const sizes = {
    xsmall: theme.foundations.tokens.size.size_07,
    small: theme.foundations.tokens.size.size_09,
    medium: theme.foundations.tokens.size.size_11,
    large: theme.foundations.tokens.size.size_14,
    xlarge: theme.foundations.tokens.size.size_15,
  };

  return {
    root: {
      position: 'relative',
      width: theme.fn.size({ size, sizes }),
      height: theme.fn.size({ size, sizes }),
      verticalAlign: 'middle',
    },

    inner: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',

      path: {
        stroke: svgColor,
      },
      circle: {
        fill: svgColor,
      },

      svg: {
        position: 'absolute',
        top: 0,
        left: 0,
      },
    },
  };
});
