import React, { forwardRef } from 'react';
import { ClassNames, PolymorphicComponentProps, PolymorphicRef, CoComponentProps, CoPalette, CoColor, CoSpacing } from '@co-design/styles';
import { View } from '../View';
import useStyles from './MenuItem.style';

export type MenuItemStylesNames = ClassNames<typeof useStyles>;

export interface SharedMenuItemProps extends CoComponentProps<MenuItemStylesNames> {
  /** Item label */
  children: React.ReactNode;

  padding?: CoSpacing | number;

  /** Icon rendered on the left side of label */
  icon?: React.ReactNode;

  /** Any color from theme.colors */
  color?: CoPalette | CoColor | string;

  /** Any react node to render on the right side of item, for example, keyboard shortcut or badge */
  rightSection?: React.ReactNode;

  /** Is item disabled */
  disabled?: boolean;

  /** Is item hovered, controlled by parent Menu component */
  hovered?: boolean;

  /** Called when item is hovered, controlled by parent Menu component */
  onHover?(): void;
}

export type MenuItemProps<C extends React.ElementType> = PolymorphicComponentProps<C, SharedMenuItemProps>;

export type MenuItemComponent = <C extends React.ElementType = 'button'>(props: MenuItemProps<C>) => React.ReactElement;

export interface MenuItemType {
  type: any;
  props: MenuItemProps<'button'>;
  ref?: React.RefObject<HTMLButtonElement> | ((instance: HTMLButtonElement) => void);
}

export const MenuItem: MenuItemComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'button'>(
    {
      className,
      padding,
      children,
      onHover,
      hovered,
      icon,
      color,
      disabled,
      rightSection,
      component,
      co,
      overrideStyles,
      ...props
    }: MenuItemProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const { classes, cx } = useStyles({ color, padding }, { overrideStyles, name: 'Menu' });

    return (
      <View<any>
        component={component || 'button'}
        type="button"
        role="menuitem"
        className={cx(classes.item, { [classes.itemHovered]: hovered }, className)}
        co={co}
        onMouseEnter={() => !disabled && onHover()}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        <div className={classes.itemInner}>
          {icon && <div className={classes.itemIcon}>{icon}</div>}

          <div className={classes.itemBody}>
            <div className={classes.itemLabel}>{children}</div>
            {rightSection}
          </div>
        </div>
      </View>
    );
  },
) as any;

MenuItem.displayName = '@co-design/core/MenuItem';
