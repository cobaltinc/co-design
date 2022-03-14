import React, { forwardRef } from 'react';
import { CoComponentProps, CoTheme, useCoTheme, ClassNames, CoSpacing, CoZIndex, CoBreakpoints } from '@co-design/styles';
import { View } from '../View';
import { getSortedBreakpoints } from './getSortedBreakpoints';
import useStyles from './AppShell.style';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export type AppShellStylesNames = ClassNames<typeof useStyles>;

export interface AppShellProps extends CoComponentProps<AppShellStylesNames> {
  /** AppShell.Sidebar 컴포넌트를 지정합니다. */
  sidebar?: React.ReactElement;

  /** AppShell.Header 컴포넌트를 지정합니다. */
  header?: React.ReactElement;

  /** Sidebar와 Header 컴포넌트에 z-index를 전달합니다. */
  zIndex?: CoZIndex | number;

  /** Sidebar와 Header가 스크롤 위치와 상관없이 고정됩니다. */
  fixed?: boolean;

  /** AppShell에 들어갈 내용입니다. */
  children: React.ReactNode;

  /** children 영역에 padding을 줍니다. */
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
      { overrideStyles, name: 'AppShell' },
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
      <View ref={ref} className={cx(classes.root, className)} co={co} {...props}>
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
