import React, { forwardRef } from 'react';
import { PolymorphicComponentProps, PolymorphicRef, ClassNames } from '@co-design/styles';
import { View } from '../View';
import useStyles from './IconButton.style';
import { Spinner } from '../Spinner';
import { CO_HEIGHTS } from '../../constants';
import { SharedButtonProps } from '../Button/Button';

type _SharedIconButtonProps = Omit<SharedButtonProps, 'leftIcon' | 'rightIcon'>;

export type IconButtonProps<C extends React.ElementType> = PolymorphicComponentProps<C, _SharedIconButtonProps>;

type IconButtonComponent = <C extends React.ElementType = 'button'>(props: IconButtonProps<C>) => React.ReactElement;

export const IconButton: IconButtonComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'button'>(
    {
      children,
      component,
      size = 'medium',
      color: _color,
      variant = 'solid',
      type = 'button',
      disabled = false,
      loading = false,
      className,
      co,
      overrideStyles,
      ...props
    }: IconButtonProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const { theme, classes, cx } = useStyles(
      {
        color: _color,
        size,
      },
      { overrideStyles, name: 'Button' },
    );

    const color = _color || theme.primaryColor;
    const spinner = <Spinner color={variant === 'solid' ? theme.colors.white : theme.palettes[color][6]} size={CO_HEIGHTS[size] / 2} />;

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
        <div className={classes.spinner}>{spinner}</div>
      </View>
    );
  },
);

IconButton.displayName = '@co-design/core/IconButton';
