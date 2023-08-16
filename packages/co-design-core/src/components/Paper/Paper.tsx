import React, { forwardRef } from 'react';
import { CoComponentProps, CoShadows, PolymorphicComponentProps, PolymorphicRef, CoSpacing, CoRadius, ClassNames } from '@co-design/styles';
import { View } from '../View';
import useStyles from './Paper.style';

export type PaperStylesNames = ClassNames<typeof useStyles>;

export interface SharedPaperProps extends CoComponentProps<PaperStylesNames> {
  /** Paper 컴포넌트의 padding을 설정합니다. */
  padding?: CoSpacing | number;

  /** Paper 컴포넌트에 shadow를 설정합니다. */
  shadow?: CoShadows;

  /** Paper 컴포넌트에 radius를 설정합니다. */
  radius?: CoRadius | number;

  /** true일 경우 border가 추가됩니다. */
  withBorder?: boolean;
}

export type PaperProps<C extends React.ElementType> = PolymorphicComponentProps<C, SharedPaperProps>;

type PaperComponent = <C extends React.ElementType = 'div'>(props: PaperProps<C>) => React.ReactNode;

export const Paper: PaperComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'div'>(
    {
      component,
      className,
      children,
      padding = 'medium',
      radius = 'medium',
      withBorder = true,
      shadow = 'none',
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
