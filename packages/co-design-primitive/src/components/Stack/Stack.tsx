import React, { Children, forwardRef } from 'react';
import { ClassNames, CoComponentProps, CoSpacing } from '@co-design/styles';
import { View } from '../View';
import useStyles from './Stack.style';

export type StackStylesNames = ClassNames<typeof useStyles>;

export interface StackProps extends CoComponentProps<StackStylesNames>, React.ComponentPropsWithoutRef<'div'> {
  /** Stack 컴포넌트 내 요소들의 세로 위치를 정합니다. */
  justify?: React.CSSProperties['justifyContent'];

  /** Stack 컴포넌트 내 요소들의 가로 정렬을 정합니다. */
  align?: React.CSSProperties['alignItems'];

  /** Stack 컴포넌트 내 요소들의 간격을 정합니다. */
  spacing?: CoSpacing | number;
}

export const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ children, justify, align, spacing = 'medium', className, co, overrideStyles, ...props }: StackProps, ref) => {
    const { classes, cx } = useStyles({ justify, align, spacing }, { overrideStyles, name: 'Stack' });

    const items = (Children.toArray(children) as React.ReactElement[]).map((child) =>
      React.cloneElement(child, {
        className: cx(classes.child, child.props.className),
      }),
    );

    return (
      <View ref={ref} className={cx(classes.root, className)} co={co} {...props}>
        {items}
      </View>
    );
  },
);

Stack.displayName = '@co-design/primitive/Stack';
