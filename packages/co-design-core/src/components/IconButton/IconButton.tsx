import React, { forwardRef } from 'react';
import { DefaultProps, CoSize, CoColorPalette, PolymorphicComponentProps, PolymorphicRef } from '@co-design/styles';
import { View } from '../View';
import useStyles, { IconButtonVariant } from './IconButton.style';
import { Spinner } from '../Spinner';
import { CO_HEIGHTS } from '../../constants';

export interface SharedIconButtonProps extends DefaultProps {
  size?: CoSize;
  color?: CoColorPalette;
  variant?: IconButtonVariant;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  loading?: boolean;
}

export type IconButtonProps<C extends React.ElementType> = PolymorphicComponentProps<C, SharedIconButtonProps>;

type IconButtonComponent = <C extends React.ElementType = 'button'>(props: IconButtonProps<C>) => React.ReactElement;

export const IconButton: IconButtonComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'button'>(
    {
      children,
      component,
      size = 'medium',
      color: _color,
      variant = 'primary',
      type = 'button',
      disabled = false,
      loading = false,
      className,
      co,
      ...props
    }: IconButtonProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const { theme, classes, cx } = useStyles(
      {
        color: _color,
        size,
      },
      { co, name: 'Button' },
    );

    const color = _color || theme.primaryColor;
    const spinner = <Spinner color={variant === 'primary' ? theme.colors.white : theme.colorPalettes[color][6]} size={CO_HEIGHTS[size] / 2} />;

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
        <div className={classes.inner}>{children}</div>
        <div className={classes.spinner}>{spinner}</div>
      </View>
    );
  },
);

IconButton.displayName = '@co-design/core/IconButton';
