import React, { forwardRef } from 'react';
import { CoComponentProps, CoTheme, useCoTheme, ClassNames, CoSpacing, CoZIndex, CoBreakpoints } from '@co-design/styles';
import { View } from '../View';
import { getSortedBreakpoints } from './getSortedBreakpoints';
import useStyles from './AppShell.style';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export type AppShellStylesNames = ClassNames<typeof useStyles>;

export interface AppShellProps extends CoComponentProps<AppShellStylesNames> {
  /** <Sidebar /> component */
  sidebar?: React.ReactElement;

  /** <Header /> component */
  header?: React.ReactElement;

  /** zIndex prop passed to Sidebar and Header components */
  zIndex?: CoZIndex | number;

  /** true to switch from static layout to fixed */
  fixed?: boolean;

  /** AppShell content */
  children: React.ReactNode;

  /** Content padding */
  padding?: CoSpacing | number;
}

function getElementHeight(element: React.ReactElement) {
  const height = element?.props?.height;
  return typeof height === 'number' ? `${height}px` : typeof height === 'string' ? height : '0px';
}

function getSidebarWidth(element: React.ReactElement) {
  const width = typeof element?.props?.width === 'object' ? element?.props?.width?.base : element?.props?.width;
  return typeof width === 'number' ? `${width}px` : typeof width === 'string' ? width : '0px';
}

function getSidebarBreakpoints(element: React.ReactElement, theme: CoTheme) {
  const breakpoints = element?.props?.width;
  return breakpoints != null ? getSortedBreakpoints<{ width: number | string; height: number | string }>(breakpoints as any, theme) : [];
}

function getSidebarHiddenBreakpoint(element: React.ReactElement, theme: CoTheme) {
  const breakpoint = element?.props?.hiddenBreakpoint || 'small';
  return breakpoint != null ? theme.fn.size({ size: breakpoint, sizes: theme.breakpoints }) : 0;
}

type AppShellComponent = ((props: AppShellProps) => React.ReactElement) & {
  displayName: string;
  Header: typeof Header;
  Sidebar: typeof Sidebar;
};

export const AppShell: AppShellComponent = forwardRef<HTMLDivElement, AppShellProps>(
  ({ children, sidebar, header, fixed = false, zIndex = 'sticky', padding = 0, className, co, overrideStyles, ...props }: AppShellProps, ref) => {
    const theme = useCoTheme();
    const sidebarBreakpoints = getSidebarBreakpoints(sidebar, theme);
    const sidebarHiddenBreakpoint = getSidebarHiddenBreakpoint(sidebar, theme);
    const sidebarWidth = getSidebarWidth(sidebar);
    const headerHeight = getElementHeight(header);
    const sidebarHeight = getElementHeight(sidebar);
    const { classes, cx } = useStyles(
      {
        padding,
        fixed,
        sidebarWidth,
        headerHeight,
        sidebarBreakpoints,
        sidebarHiddenBreakpoint,
      },
      { co, overrideStyles, name: 'AppShell' },
    );
    const _header = header ? React.cloneElement(header, { fixed, zIndex }) : null;
    const _sidebar = sidebar
      ? React.cloneElement(sidebar, {
          fixed,
          zIndex,
          height: sidebarHeight !== '0px' ? sidebarHeight : `calc(100vh - ${headerHeight})`,
          position: { top: headerHeight, left: 0 },
        })
      : null;

    return (
      <View className={cx(classes.root, className)} ref={ref} {...props}>
        {_header}

        <div className={classes.body}>
          {_sidebar}
          <main className={classes.main}>{children}</main>
        </div>
      </View>
    );
  },
) as any;

AppShell.displayName = '@co-design/core/AppShell';
AppShell.Header = Header;
AppShell.Sidebar = Sidebar;
