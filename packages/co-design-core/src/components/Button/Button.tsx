import React, { forwardRef } from 'react';
import { CoComponentProps, CoSize, CoPalette, PolymorphicComponentProps, PolymorphicRef, useCoTheme, ClassNames } from '@co-design/styles';
import { View } from '../View';
import useStyles, { ButtonVariant } from './Button.style';
import { Spinner, SpinnerProps } from '../Spinner';
import { CO_HEIGHTS } from '../../constants';

export type ButtonStylesNames = ClassNames<typeof useStyles>;

export interface SharedButtonProps extends CoComponentProps<ButtonStylesNames> {
  /** Button 컴포넌트의 크기를 정합니다. */
  size?: CoSize;

  /** Button 컴포넌트의 색상을 정합니다. */
  color?: CoPalette;

  /** Button 컴포넌트의 모양을 지정합니다. */
  variant?: ButtonVariant;

  /** true일 경우 좌우 공간을 모두 차지합니다. */
  fullWidth?: boolean;

  /** button 요소의 type을 지정합니다. */
  type?: 'submit' | 'button' | 'reset';

  /** true일 경우 button이 disabled 됩니다. */
  disabled?: boolean;

  /** Button 컴포넌트 좌측 영역에 요소를 추가합니다. */
  leftIcon?: React.ReactNode;

  /** Button 컴포넌트 좌측 영역에 요소를 추가합니다. */
  rightIcon?: React.ReactNode;

  /** true일 경우 로딩 상태가 됩니다. */
  loading?: boolean;

  /** Spinner 컴포넌트의 props들을 오버라이드 합니다. */
  spinnerProps?: SpinnerProps;
}

export type ButtonProps<C extends React.ElementType> = PolymorphicComponentProps<C, SharedButtonProps>;

type ButtonComponent = <C extends React.ElementType = 'button'>(props: ButtonProps<C>) => React.ReactNode;

export const Button: ButtonComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'button'>(
    {
      children,
      component,
      size = 'medium',
      color: _color,
      variant = 'solid',
      fullWidth = false,
      type = 'button',
      disabled = false,
      leftIcon,
      rightIcon,
      loading = false,
      spinnerProps,
      className,
      co,
      overrideStyles,
      ...props
    }: ButtonProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const theme = useCoTheme();
    const color = _color || theme.foundations.tokens.color.bg['bg-primary'];
    const { classes, cx } = useStyles(
      {
        color: _color,
        size,
        fullWidth,
      },
      { overrideStyles, name: 'Button' },
    );

    const spinner = (
      <Spinner color={variant === 'solid' ? theme.colors.white : theme.palettes[color][6]} size={CO_HEIGHTS[size] / 2} {...spinnerProps} />
    );

    return (
      <View<any>
        component={component || 'button'}
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={cx({ [classes.loading]: loading }, classes.root, classes[variant], className)}
        co={co}
        onTouchStart={() => {}}
        {...props}
      >
        <div className={classes.inner}>
          {leftIcon && <span className={cx(classes.icon, classes.leftIcon)}>{leftIcon}</span>}

          <span className={classes.label}>{children}</span>

          {rightIcon && <span className={cx(classes.icon, classes.rightIcon)}>{rightIcon}</span>}
        </div>

        <div className={classes.spinnerWrapper}>{spinner}</div>
      </View>
    );
  },
);

Button.displayName = '@co-design/core/Button';
