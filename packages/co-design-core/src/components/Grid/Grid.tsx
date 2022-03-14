import React, { Children, forwardRef } from 'react';
import { ClassNames, CoComponentProps, CoSpacing } from '@co-design/styles';
import { View } from '../View';
import useStyles from './Grid.style';

export type GridStylesNames = ClassNames<typeof useStyles>;

export interface GridProps extends CoComponentProps<GridStylesNames>, React.ComponentPropsWithoutRef<'div'> {
  /** Col 컴포넌트를 추가합니다. */
  children: React.ReactNode;

  /** Grid 컴포넌트에 포함된 Col 컴포넌트 간격을 정합니다. */
  spacing?: CoSpacing | number;

  /** Grid 컴포넌트에 포함된 Col 컴포넌트가 상위 요소 너비에 맞춰 늘어납니다. */
  grow?: boolean;

  /** Grid 컴포넌트에 포함된 Col 컴포넌트의 가로 정렬을 정합니다. */
  justify?: React.CSSProperties['justifyContent'];

  /** Grid 컴포넌트에 포함된 Col 컴포넌트의 세로 정렬을 정합니다. */
  align?: React.CSSProperties['alignContent'];

  /** Grid 컴포넌트의 총 컬럼 수를 정합니다. */
  columns?: number;
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      children,
      spacing = 'medium',
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
    const { classes, cx } = useStyles({ spacing, justify, align }, { overrideStyles, name: 'Grid' });

    const cols = (Children.toArray(children) as React.ReactElement[]).map((col, index) =>
      React.cloneElement(col, { spacing, grow, columns, key: index }),
    );

    return (
      <View ref={ref} className={cx(classes.root, className)} co={co} {...props}>
        {cols}
      </View>
    );
  },
);

Grid.displayName = '@co-design/core/Grid';
