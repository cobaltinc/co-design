import React from 'react';
import { CoPalette, CoComponentProps, useCoTheme, ClassNames } from '@co-design/styles';
import { View } from '../View';
import useStyles from './TabPane.style';

export type TabPaneStylesNames = ClassNames<typeof useStyles>;

export interface TabPaneProps extends CoComponentProps<TabPaneStylesNames>, React.ComponentPropsWithRef<'button'> {
  active?: boolean;
  color?: CoPalette;
  orientation?: 'horizontal' | 'vertical';
  icon?: React.ReactNode;
  buttonRef?: React.ForwardedRef<HTMLButtonElement>;
  label?: React.ReactNode;
  children?: React.ReactNode;
  ref?: React.ForwardedRef<HTMLButtonElement>;
}

export interface TabType {
  type: any;
  props: TabPaneProps;
  ref: React.ForwardedRef<HTMLButtonElement>;
}

export const TabPane = ({
  active,
  buttonRef,
  color,
  orientation = 'horizontal',
  icon: __,
  label,
  icon,
  color: overrideColor,
  className,
  co,
  overrideStyles,
  ...props
}: TabPaneProps) => {
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
      ref={buttonRef}
    >
      <div className={classes.tabInner}>
        {icon && <div className={classes.tabIcon}>{icon}</div>}
        {label && <div className={classes.tabLabel}>{label}</div>}
      </div>
    </View>
  );
};

TabPane.displayName = '@mantine/core/TabPane';
