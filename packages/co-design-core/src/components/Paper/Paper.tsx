import React, { forwardRef } from 'react';
import { CoComponentProps, CoShadows, PolymorphicComponentProps, PolymorphicRef, CoSpacing, CoRadius, ClassNames } from '@co-design/styles';
import { View } from '../View';
import useStyles from './Paper.style';

export type PaperStylesNames = ClassNames<typeof useStyles>;

export interface SharedPaperProps extends CoComponentProps<PaperStylesNames> {
  padding?: CoSpacing | number;
  shadow?: CoShadows;
  radius?: CoRadius | number;
  withBorder?: boolean;
}

export type PaperProps<C extends React.ElementType> = PolymorphicComponentProps<C, SharedPaperProps>;

type PaperComponent = <C extends React.ElementType = 'div'>(props: PaperProps<C>) => React.ReactElement;

export const Paper: PaperComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'div'>(
    {
      component,
      className,
      children,
      padding = 'medium',
      radius = 'medium',
      withBorder = false,
      shadow = 'medium',
      co,
      overrideStyles,
      ...props
    }: PaperProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const { classes, cx } = useStyles({ radius, shadow, padding, withBorder }, { overrideStyles, name: 'Paper' });

    return (
      <View<any> component={component || 'div'} className={cx(classes.root, className)} co={co} ref={ref} {...props}>
        {children}
      </View>
    );
  },
);

Paper.displayName = '@co-design/core/Paper';
