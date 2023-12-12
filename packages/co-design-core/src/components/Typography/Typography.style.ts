import { createStyleObject } from '@capsizecss/core';
import { createStyles, CSSObject, defaultFontStyles, CoTypography, CoTypographyValue, getColor, CoColor } from '@co-design/styles';

// @capsizecss/metrics/arial
const fontMetrics = {
  familyName: 'Arial',
  category: 'sans-serif',
  capHeight: 1467,
  ascent: 1854,
  descent: -434,
  lineGap: 67,
  unitsPerEm: 2048,
  xHeight: 1062,
  xWidthAvg: 904,
};

interface TypographyStyles {
  color: CoColor;
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
  const _color = getColor(theme, color);

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
