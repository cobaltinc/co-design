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
  /** <Tab /> components only */
  children: React.ReactNode;

  /** Index of initial tab */
  initialTab?: number;

  /** Index of active tab, overrides internal state */
  active?: number;

  /** Active tab color from theme.colors */
  color?: CoPalette;

  /** True if tabs should take all available space */
  grow?: boolean;

  /** Tab controls position */
  position?: GroupPosition;

  /** Called when tab control is clicked with tab index */
  onTabChange?(tabIndex: number): void;

  /** Controls tab content padding-top */
  tabPadding?: CoSpacing;

  /** Controls tab orientation */
  orientation?: 'horizontal' | 'vertical';
}

function getPreviousTab(active: number, tabs: TabType[]) {
  for (let i = active - 1; i >= 0; i -= 1) {
    if (!tabs[i].props.disabled) {
      return i;
    }
  }

  return active;
}

function getNextTab(active: number, tabs: TabType[]) {
  for (let i = active + 1; i < tabs.length; i += 1) {
    if (!tabs[i].props.disabled) {
      return i;
    }
  }

  return active;
}

function findInitialTab(tabs: TabType[]) {
  for (let i = 0; i < tabs.length; i += 1) {
    if (!tabs[i].props.disabled) {
      return i;
    }
  }

  return -1;
}

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
