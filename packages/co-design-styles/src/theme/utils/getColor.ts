import { CoColor, CoTheme } from '../types';

export const getColor = (theme: CoTheme, color: CoColor, colorScale?: number): string => {
  if (!color) {
    return;
  }

  if (theme.foundations) {
    if (color in theme.foundations.color) {
      return theme.foundations.color[color][colorScale ? colorScale : 7];
    }

    const token = color.split('_')[0];

    if (token in theme.foundations.tokens.color && color in theme.foundations.tokens.color[token]) {
      return theme.foundations.tokens.color[token][color];
    }
  } else {
    if (color in theme.colors) {
      return theme.colors[color];
    }
    if (color in theme.palettes) {
      return theme.palettes[color][colorScale ? colorScale : 5];
    }
  }
  if (window !== undefined && !CSS.supports('color', color)) {
    console.warn(`[@co-design/styles] Color ${color} is not supported by the browser. Please use a valid CSS color. [${color}]`);
    return 'inherit';
  }

  return color;
};
