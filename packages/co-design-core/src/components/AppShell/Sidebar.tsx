import React, { forwardRef } from 'react';
import { ClassNames, CoComponentProps } from '@co-design/styles';
import { View } from '../View';
import { SidebarSection } from './SidebarSection';
import useStyles, { SidebarPosition, SidebarWidth } from './Sidebar.style';
import { CoBreakpoints, CoSpacing, CoZIndex } from '@co-design/styles';

export type SidebarStylesNames = ClassNames<typeof useStyles>;

export interface SidebarProps extends CoComponentProps<SidebarStylesNames>, React.ComponentPropsWithoutRef<'nav'> {
  /** Sidebar width with breakpoints */
  width?: SidebarWidth | number;

  /** Sidebar height */
  height?: string | number;

  /** Sidebar content */
  children: React.ReactNode;

  /** Sidebar padding from theme.spacing or number to set padding in px */
  padding?: CoSpacing | number;

  /** Set position to fixed */
  fixed?: boolean;

  /** Position for fixed Sidebar */
  position?: SidebarPosition;

  /** Breakpoint at which Sidebar will be hidden if hidden prop is true */
  hiddenBreakpoint?: CoBreakpoints | number;

  /** Set to true to hide breakpoint at hiddenBreakpoint */
  hidden?: boolean;

  /** z-index */
  zIndex?: CoZIndex | number;
}

type SidebarComponent = ((props: SidebarProps) => React.ReactElement) & {
  displayName: string;
  Section: typeof SidebarSection;
};

export const Sidebar: SidebarComponent = forwardRef<HTMLElement, SidebarProps>(
  (
    {
      width,
      height = '100vh',
      padding = 0,
      fixed = false,
      position = { top: 0, left: 0 },
      zIndex = 'sticky',
      hiddenBreakpoint = 'small',
      hidden = false,
      className,
      co,
      overrideStyles,
      children,
      ...others
    }: SidebarProps,
    ref,
  ) => {
    const { classes, cx } = useStyles({ width, height, padding, fixed, position, hiddenBreakpoint, zIndex }, { co, overrideStyles, name: 'Sidebar' });

    return (
      <View component="nav" ref={ref} className={cx(classes.root, { [classes.hidden]: hidden }, className)} {...others}>
        {children}
      </View>
    );
  },
) as any;

Sidebar.Section = SidebarSection;
Sidebar.displayName = '@co-design/core/Sidebar';
