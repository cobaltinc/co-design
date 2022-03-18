import React, { forwardRef } from 'react';
import { CoComponentProps, ClassNames, CoPalette } from '@co-design/styles';
import { View } from '../View';
import { Curve } from './Curve';
import { getCurves } from './get-curves';
import useStyles from './RingProgress.style';

export type RingProgressStylesNames = ClassNames<typeof useStyles>;

export interface RingProgressProps extends CoComponentProps<RingProgressStylesNames>, React.ComponentPropsWithoutRef<'div'> {
  /** Curve가 채워지는 %를 정합니다. (0 ~ 100) */
  value: number;

  /** RingProgress 컴포넌트의 기본 색상을 정합니다. */
  color: CoPalette;

  /** Ring의 두께를 정합니다. */
  thickness?: number;

  /** RingProgress 컴포넌트의 너비와 높이를 정합니다. */
  size?: number;

  /** true일 경우 Curve 끝 부분의 radius가 둥글어집니다. */
  roundCaps?: boolean;

  /**
   * RingProgress 컴포넌트에 각각 Curve 영역을 추가합니다.
   * value의 합이 100을 넘으면 안됩니다.
   */
  sections?: { value: number; color: CoPalette }[];
}

export const RingProgress = forwardRef<HTMLDivElement, RingProgressProps>(
  ({ value, color, sections, size = 120, thickness = 12, roundCaps, className, style, overrideStyles, ...props }: RingProgressProps, ref) => {
    const { classes, cx } = useStyles(null, { overrideStyles, name: 'RingProgress' });

    const curves = getCurves({
      size,
      thickness,
      sections: Array.isArray(sections) ? sections : [{ value, color }],
      renderRoundedLineCaps: roundCaps,
    }).map((curve, index) => (
      <Curve
        key={index}
        value={curve.data?.value}
        size={size}
        thickness={thickness}
        sum={curve.sum}
        offset={curve.offset}
        color={curve.data?.color}
        root={curve.root}
        lineRoundCaps={curve.lineRoundCaps}
      />
    ));

    return (
      <View style={{ width: size, height: size, ...style }} className={cx(classes.root, className)} ref={ref} {...props}>
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          {curves}
        </svg>
      </View>
    );
  },
);

RingProgress.displayName = '@co-design/core/RingProgress';
