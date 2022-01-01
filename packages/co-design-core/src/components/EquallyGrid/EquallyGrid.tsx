import React, { forwardRef } from 'react';
import { CoComponentProps, CoSpacing } from '@co-design/styles';
import { View } from '../View';
import useStyles, { EquallyGridBreakpoint } from './EquallyGrid.style';

export interface EquallyGridProps extends CoComponentProps, React.ComponentPropsWithoutRef<'div'> {
  cols: number;
  spacing?: CoSpacing | number;
  breakpoints?: EquallyGridBreakpoint[];
}

export const EquallyGrid = forwardRef<HTMLDivElement, EquallyGridProps>(
  ({ children, cols, spacing = 'spacing2', breakpoints = [], className, co, ...props }: EquallyGridProps, ref) => {
    const { classes, cx } = useStyles({ breakpoints, cols, spacing }, { co, name: 'EquallyGrid' });

    return (
      <View className={cx(classes.root, className)} ref={ref} {...props}>
        {children}
      </View>
    );
  },
);

EquallyGrid.displayName = '@co-design/core/EquallyGrid';
