import React, { forwardRef } from 'react';
import { ClassNames, CoComponentProps } from '@co-design/styles';
import { View } from '../View';
import { SidebarSection } from './SidebarSection';
import useStyles, { SidebarPosition, SidebarWidth } from './Sidebar.style';
import { CoBreakpoints, CoSpacing, CoZIndex } from '@co-design/styles';

export type SidebarStylesNames = ClassNames<typeof useStyles>;

export interface SidebarProps extends CoComponentProps<SidebarStylesNames>, React.ComponentPropsWithoutRef<'nav'> {
  /** breakpoint에 따라 Sidebar의 너비를 지정합니다. */
  width?: SidebarWidth | number;

  /** Sidebar의 높이를 지정합니다. */
  height?: string | number;

  /** Sidebar 내용이 들어갑니다. */
  children: React.ReactNode;

  /** Sidebar 영역에 padding을 줍니다. */
  padding?: CoSpacing | number;

  /**
   * Sidebar 컴포넌트를 스크롤 위치와 무관하게 고정합니다.
   * 이 속성은 AppShell 컴포넌트에 의해 컨트롤될 수 있습니다.
   */
  fixed?: boolean;

  /**
   * Sidebar 컴포넌트의 위치를 지정합니다.
   * 이 속성은 AppShell 컴포넌트에 의해 컨트롤될 수 있습니다.
   */
  position?: SidebarPosition;

  /** hidden이 true면서 특정 breakpoint 이하일 경우 Sidebar를 숨깁니다. */
  hiddenBreakpoint?: CoBreakpoints | number;

  /** 이 Prop이 true면서 hiddenBreakpoint가 지정된 경우 Sidebar를 숨깁니다. */
  hidden?: boolean;

  /** Sidebar 컴포넌트의 z-index를 정합니다. */
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
      ...props
    }: SidebarProps,
    ref,
  ) => {
    const { classes, cx } = useStyles({ width, height, padding, fixed, position, hiddenBreakpoint, zIndex }, { overrideStyles, name: 'Sidebar' });

    return (
      <View component="nav" ref={ref} className={cx(classes.root, { [classes.hidden]: hidden }, className)} co={co} {...props}>
        {children}
      </View>
    );
  },
) as any;

Sidebar.Section = SidebarSection;
Sidebar.displayName = '@co-design/core/Sidebar';
