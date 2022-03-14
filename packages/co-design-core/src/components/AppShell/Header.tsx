import React, { forwardRef } from 'react';
import { CoComponentProps, CoSpacing, CoZIndex } from '@co-design/styles';
import { View } from '../View';
import useStyles from './Header.style';

export interface HeaderProps extends CoComponentProps, React.ComponentPropsWithoutRef<'nav'> {
  /** Header 내용이 들어갑니다. */
  children: React.ReactNode;

  /** Header 높이를 정합니다. */
  height: number | string;

  /** Header 영역에 padding을 줍니다. */
  padding?: CoSpacing | number;

  /**
   * Header 컴포넌트를 스크롤 위치와 무관하게 고정합니다.
   * 이 속성은 AppShell 컴포넌트에 의해 컨트롤될 수 있습니다.
   */
  fixed?: boolean;

  /** Header 컴포넌트의 z-index를 정합니다. */
  zIndex?: CoZIndex | number;
}

export const Header = forwardRef<HTMLElement, HeaderProps>(
  ({ children, className, co, overrideStyles, height, padding = 0, fixed = false, zIndex = 'sticky', ...props }: HeaderProps, ref) => {
    const { classes, cx } = useStyles({ height, padding, fixed, zIndex }, { name: 'Header', overrideStyles });

    return (
      <View component="nav" ref={ref} className={cx(classes.root, className)} co={co} {...props}>
        {children}
      </View>
    );
  },
);

Header.displayName = '@co-design/core/Header';
