import React from 'react';
import { useCoTheme, CoPalette } from '@co-design/styles';

interface GetCurveProps {
  size: number;
  thickness: number;
  sum: number;
  value: number;
  root: boolean;
  offset: number;
}

const getCurveProps = ({ size, thickness, sum, value, root, offset }: GetCurveProps) => {
  const radius = (size * 0.9 - thickness * 2) / 2;
  const deg = (Math.PI * radius * 2) / 100;

  const strokeDasharray = root ? `${(100 - sum) * deg}, ${sum * deg}` : `${value * deg}, ${(100 - value) * deg}`;

  return {
    strokeWidth: thickness,
    cx: size / 2,
    cy: size / 2,
    r: radius,
    transform: root ? `scale(1, -1) translate(0, -${size})` : null,
    strokeDasharray,
    strokeDashoffset: root ? 0 : offset,
  };
};

interface CurveProps {
  value?: number;
  size: number;
  offset: number;
  sum: number;
  thickness: number;
  lineRoundCaps: boolean;
  root?: boolean;
  color?: CoPalette;
}

export const Curve = ({ size, value, offset, sum, thickness, root, color, lineRoundCaps }: CurveProps) => {
  const theme = useCoTheme();
  const stroke = color || theme.foundations.tokens.color.bg.bg_base_light;

  return (
    <circle
      fill="none"
      strokeLinecap={lineRoundCaps ? 'round' : 'butt'}
      stroke={stroke}
      {...getCurveProps({ sum, size, thickness, value, offset, root })}
    />
  );
};

Curve.displayName = '@co-design/core/Curve';
