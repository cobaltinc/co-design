import React, { forwardRef } from 'react';
import { ClassNames, CoComponentProps, CoSpacing } from '@co-design/styles';
import { View } from '../View';
import useStyles, { EquallyGridBreakpoint } from './EquallyGrid.style';

export type EquallyGridStylesNames = ClassNames<typeof useStyles>;

export interface EquallyGridProps extends CoComponentProps<EquallyGridStylesNames>, React.ComponentPropsWithoutRef<'div'> {
  /** EquallyGrid 컴포넌트에서 관리할 컬럼 수를 정합니다 */
  cols: number;

  /** 컬럼 사이 간격을 정합니다. */
  spacing?: CoSpacing | number;

  /** breakpoint에 따라 컬럼 수를 바꿀 수 있습니다. */
  breakpoints?: EquallyGridBreakpoint[];
}

export const EquallyGrid = forwardRef<HTMLDivElement, EquallyGridProps>(
  ({ children, cols, spacing = 'medium', breakpoints = [], className, co, overrideStyles, ...props }: EquallyGridProps, ref) => {
    const { classes, cx } = useStyles({ breakpoints, cols, spacing }, { overrideStyles, name: 'EquallyGrid' });

    return (
      <View ref={ref} className={cx(classes.root, className)} co={co} {...props}>
        {children}
      </View>
    );
  },
);

EquallyGrid.displayName = '@co-design/core/EquallyGrid';
