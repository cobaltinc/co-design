import React, { forwardRef } from 'react';
import { CoPalette, CoComponentProps, useCoTheme, ClassNames } from '@co-design/styles';
import { View } from '../View';
import useStyles from './TabPane.style';
import { mergeRefs } from '@co-design/hooks';

export type TabPaneStylesNames = ClassNames<typeof useStyles>;

export interface TabPaneProps extends CoComponentProps<TabPaneStylesNames>, React.ComponentPropsWithRef<'button'> {
  /** TabPane이 Active될 경우 보여줄 요소를 정합니다. */
  children?: React.ReactNode;

  /**
   * Active 여부가 설정됩니다.
   * 이 속성은 Tabs 컴포넌트에 의해 제어됩니다.
   */
  active?: boolean;

  /**
   * Active 상태일 때 색상을 정합니다.
   * 이 속성은 Tabs 컴포넌트에 의해 제어됩니다.
   */
  color?: CoPalette;

  /**
   * Tab 방향을 정합니다.
   * 이 속성은 Tabs 컴포넌트에 의해 제어됩니다.
   */
  orientation?: 'horizontal' | 'vertical';

  /** TabPane 컴포넌트 왼쪽에 아이콘이 추가됩니다. */
  icon?: React.ReactNode;

  /** Tabs 컴포넌트에서 TabPane 컴포넌트를 받아오기 위해 사용하는 속성입니다. */
  buttonRef?: React.ForwardedRef<HTMLButtonElement>;

  /** TabPane 컴포넌트의 Label을 설정합니다. */
  label?: React.ReactNode;
}

export interface TabType extends React.ReactElement {
  type: any;
  props: TabPaneProps;
  ref: React.ForwardedRef<HTMLButtonElement>;
}

export const TabPane = forwardRef<HTMLButtonElement, TabPaneProps>(
  (
    {
      active,
      buttonRef,
      color,
      orientation = 'horizontal',
      label,
      icon,
      color: overrideColor,
      className,
      co,
      overrideStyles,
      ...props
    }: TabPaneProps,
    ref,
  ) => {
    const theme = useCoTheme();
    const { classes, cx } = useStyles({ color: overrideColor || color || theme.primaryColor, orientation }, { overrideStyles, name: 'Tabs' });

    return (
      <View
        {...props}
        component="button"
        tabIndex={active ? 0 : -1}
        className={cx(classes.tabPane, { [classes.tabActive]: active }, className)}
        co={co}
        type="button"
        role="tab"
        aria-selected={active}
        ref={mergeRefs(ref, buttonRef)}
      >
        <div className={classes.tabInner}>
          {icon && <div className={classes.tabIcon}>{icon}</div>}
          {label && <div className={classes.tabLabel}>{label}</div>}
        </div>
      </View>
    );
  },
);

TabPane.displayName = '@co-design/core/TabPane';
