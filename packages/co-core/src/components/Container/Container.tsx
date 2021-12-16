import React, { forwardRef } from 'react';
import { CoBreakpoints, CoSpacing, DefaultProps } from '@co/styles';
import useStyles from './Container.style';
import { View } from '../View';

export interface ContainerProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  size?: CoBreakpoints | number;
  padding?: CoSpacing | number;
  fluid?: boolean;
  break?: boolean;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = 'medium', padding, fluid, break: _break, className, co, ...props }, ref) => {
    const { classes, cx } = useStyles({ padding, fluid, size, break: _break }, { co, name: 'Container' });

    return <View component="div" ref={ref} className={cx(classes.root, className)} {...props} />;
  },
);

Container.displayName = '@co/core/Container';
