import React, { useState, useRef, forwardRef } from 'react';
import { useId } from '@co-design/hooks';
import { CoComponentProps, ClassNames, CoShadows, CoSize, CoSpacing } from '@co-design/styles';
import { View } from '../View';
import { Divider } from '../Divider';
import { Text } from '../Text';
import { MenuItem, MenuItemComponent, MenuItemType, MenuItemStylesNames } from './MenuItem';
import { MenuLabel, MenuLabelProps } from './MenuLabel';
import useStyles from './Menu.style';

export type MenuStylesNames = ClassNames<typeof useStyles> | MenuItemStylesNames;

export interface MenuProps extends CoComponentProps<MenuStylesNames>, React.ComponentPropsWithRef<'div'> {
  children: React.ReactNode;
  padding?: CoSpacing | number;
}

type MenuComponent = {
  displayName?: string;
  Item: MenuItemComponent;
  Label: React.FC<MenuLabelProps>;
} & ((props: MenuProps) => React.ReactElement);

function getNextItem(active: number, items: MenuItemType[]) {
  for (let i = active + 1; i < items.length; i += 1) {
    if (!items[i].props.disabled && items[i].type === MenuItem) {
      return i;
    }
  }

  return active;
}

function findInitialItem(items: MenuItemType[]) {
  for (let i = 0; i < items.length; i += 1) {
    if (!items[i].props.disabled && items[i].type === MenuItem) {
      return i;
    }
  }

  return -1;
}

function getPreviousItem(active: number, items: MenuItemType[]) {
  for (let i = active - 1; i >= 0; i -= 1) {
    if (!items[i].props.disabled && items[i].type === MenuItem) {
      return i;
    }
  }

  if (!items[active] || items[active].type !== MenuItem) {
    return findInitialItem(items);
  }

  return active;
}

export const Menu: MenuComponent = forwardRef<HTMLDivElement, MenuProps>(
  ({ children, padding = 'medium', onMouseLeave, onMouseEnter, onChange, className, co, overrideStyles, ...props }: MenuProps, ref) => {
    const [hovered, setHovered] = useState(-1);
    const buttonsRefs = useRef<Record<string, HTMLButtonElement>>({});
    const { classes, cx, theme } = useStyles({ padding }, { overrideStyles, name: 'Menu' });

    const items = React.Children.toArray(children).filter(
      (item: MenuItemType) => item.type === MenuItem || item.type === Divider || item.type === MenuLabel,
    ) as MenuItemType[];

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.nativeEvent.code === 'Tab') {
        event.preventDefault();
      }

      if (event.nativeEvent.code === 'ArrowDown') {
        event.preventDefault();
        const prevIndex = getNextItem(hovered, items);
        setHovered(prevIndex);
        buttonsRefs.current[prevIndex].focus();
      }

      if (event.nativeEvent.code === 'ArrowUp') {
        event.preventDefault();
        const prevIndex = getPreviousItem(hovered, items);
        setHovered(prevIndex);
        buttonsRefs.current[prevIndex].focus();
      }
    };

    const content = items.map((item, index) => {
      if (item.type === MenuItem) {
        return (
          <MenuItem<'button'>
            {...item.props}
            key={index}
            padding={padding}
            hovered={hovered === index}
            onHover={() => setHovered(index)}
            onMouseLeave={() => setHovered(-1)}
            onKeyDown={handleKeyDown}
            // styles={styles}
            ref={(node) => {
              buttonsRefs.current[index] = node;
            }}
          />
        );
      }

      if (item.type === MenuLabel) {
        return <Text key={index} block className={classes.label} {...(item.props as any)} />;
      }

      if (item.type === Divider) {
        return <Divider variant="solid" className={classes.divider} margin={theme.spacing.small / 2} key={index} />;
      }

      return null;
    });

    return (
      <View
        ref={ref}
        className={cx(classes.root, className)}
        co={co}
        role="menu"
        aria-orientation="vertical"
        onMouseLeave={() => setHovered(-1)}
        {...props}
      >
        {content}
      </View>
    );
  },
) as any;

Menu.Item = MenuItem;
Menu.Label = MenuLabel;

Menu.displayName = '@co-design/core/Menu';
