import { createStyles, CSSObject, CoColorPalette, CoColor, CoFontSizes } from '@co-design/styles';
import { getFieldValue } from '../../utils';

interface TextStyles {
  color: CoColorPalette | CoColor | string;
  size: CoFontSizes | number;
  lineClamp: number;
  block: boolean;
  inherit: boolean;
}

function getLineClamp(lineClamp: number): CSSObject {
  if (typeof lineClamp === 'number') {
    return {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: lineClamp,
      WebkitBoxOrient: 'vertical',
    };
  }

  return null;
}

export default createStyles((theme, { color, size, lineClamp, block, inherit }: TextStyles) => {
  const _color = color
    ? color in theme.colorPalettes
      ? theme.colorPalettes[color][theme.colorScheme === 'dark' ? 4 : 6]
      : color in theme.colors
      ? theme.colors[color]
      : color
    : theme.colorPalettes.dark[theme.colorScheme === 'dark' ? 0 : 9];

  return {
    root: {
      display: block ? 'block' : 'inline',
      ...getLineClamp(lineClamp),
      color: _color,
      fontFamily: inherit ? 'inherit' : theme.fontFamily,
      fontSize: inherit ? 'inherit' : getFieldValue(size, theme.fontSizes[size]),
      lineHeight: inherit ? 'inherit' : block ? theme.lineHeight : 1,
      WebkitTapHighlightColor: 'transparent',
    },
  };
});
