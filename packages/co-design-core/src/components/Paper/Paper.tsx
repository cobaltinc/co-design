import React, { forwardRef } from 'react';
import { DefaultProps, CoShadows, PolymorphicComponentProps, PolymorphicRef, CoSpacing, CoRadius } from '@co-design/styles';
import { View } from '../View';
import useStyles from './Paper.style';

export interface SharedPaperProps extends DefaultProps {
  padding?: CoSpacing | number;
  shadow?: CoShadows;
  radius?: CoRadius | number;
  withBorder?: boolean;
}

export type PaperProps<C extends React.ElementType> = PolymorphicComponentProps<C, SharedPaperProps>;

type PaperComponent = <C extends React.ElementType = 'div'>(props: PaperProps<C>) => React.ReactElement;

export const Paper: PaperComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'div'>(
    { component, className, children, padding = 'spacing3', radius = 'medium', withBorder = false, shadow = 'medium', ...others }: PaperProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const { classes, cx } = useStyles({ radius, shadow, padding, withBorder }, { name: 'Paper' });

    return (
      <View<any> component={component || 'div'} className={cx(classes.root, className)} ref={ref} {...others}>
        {children}
      </View>
    );
  },
);

Paper.displayName = '@co-design/core/Paper';
