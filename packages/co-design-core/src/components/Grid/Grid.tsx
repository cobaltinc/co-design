import React, { Children, forwardRef } from 'react';
import { ClassNames, CoComponentProps, CoSpacing } from '@co-design/styles';
import { View } from '../View';
import useStyles from './Grid.style';

export type GridStylesNames = ClassNames<typeof useStyles>;

export interface GridProps extends CoComponentProps<GridStylesNames>, React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
  spacing?: CoSpacing;
  grow?: boolean;
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignContent'];
  columns?: number;
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      children,
      spacing = 'spacing2',
      grow = false,
      justify = 'flex-start',
      align = 'stretch',
      columns = 12,
      className,
      co,
      overrideStyles,
      ...props
    }: GridProps,
    ref,
  ) => {
    const { classes, cx } = useStyles({ spacing, justify, align }, { co, overrideStyles, name: 'Grid' });

    const cols = (Children.toArray(children) as React.ReactElement[]).map((col, index) =>
      React.cloneElement(col, { spacing, grow, columns, key: index }),
    );

    return (
      <View className={cx(classes.root, className)} ref={ref} {...props}>
        {cols}
      </View>
    );
  },
);

Grid.displayName = '@co-design/core/Grid';
