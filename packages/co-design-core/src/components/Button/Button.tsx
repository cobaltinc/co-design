import React, { forwardRef } from 'react';
import { CoComponentProps, CoSize, CoPalette, PolymorphicComponentProps, PolymorphicRef, useCoTheme, ClassNames } from '@co-design/styles';
import { View } from '../View';
import useStyles, { ButtonVariant } from './Button.style';
import { Spinner } from '../Spinner';
import { CO_HEIGHTS } from '../../constants';

export type ButtonStylesNames = ClassNames<typeof useStyles>;

export interface SharedButtonProps extends CoComponentProps<ButtonStylesNames> {
  size?: CoSize;
  color?: CoPalette;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
}

export type ButtonProps<C extends React.ElementType> = PolymorphicComponentProps<C, SharedButtonProps>;

type ButtonComponent = <C extends React.ElementType = 'button'>(props: ButtonProps<C>) => React.ReactElement;

export const Button: ButtonComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'button'>(
    {
      children,
      component,
      size = 'medium',
      color: _color,
      variant = 'primary',
      fullWidth = false,
      type = 'button',
      disabled = false,
      leftIcon,
      rightIcon,
      loading = false,
      className,
      co,
      overrideStyles,
      ...props
    }: ButtonProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const theme = useCoTheme();
    const color = _color || theme.primaryColor;
    const { classes, cx } = useStyles(
      {
        color: _color,
        size,
        fullWidth,
      },
      { co, overrideStyles, name: 'Button' },
    );

    const spinner = <Spinner color={variant === 'primary' ? theme.colors.white : theme.palettes[color][6]} size={CO_HEIGHTS[size] / 2} />;

    return (
      <View<any>
        component={component || 'button'}
        className={cx({ [classes.loading]: loading }, classes.root, classes[variant], className)}
        type={type}
        disabled={disabled || loading}
        ref={ref}
        onTouchStart={() => {}}
        {...props}
      >
        <div className={classes.inner}>
          {leftIcon && <span className={cx(classes.icon, classes.leftIcon)}>{leftIcon}</span>}

          <span className={classes.label}>{children}</span>

          {rightIcon && <span className={cx(classes.icon, classes.rightIcon)}>{rightIcon}</span>}
        </div>

        <div className={classes.spinner}>{spinner}</div>
      </View>
    );
  },
);

Button.displayName = '@co-design/core/Button';
