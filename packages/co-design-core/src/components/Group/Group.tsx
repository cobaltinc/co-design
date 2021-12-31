import React, { Children, forwardRef } from 'react';
import { CoComponentProps, CoSpacing } from '@co-design/styles';
import { View } from '../View';
import useStyles, { GroupPosition } from './Group.style';

export interface GroupProps extends CoComponentProps, React.ComponentPropsWithoutRef<'div'> {
  inline?: boolean;
  position?: GroupPosition;
  align?: React.CSSProperties['alignItems'];
  noWrap?: boolean;
  grow?: boolean;
  spacing?: CoSpacing | number;
  direction?: 'row' | 'column';
}

export const Group = forwardRef<HTMLDivElement, GroupProps>(
  (
    {
      children,
      inline = false,
      position = 'left',
      align,
      noWrap = false,
      grow = false,
      spacing = 'spacing2',
      direction = 'row',
      className,
      co,
      ...props
    }: GroupProps,
    ref,
  ) => {
    const count = Children.count(children);
    const { classes, cx } = useStyles(
      {
        inline,
        align,
        grow,
        noWrap,
        spacing,
        position,
        direction,
        count,
      },
      { co, name: 'Group' },
    );

    const items = (Children.toArray(children) as React.ReactElement[]).map((child) =>
      React.cloneElement(child, {
        className: cx(classes.child, child.props.className),
      }),
    );

    return (
      <View className={cx(classes.root, className)} ref={ref} {...props}>
        {items}
      </View>
    );
  },
);

Group.displayName = '@co-design/core/Group';
