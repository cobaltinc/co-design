import React, { forwardRef } from 'react';
import { DefaultProps, CoSpacing } from '@co-design/styles';
import { View } from '../View';
import useStyles, { SimpleGridBreakpoint } from './SimpleGrid.style';

export interface SimpleGridProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  cols: number;
  spacing?: CoSpacing;
  breakpoints?: SimpleGridBreakpoint[];
}

export const SimpleGrid = forwardRef<HTMLDivElement, SimpleGridProps>(
  ({ children, cols, spacing = 'spacing2', breakpoints = [], className, co, ...props }: SimpleGridProps, ref) => {
    const { classes, cx } = useStyles({ breakpoints, cols, spacing }, { co, name: 'SimpleGrid' });

    return (
      <View className={cx(classes.root, className)} ref={ref} {...props}>
        {children}
      </View>
    );
  },
);

SimpleGrid.displayName = '@co-design/core/SimpleGrid';
