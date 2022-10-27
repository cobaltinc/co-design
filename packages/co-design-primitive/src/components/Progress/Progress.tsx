import React, { forwardRef } from 'react';
import { CoComponentProps, ClassNames, CoSize, CoPalette, CoRadius } from '@co-design/styles';
import { View } from '../View';
import useStyles from './Progress.style';
import { Text } from '../Text';

export type ProgressStylesNames = ClassNames<typeof useStyles>;

export interface ProgressProps extends CoComponentProps<ProgressStylesNames>, React.ComponentPropsWithoutRef<'div'> {
  /** ProgressBar가 채워지는 %를 정합니다. (0 ~ 100) */
  value?: number;

  /** Progress 컴포넌트의 기본 색상을 정합니다. */
  color?: CoPalette;

  /** Progress 컴포넌트의 높이를 정합니다. */
  size?: CoSize | number;

  /** Progress 컴포넌트의 border-radius를 정합니다. */
  radius?: CoRadius | number;

  /** true일 경우 줄무늬가 생깁니다. */
  striped?: boolean;

  /** true일 경우 줄무늬가 움직이는 애니메이션이 실행됩니다. */
  animate?: boolean;

  /** Bar에 label을 추가합니다. */
  label?: string;

  /**
   * Progress 컴포넌트에 각각 Bar 영역을 추가합니다.
   * value의 합이 100을 넘으면 안됩니다.
   */
  sections?: { value: number; color: CoPalette; label?: string }[];
}

const getCumulativeSections = (
  sections: { value: number; color: CoPalette; label?: string }[],
): { value: number; color: CoPalette; accumulated: number; label?: string }[] => {
  return sections.reduce(
    (acc, section) => {
      acc.sections.push({ ...section, accumulated: acc.accumulated });
      acc.accumulated += section.value;
      return acc;
    },
    { accumulated: 0, sections: [] },
  ).sections;
};

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      value,
      color,
      size = 'medium',
      radius = 'round',
      striped = false,
      animate = false,
      label = '',
      sections,
      className,
      overrideStyles,
      ...props
    }: ProgressProps,
    ref,
  ) => {
    const { classes, cx, theme } = useStyles({ color, size, radius, striped: striped || animate, animate }, { overrideStyles, name: 'Progress' });

    const segments = Array.isArray(sections)
      ? getCumulativeSections(sections).map((section, index) => (
          <View
            key={index}
            className={classes.bar}
            co={{
              width: `${section.value}%`,
              left: `${section.accumulated}%`,
              backgroundColor: theme.palettes[section.color][5],
            }}
          >
            {section.label && <Text className={classes.label}>{section.label}</Text>}
          </View>
        ))
      : null;

    return (
      <View className={cx(classes.root, className)} ref={ref} {...props}>
        {segments || (
          <div role="progressbar" className={classes.bar} style={{ width: `${value}%` }}>
            {label ? <Text className={classes.label}>{label}</Text> : ''}
          </div>
        )}
      </View>
    );
  },
);

Progress.displayName = '@co-design/primitive/Progress';
