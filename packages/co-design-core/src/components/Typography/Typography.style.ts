import { createStyleObject } from '@capsizecss/core';
import { createStyles, CSSObject, defaultFontStyles, CoTypography, CoTextSemanticColor, CoPaletteColor, CoTypographyValue } from '@co-design/styles';
import fontMetrics from '@capsizecss/metrics/arial';

interface TypographyStyles {
  color: CoPaletteColor | CoTextSemanticColor | string;
  variant: CoTypography;
  lineClamp: number;
  block: boolean;
  inherit: boolean;
  disableTextboxTrim: boolean;
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

const createFontStyles = (fontSize: number, lineHeight: number) => {
  const capsizeStyles = createStyleObject({
    fontSize,
    leading: lineHeight,
    fontMetrics,
  });

  return {
    fontSize: capsizeStyles.fontSize,
    lineHeight: capsizeStyles.lineHeight,
    '&::before': {
      ...capsizeStyles['::before'],
    },
    '&::after': {
      ...capsizeStyles['::after'],
    },
  };
};

export default createStyles((theme, { color, variant, lineClamp, block, inherit, disableTextboxTrim }: TypographyStyles) => {
  const _color = color
    ? color in theme.foundations.color
      ? theme.foundations.color[color][theme.colorScheme === 'dark' ? 3 : 5]
      : color in theme.foundations.tokens.color.text
      ? theme.foundations.tokens.color.text[color]
      : color
    : theme.foundations
    ? theme.colorScheme === 'dark'
      ? theme.foundations.tokens.color.text.text_light
      : theme.foundations.tokens.color.text.text_default
    : theme.colorScheme === 'dark'
    ? theme.colors.white
    : theme.colors.black;

  const { fontSize, fontWeight, lineHeight }: CoTypographyValue =
    variant in theme.foundations.typography.heading ? theme.foundations.typography.heading[variant] : theme.foundations.typography.body[variant];

  return {
    root: {
      display: block ? 'block' : 'inline',
      ...getLineClamp(lineClamp),
      color: _color,
      ...defaultFontStyles(theme),
      WebkitTapHighlightColor: 'transparent',
      ...(inherit
        ? {}
        : {
            fontFamily: theme.fontFamily,
            fontWeight,
            ...(disableTextboxTrim ? { fontSize, lineHeight: lineHeight + 'px' } : { ...createFontStyles(fontSize, lineHeight) }),
          }),
    },
  };
});
