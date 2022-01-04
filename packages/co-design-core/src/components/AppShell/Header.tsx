import React, { forwardRef } from 'react';
import { CoComponentProps, CoSpacing, CoZIndex } from '@co-design/styles';
import { View } from '../View';
import useStyles, { HeaderPosition } from './Header.style';

export interface HeaderProps extends CoComponentProps, React.ComponentPropsWithoutRef<'nav'> {
  /** Header content */
  children: React.ReactNode;

  /** Header height */
  height: number | string;

  /** Header padding from theme.spacing or number to set padding in px */
  padding?: CoSpacing | number;

  /** Changes position to fixed, controlled by AppShell component if rendered inside */
  fixed?: boolean;

  /** Control top, left, right or bottom position values, controlled by AppShell component if rendered inside */
  position?: HeaderPosition;

  /** z-index */
  zIndex?: CoZIndex | number;
}

export const Header = forwardRef<HTMLElement, HeaderProps>(
  (
    {
      children,
      className,
      co,
      overrideStyles,
      height,
      padding = 0,
      fixed = false,
      position = { top: 0, left: 0, right: 0 },
      zIndex = 'sticky',
      ...props
    }: HeaderProps,
    ref,
  ) => {
    const { classes, cx } = useStyles({ height, padding, fixed, position, zIndex }, { name: 'Header', overrideStyles });

    return (
      <View component="nav" ref={ref} className={cx(classes.root, className)} co={co} {...props}>
        {children}
      </View>
    );
  },
);

Header.displayName = '@co-design/core/Header';
