import { CoBreakpoints, CoColor, CoColorPalette, CoSize, CoSpacing, createStyles } from '@co/styles';
import { CO_HEIGHTS } from '../../constants';

interface SpinnerStyles {
  size: CoSize | number;
  color?: CoColorPalette | CoColor | string;
}

export default createStyles((theme, { size, color }: SpinnerStyles) => {
  const svgColor =
    color === undefined
      ? theme.colorScheme === 'light'
        ? theme.colorPalettes.dark[9]
        : theme.colorPalettes.dark[0]
      : color in theme.colorPalettes
      ? theme.colorScheme === 'light'
        ? theme.colorPalettes[color][6]
        : theme.colorPalettes[color][4]
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
