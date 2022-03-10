import { CoColor, CoPalette, CoSize, createStyles } from '@co-design/styles';
import { CO_HEIGHTS } from '../../constants';

interface SpinnerStyles {
  size: CoSize | number;
  color?: CoPalette | CoColor | string;
}

export default createStyles((theme, { size, color }: SpinnerStyles) => {
  const svgColor =
    color === undefined
      ? theme.colorScheme === 'light'
        ? theme.palettes.gray[9]
        : theme.palettes.gray[0]
      : color in theme.palettes
      ? theme.colorScheme === 'light'
        ? theme.palettes[color][6]
        : theme.palettes[color][4]
      : color in theme.colors
      ? theme.colors[color]
      : color;

  return {
    root: {
      position: 'relative',
      display: 'inline-block',
      width: size in CO_HEIGHTS ? CO_HEIGHTS[size] : size,
      height: size in CO_HEIGHTS ? CO_HEIGHTS[size] : size,
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
    },
  };
});
