import React from 'react';
import { CoColorPalette, DefaultProps, useCoTheme } from '@co-design/styles';
import { View } from '../View';
import useStyles from './TabPane.style';

export interface TabPaneProps extends DefaultProps, React.ComponentPropsWithRef<'button'> {
  active?: boolean;
  color?: CoColorPalette;
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
  ...props
}: TabPaneProps) => {
  const theme = useCoTheme();
  const { classes, cx } = useStyles({ color: overrideColor || color || theme.primaryColor, orientation }, { co, name: 'Tabs' });

  return (
    <View
      {...props}
      component="button"
      tabIndex={active ? 0 : -1}
      className={cx(classes.tabPane, { [classes.tabActive]: active }, className)}
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
