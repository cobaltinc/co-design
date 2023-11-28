import { createStyles, CSSObject, CoPalette, CoColor, CoFontSizes, defaultFontStyles } from '@co-design/styles';
import { getFieldValue } from '../../utils';

interface TextStyles {
  color: CoPalette | CoColor | string;
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
    ? color in theme.palettes
      ? theme.palettes[color][theme.colorScheme === 'dark' ? 3 : 5]
      : color in theme.colors
      ? theme.colors[color]
      : color
    : theme.colorScheme === 'dark'
    ? theme.colors.white
    : theme.foundations.tokens.color.text.text_default;

  return {
    root: {
      display: block ? 'block' : 'inline',
      ...getLineClamp(lineClamp),
      color: _color,
      ...defaultFontStyles(theme),
      fontFamily: inherit ? 'inherit' : theme.fontFamily,
      fontSize: inherit ? 'inherit' : getFieldValue(size, theme.fontSizes),
      lineHeight: inherit ? 'inherit' : block ? theme.lineHeight : 1,
      WebkitTapHighlightColor: 'transparent',
    },
  };
});
