import React, { forwardRef } from 'react';
import { PolymorphicComponentProps, PolymorphicRef, ClassNames } from '@co-design/styles';
import { View } from '../View';
import useStyles from './IconButton.style';
import { Spinner } from '../Spinner';
import { CO_HEIGHTS } from '../../constants';
import { SharedButtonProps } from '../Button/Button';
import { ButtonVariant } from '../Button';

type _SharedIconButtonProps = Omit<SharedButtonProps, 'leftIcon' | 'rightIcon'>;

export type IconButtonProps<C extends React.ElementType> = PolymorphicComponentProps<C, _SharedIconButtonProps>;

type IconButtonComponent = <C extends React.ElementType = 'button'>(props: IconButtonProps<C>) => React.ReactNode;

export const IconButton: IconButtonComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'button'>(
    {
      children,
      component,
      size = 'medium',
      variant = 'primary',
      type = 'button',
      disabled = false,
      loading = false,
      spinnerProps,
      className,
      co,
      overrideStyles,
      ...props
    }: IconButtonProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const { theme, classes, cx } = useStyles(
      {
        size,
      },
      { overrideStyles, name: 'Button' },
    );

    const spinner = (
      <Spinner
        color={isSolid(variant) ? theme.foundations.tokens.color.text.text_light : theme.foundations.tokens.color.text.text_base}
        size={CO_HEIGHTS[size] / 2}
        {...spinnerProps}
      />
    );

    return (
      <View<any>
        component={component || 'button'}
        className={cx({ [classes.loading]: loading }, classes.root, classes[variant], className)}
        type={type}
        disabled={disabled || loading}
        ref={ref}
        onTouchStart={() => {}}
        co={co}
        {...props}
      >
        <div className={classes.inner}>{children}</div>
        <div className={classes.spinnerWrapper}>{spinner}</div>
      </View>
    );
  },
);

const isSolid = (variant: ButtonVariant) => variant === 'primary' || variant === 'secondary' || variant === 'critical';

IconButton.displayName = '@co-design/core/IconButton';
