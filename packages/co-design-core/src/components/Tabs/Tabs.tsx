import React, { useRef, forwardRef } from 'react';
import { useUncontrolled, mergeRefs } from '@co-design/hooks';
import { CoPalette, CoSpacing, CoComponentProps, ClassNames } from '@co-design/styles';
import { View } from '../View';
import { Group, GroupPosition } from '../Group';
import { TabPane, TabType } from './TabPane';
import useStyles from './Tabs.style';
import { clamp } from './utils';

export type TabsStylesNames = ClassNames<typeof useStyles>;

export interface TabsProps extends CoComponentProps<TabsStylesNames>, React.ComponentPropsWithRef<'div'> {
  /** TabPane 컴포넌트만 포함시킬 수 있습니다. */
  children: React.ReactNode;

  /** 처음 보여줄 TabPane 번호를 정합니다. */
  initialTab?: number;

  /**
   * Active시킬 TabPane 번호를 정합니다.
   * TabPanes 컴포넌트를 직접 제어할 경우 사용합니다.
   */
  active?: number;

  /** Active된 TabPane의 색상을 정합니다. */
  color?: CoPalette;

  /** true일 경우 포함된 TabPane이 남은 공간을 모두 사용합니다. */
  grow?: boolean;

  /** TabPane의 가로 위치를 정합니다. */
  position?: GroupPosition;

  /** 선택된 TabPane이 변경될 경우 실행됩니다. */
  onTabChange?(tabIndex: number): void;

  /** Tab 영역과 컨텐츠 영역에 간격을 정합니다. */
  tabPadding?: CoSpacing;

  /** Tab의 방향을 정합니다. */
  orientation?: 'horizontal' | 'vertical';
}

const getPreviousTab = (active: number, tabs: TabType[]) => {
  for (let i = active - 1; i >= 0; i -= 1) {
    if (!tabs[i].props.disabled) {
      return i;
    }
  }

  return active;
};

const getNextTab = (active: number, tabs: TabType[]) => {
  for (let i = active + 1; i < tabs.length; i += 1) {
    if (!tabs[i].props.disabled) {
      return i;
    }
  }

  return active;
};

const findInitialTab = (tabs: TabType[]) => {
  for (let i = 0; i < tabs.length; i += 1) {
    if (!tabs[i].props.disabled) {
      return i;
    }
  }

  return -1;
};

type TabsComponent = ((props: TabsProps) => React.ReactElement) & {
  displayName: string;
  Pane: typeof TabPane;
};

export const Tabs: TabsComponent = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      children,
      initialTab,
      active,
      position = 'left',
      grow = false,
      onTabChange,
      color,
      tabPadding = 'medium',
      orientation = 'horizontal',
      className,
      co,
      overrideStyles,
      ...props
    }: TabsProps,
    ref,
  ) => {
    const { classes, cx } = useStyles({ tabPadding, orientation }, { overrideStyles, name: 'Tabs' });

    const controlRefs = useRef<Record<string, HTMLButtonElement>>({});

    const tabs = React.Children.toArray(children).filter((item: TabType) => item.type === TabPane) as TabType[];

    const [_activeTab, handleActiveTabChange] = useUncontrolled({
      value: active,
      defaultValue: initialTab,
      finalValue: findInitialTab(tabs),
      rule: (value) => typeof value === 'number',
      onChange: onTabChange,
    });

    const activeTab = clamp({ value: _activeTab, min: 0, max: tabs.length - 1 });

    const nextTabCode = orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown';
    const previousTabCode = orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp';

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.nativeEvent.code === nextTabCode) {
        event.preventDefault();
        const nextTab = getNextTab(activeTab, tabs);
        handleActiveTabChange(nextTab);
        controlRefs.current[nextTab].focus();
      }

      if (event.nativeEvent.code === previousTabCode) {
        event.preventDefault();
        const previousTab = getPreviousTab(activeTab, tabs);
        handleActiveTabChange(previousTab);
        controlRefs.current[previousTab].focus();
      }
    };

    const panes = tabs.map((tab, index) => (
      <TabPane
        {...tab.props}
        key={index}
        active={activeTab === index}
        onKeyDown={handleKeyDown}
        color={tab.props.color || color}
        orientation={orientation}
        buttonRef={mergeRefs((node: HTMLButtonElement) => {
          controlRefs.current[index] = node;
        }, tab.ref)}
        onClick={() => activeTab !== index && handleActiveTabChange(index)}
      />
    ));

    const content = tabs[activeTab].props.children;

    return (
      <View ref={ref} className={cx(classes.root, className)} co={co} {...props}>
        <div className={classes.tabsListWrapper}>
          <Group
            className={classes.tabsList}
            role="tablist"
            direction={orientation === 'horizontal' ? 'row' : 'column'}
            aria-orientation={orientation}
            spacing={0}
            position={position}
            grow={grow}
          >
            {panes}
          </Group>
        </div>

        {content && (
          <div role="tabpanel" className={classes.body}>
            {content}
          </div>
        )}
      </View>
    );
  },
) as any;

Tabs.displayName = '@co-design/core/Tabs';
Tabs.Pane = TabPane;
