import React, { forwardRef } from 'react';
import { CoBreakpoints, CoSpacing, CoComponentProps, ClassNames } from '@co-design/styles';
import useStyles from './Container.style';
import { View } from '../View';

export type ContainerStylesNames = ClassNames<typeof useStyles>;

export interface ContainerProps extends CoComponentProps<ContainerStylesNames>, React.ComponentPropsWithoutRef<'div'> {
  size?: CoBreakpoints | number;
  padding?: CoSpacing | number;
  fluid?: boolean;
  break?: boolean;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = 'large', padding, fluid, break: _break, className, co, overrideStyles, ...props }, ref) => {
    const { classes, cx } = useStyles({ padding, fluid, size, break: _break }, { co, overrideStyles, name: 'Container' });

    return <View component="div" ref={ref} className={cx(classes.root, className)} {...props} />;
  },
);

Container.displayName = '@co-design/core/Container';
