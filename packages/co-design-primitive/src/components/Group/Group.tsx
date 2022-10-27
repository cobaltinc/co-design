import React, { Children, forwardRef } from 'react';
import { ClassNames, CoComponentProps, CoSpacing } from '@co-design/styles';
import { View } from '../View';
import useStyles, { GroupPosition } from './Group.style';

export type GroupStylesNames = ClassNames<typeof useStyles>;

export interface GroupProps extends CoComponentProps<GroupStylesNames>, React.ComponentPropsWithoutRef<'div'> {
  /** Group 컴포넌트 내 요소들의 방향을 정합니다. */
  direction?: 'row' | 'column';

  /** Group 컴포넌트 내 요소들의 위치를 정합니다. */
  position?: GroupPosition;

  /** Group 컴포넌트 내 요소들의 세로 정렬을 정합니다. */
  align?: React.CSSProperties['alignItems'];

  /** Group 컴포넌트의 display 속성이 inline으로 변경됩니다. */
  inline?: boolean;

  /**
   * Group 컴포넌트 내 요소들이 nowrap 속성으로 변경됩니다.
   * nowrap 속성이 적용되면 화면이 좁아져도 줄바꿈이 되지 않습니다.
   */
  noWrap?: boolean;

  /** Group 컴포넌트 내 요소들을 상위 요소의 너비에 맞춰 늘립니다. */
  grow?: boolean;

  /** Group 컴포넌트 내 요소들의 간격을 정합니다. */
  spacing?: CoSpacing | number;
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
      spacing = 'medium',
      direction = 'row',
      className,
      co,
      overrideStyles,
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
      { overrideStyles, name: 'Group' },
    );

    const items = (Children.toArray(children) as React.ReactElement[]).map((child) =>
      React.cloneElement(child, {
        className: cx(classes.child, child.props.className),
      }),
    );

    return (
      <View ref={ref} className={cx(classes.root, className)} co={co} {...props}>
        {items}
      </View>
    );
  },
);

Group.displayName = '@co-design/primitive/Group';
