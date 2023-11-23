import React, { forwardRef } from 'react';
import { CoComponentProps, ClassNames, CoSize, CoPalette, CoRadius } from '@co-design/styles';
import { View } from '../View';
import useStyles from './Progress2.style';
import { Text } from '../Text';
import { Group } from '../Group';
import { Stack } from '../Stack';

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

  /** Bar에 label을 추가합니다. */
  label?: string;

  /** Label 이 표시될 위치를 지정합니다. */
  labelPosition?: 'top' | 'side';

  /** true일 경우 %가 표시됩니다. */
  showPercent?: boolean;
}

export const Progress2 = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      value,
      color,
      size = 'medium',
      radius = 'round',
      label = '',
      labelPosition = 'top',
      showPercent = true,
      className,
      overrideStyles,
      ...props
    }: ProgressProps,
    ref,
  ) => {
    const { classes, cx, theme } = useStyles({ color, size, radius, labelPosition }, { overrideStyles, name: 'Progress' });

    const spaces = {
      small: theme.foundations.tokens.size['size-04'],
      medium: theme.foundations.tokens.size['size-04'],
      large: theme.foundations.tokens.size['size-06'],
      xlarge: theme.foundations.tokens.size['size-06'],
    };

    return labelPosition === 'top' ? (
      <Stack spacing={theme.fn.size({ size, sizes: spaces })}>
        <Group position={label ? 'apart' : 'right'}>
          {label ? <Text className={classes.label}>{label}</Text> : null}
          {showPercent ? <Text className={classes.percent}>{`${value}%`}</Text> : null}
        </Group>
        <View className={cx(classes.root, className)} ref={ref} {...props}>
          <div role="progressbar" className={classes.bar} style={{ width: `${value}%` }} />
        </View>
      </Stack>
    ) : (
      <Group spacing={theme.fn.size({ size, sizes: spaces })}>
        {label ? <Text className={classes.label}>{label}</Text> : null}
        <View className={cx(classes.root, className)} ref={ref} {...props}>
          <div role="progressbar" className={classes.bar} style={{ width: `${value}%` }} />
        </View>
        {showPercent ? <Text className={classes.percent}>{`${value}%`}</Text> : null}
      </Group>
    );
  },
);

Progress2.displayName = '@co-design/core/Progress2';
