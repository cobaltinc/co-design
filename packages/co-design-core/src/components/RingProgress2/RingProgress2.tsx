import React, { forwardRef } from 'react';
import { CoComponentProps, ClassNames, CoPalette, CoSize } from '@co-design/styles';
import { View } from '../View';
import { Curve } from './Curve';
import { getCurves } from './get-curves';
import useStyles from './RingProgress2.style';
import { Stack } from '../Stack';
import { Group } from '../Group';
import { Text } from '../Text';

export type RingProgressStylesNames = ClassNames<typeof useStyles>;

export interface RingProgressProps extends CoComponentProps<RingProgressStylesNames>, React.ComponentPropsWithoutRef<'div'> {
  /** Curve가 채워지는 %를 정합니다. (0 ~ 100) */
  value: number;

  /** RingProgress 컴포넌트의 기본 색상을 정합니다. */
  color: CoPalette;

  /** Ring의 두께를 정합니다. */
  thickness?: number;

  /** RingProgress 컴포넌트의 너비와 높이를 정합니다. */
  size?: CoSize | number;

  /** true일 경우 Curve 끝 부분의 radius가 둥글어집니다. */
  roundCaps?: boolean;

  /**
   * RingProgress 컴포넌트에 각각 Curve 영역을 추가합니다.
   * value의 합이 100을 넘으면 안됩니다.
   */
  sections?: { value: number; color: CoPalette }[];

  label?: string;

  labelPosition?: 'bottom' | 'side';
}

export const RingProgress2 = forwardRef<HTMLDivElement, RingProgressProps>(
  (
    {
      value,
      color,
      sections,
      size: _size = 'medium',
      thickness,
      roundCaps,
      label = '',
      labelPosition = 'bottom',
      className,
      style,
      overrideStyles,
      ...props
    }: RingProgressProps,
    ref,
  ) => {
    const { classes, cx, theme } = useStyles({ size: _size }, { overrideStyles, name: 'RingProgress' });

    const thicknesses = {
      xsmall: 2,
      small: 3,
      medium: 4,
      large: 5,
      xlarge: 6,
    };

    const spaces = {
      xsmall: theme.foundations.tokens.size['size-04'],
      small: theme.foundations.tokens.size['size-04'],
      medium: theme.foundations.tokens.size['size-06'],
      large: theme.foundations.tokens.size['size-07'],
      xlarge: theme.foundations.tokens.size['size-07'],
    };

    const sizes = {
      xsmall: theme.foundations.tokens.size['size-07'],
      small: theme.foundations.tokens.size['size-09'],
      medium: theme.foundations.tokens.size['size-11'],
      large: theme.foundations.tokens.size['size-14'],
      xlarge: theme.foundations.tokens.size['size-15'],
    };

    const size = theme.fn.size({ size: _size, sizes });

    const curves = getCurves({
      size,
      thickness: thickness || theme.fn.size({ size: _size, sizes: thicknesses }),
      sections: Array.isArray(sections) ? sections : [{ value, color: color || theme.foundations.tokens.color.bg['bg-primary'] }],
      renderRoundedLineCaps: roundCaps,
    }).map((curve, index) => (
      <Curve
        key={index}
        value={curve.data?.value}
        size={size}
        thickness={thickness || theme.fn.size({ size: _size, sizes: thicknesses })}
        sum={curve.sum}
        offset={curve.offset}
        color={curve.data?.color}
        root={curve.root}
        lineRoundCaps={curve.lineRoundCaps}
      />
    ));

    return labelPosition == 'bottom' ? (
      <Stack align="center" spacing={theme.fn.size({ size: _size, sizes: spaces })}>
        <View style={{ width: size, height: size, ...style }} className={cx(classes.root, className)} ref={ref} {...props}>
          <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
            {curves}
          </svg>
        </View>
        {label ? <Text className={classes.label}>{label}</Text> : null}
      </Stack>
    ) : (
      <Group align="center" spacing={theme.fn.size({ size: _size, sizes: spaces })}>
        <View style={{ width: size, height: size, ...style }} className={cx(classes.root, className)} ref={ref} {...props}>
          <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
            {curves}
          </svg>
        </View>
        {label ? <Text className={classes.label}>{label}</Text> : null}
      </Group>
    );
  },
);

RingProgress2.displayName = '@co-design/core/RingProgress2';
