import React, { forwardRef } from 'react';
import { ClassNames, CoComponentProps, CoSpacing } from '@co-design/styles';
import useStyles from './Divider.style';
import { View } from '../View';
import { Text } from '../Text';

export type DividerStylesNames = ClassNames<typeof useStyles>;

export interface DividerProps extends CoComponentProps<DividerStylesNames>, React.ComponentPropsWithoutRef<'div'> {
  /** Divider 컴포넌트의 방향을 정합니다. */
  orientation?: 'horizontal' | 'vertical';

  /** Divider 컴포넌트의 모양을 정합니다. */
  variant?: 'solid' | 'dashed' | 'dotted';

  /** Divider 컴포넌트의 margin을 정합니다. */
  margin?: CoSpacing | number;

  /** orientation 속성이 horizontal일 경우 Divider 컴포넌트에 label을 추가합니다. */
  label?: React.ReactNode;

  /** label 위치를 정합니다. */
  labelPosition?: 'left' | 'center' | 'right';
}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    {
      variant = 'solid',
      orientation = 'horizontal',
      margin = 'medium',
      label,
      labelPosition = 'center',
      className,
      co,
      overrideStyles,
      ...props
    }: DividerProps,
    ref,
  ) => {
    const { theme, classes, cx } = useStyles({ margin, variant }, { overrideStyles, name: 'Divider' });

    const vertical = orientation === 'vertical';
    const horizontal = !vertical;
    const withLabel = !!label && horizontal;

    return (
      <View
        ref={ref}
        className={cx(
          {
            [classes.vertical]: vertical,
            [classes.horizontal]: horizontal,
            [classes.withLabel]: withLabel,
          },
          className,
        )}
        co={co}
        {...props}
      >
        {!!label && horizontal && (
          <Text size="xsmall" co={{ marginTop: 2 }} className={cx(classes.label, classes[labelPosition])}>
            {label}
          </Text>
        )}
      </View>
    );
  },
);

Divider.displayName = '@co-design/primitive/Divider';
