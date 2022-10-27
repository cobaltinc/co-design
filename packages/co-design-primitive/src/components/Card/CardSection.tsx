import React, { forwardRef } from 'react';
import { CoComponentProps, CoSpacing, PolymorphicComponentProps, PolymorphicRef } from '@co-design/styles';
import { View } from '../View';
import useStyles from './CardSection.style';

export interface _CardSectionProps extends CoComponentProps {
  padding?: CoSpacing | number;
  first?: boolean;
  last?: boolean;
}

export type CardSectionProps<C extends React.ElementType> = PolymorphicComponentProps<C, _CardSectionProps>;

type CardSectionComponent = (<C extends React.ElementType = 'div'>(props: CardSectionProps<C>) => React.ReactElement) & {
  displayName?: string;
};

export const CardSection: CardSectionComponent = forwardRef(
  <C extends React.ElementType = 'div'>(
    { padding = 0, component, first, last, className, ...props }: CardSectionProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const { classes, cx } = useStyles({ padding, first, last }, { name: 'Card' });
    return <View<any> component={component || 'div'} className={cx(classes.cardSection, className)} ref={ref} {...props} />;
  },
);

CardSection.displayName = '@co-design/primitive/CardSection';
