import React, { forwardRef } from 'react';
import { CoComponentProps, ClassNames, CoPalette, CoColor, CoRadius } from '@co-design/styles';
import { Text } from '../Text';
import { Spinner } from '../Spinner';
import { CloseButton } from '../IconButton';
import { View } from '../View';
import useStyles from './Toast.style';

export type ToastStylesNames = Exclude<ClassNames<typeof useStyles>, 'withIcon'>;

export interface ToastProps extends CoComponentProps<ToastStylesNames>, Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  /** Called when close button is clicked */
  onClose(): void;

  /** Toast line or icon color */
  color?: CoPalette | CoColor | string;

  /** Radius from theme.radius, or number to set border-radius in px */
  radius?: CoRadius | number;

  /** Toast icon, replaces color line */
  icon?: React.ReactNode;

  /** Toast title, displayed before body */
  title?: React.ReactNode;

  /** Toast body, place main text here */
  children?: React.ReactNode;

  /** Replaces colored line or icon with Spinner component */
  loading?: boolean;

  /** Removes close button */
  closable?: boolean;

  /** Props spread to close button */
  closeButtonProps?: React.ComponentPropsWithoutRef<'button'> & { [key: string]: any };
}

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      className,
      color = 'blue',
      radius = 'small',
      loading = false,
      closable = true,
      title,
      icon,
      children,
      onClose,
      closeButtonProps,
      co,
      overrideStyles,
      ...others
    }: ToastProps,
    ref,
  ) => {
    const { classes, cx } = useStyles({ color, radius, closable }, { overrideStyles, name: 'Toast' });
    const withIcon = icon || loading;

    return (
      <View className={cx(classes.root, { [classes.withIcon]: withIcon }, className)} co={co} role="alert" ref={ref} {...others}>
        {icon && !loading && <div className={classes.icon}>{icon}</div>}
        {loading && <Spinner size={28} color={color} className={classes.spinner} />}

        <div className={classes.body}>
          {title && (
            <Text className={classes.title} size="small" strong block>
              {title}
            </Text>
          )}

          <Text className={classes.description} size="small" block>
            {children}
          </Text>
        </div>

        {closable && (
          <CloseButton {...closeButtonProps} size="xsmall" color="dark" onClick={onClose} variant="transparent" className={classes.closeButton} />
        )}
      </View>
    );
  },
);

Toast.displayName = '@co-design/core/Toast';
