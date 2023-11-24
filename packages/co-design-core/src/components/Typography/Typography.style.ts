import { createStyles, CSSObject, defaultFontStyles, CoTypography, CoTextSemanticColor, CoPaletteColor, CoTypographyValue } from '@co-design/styles';

interface TypographyStyles {
  color: CoPaletteColor | CoTextSemanticColor | string;
  variant: CoTypography;
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

export default createStyles((theme, { color, variant, lineClamp, block, inherit }: TypographyStyles) => {
  const _color = color
    ? color in theme.foundations.color
      ? theme.foundations.color[color][theme.colorScheme === 'dark' ? 3 : 5]
      : color in theme.foundations.tokens.color.text
      ? theme.foundations.tokens.color.text[color]
      : color
    : theme.colorScheme === 'dark'
    ? theme.foundations.tokens.color.text['text-light']
    : theme.foundations.tokens.color.text['text-default'];

  const { fontSize, fontWeight, lineHeight }: CoTypographyValue =
    variant in theme.foundations.typography.heading ? theme.foundations.typography.heading[variant] : theme.foundations.typography.body[variant];

  return {
    root: {
      display: block ? 'block' : 'inline',
      ...getLineClamp(lineClamp),
      color: _color,
      ...defaultFontStyles(theme),
      fontFamily: inherit ? 'inherit' : theme.fontFamily,
      WebkitTapHighlightColor: 'transparent',
      fontSize: inherit ? 'inherit' : fontSize,
      fontWeight: inherit ? 'inherit' : fontWeight,
      lineHeight: inherit ? 'inherit' : lineHeight + 'px',
    },
  };
});
