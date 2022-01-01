import React, { forwardRef } from 'react';
import { ClassNames, CoComponentProps, CoSpacing } from '@co-design/styles';
import { View } from '../View';
import useStyles, { EquallyGridBreakpoint } from './EquallyGrid.style';

export type EquallyGridStylesNames = ClassNames<typeof useStyles>;

export interface EquallyGridProps extends CoComponentProps<EquallyGridStylesNames>, React.ComponentPropsWithoutRef<'div'> {
  cols: number;
  spacing?: CoSpacing | number;
  breakpoints?: EquallyGridBreakpoint[];
}

export const EquallyGrid = forwardRef<HTMLDivElement, EquallyGridProps>(
  ({ children, cols, spacing = 'medium', breakpoints = [], className, co, overrideStyles, ...props }: EquallyGridProps, ref) => {
    const { classes, cx } = useStyles({ breakpoints, cols, spacing }, { co, overrideStyles, name: 'EquallyGrid' });

    return (
      <View className={cx(classes.root, className)} ref={ref} {...props}>
        {children}
      </View>
    );
  },
);

EquallyGrid.displayName = '@co-design/core/EquallyGrid';
