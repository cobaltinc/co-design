import React, { forwardRef } from 'react';
import { ClassNames, PolymorphicComponentProps, PolymorphicRef, CoComponentProps, CoPalette, CoColor, CoSpacing } from '@co-design/styles';
import { View } from '../View';
import useStyles from './MenuItem.style';

export type MenuItemStylesNames = ClassNames<typeof useStyles>;

export interface SharedMenuItemProps extends CoComponentProps<MenuItemStylesNames> {
  /** label 영역에 적용됩니다. */
  children: React.ReactNode;

  /** MenuItem 컴포넌트 영역에 padding이 적용됩니다. */
  padding?: CoSpacing | number;

  /** label 영억 왼쪽에 아이콘이 적용됩니다. */
  icon?: React.ReactNode;

  /** MenuItem 컴포넌트의 색상을 정합니다. */
  color?: CoPalette | CoColor | string;

  /** MenuItem 컴포넌트 우측 영역에 요소를 넣습니다. */
  rightSection?: React.ReactNode;

  /** disabled 상태가 됩니다. */
  disabled?: boolean;

  /**
   * hover 상태가 됩니다.
   * 이 속성은 Menu 컴포넌트에 의해 제어됩니다.
   */
  hovered?: boolean;

  /**
   * MenuItem 컴포넌트가 hover되면 실행됩니다.
   * 이 속성은 Menu 컴포넌트에 의해 제어됩니다.
   */
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

MenuItem.displayName = '@co-design/primitive/MenuItem';
