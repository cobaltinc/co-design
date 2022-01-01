import React, { forwardRef } from 'react';
import { CoSize, CoSpacing, CoComponentProps, ClassNames } from '@co-design/styles';
import { Avatar } from './Avatar';
import { AvatarShape } from './Avatar.style';
import { View } from '../View';
import { Center } from '../Center';
import useStyles from './AvatarGroup.style';

export type AvatarGroupStylesNames = ClassNames<typeof useStyles>;

export interface AvatarGroupProps extends CoComponentProps<AvatarGroupStylesNames>, React.ComponentPropsWithoutRef<'div'> {
  /** <Avatar /> components only */
  children?: React.ReactNode;

  /** Child <Avatar /> components width and height */
  size?: CoSize | number;

  /** Child <Avatar /> radius */
  shape?: AvatarShape;

  /** Maximum amount of <Avatar /> components rendered, everything after limit is truncated */
  limit?: number;

  /** Spacing between avatars */
  spacing?: CoSpacing | number;

  /** Total number of child <Avatar />, overrides the truncated amount */
  total?: number;
}

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      children,
      size = 'medium',
      shape = 'circle',
      limit = 2,
      spacing = 'spacing4',
      total,
      className,
      co,
      overrideStyles,
      ...props
    }: AvatarGroupProps,
    ref,
  ) => {
    const { classes, cx } = useStyles({ spacing }, { co, overrideStyles, name: 'AvatarGroup' });

    const avatars = React.Children.toArray(children)
      .filter((child: React.ReactElement) => child.type === Avatar)
      .map((child: React.ReactElement, index) =>
        React.cloneElement(child, {
          size,
          shape,
          key: index,
          className: cx(classes.child, child.props.className),
          style: {
            ...child.props.style,
            zIndex: index + 1,
          },
        }),
      );

    const clampedMax = limit < 2 ? 2 : limit;
    const extraAvatars = avatars.length > clampedMax ? avatars.length - clampedMax : 0;
    const truncatedAvatars = total ? total - Math.min(avatars.length, clampedMax) : extraAvatars;

    return (
      <View className={cx(className, classes.root)} ref={ref} {...props}>
        {avatars.slice(0, avatars.length - extraAvatars)}
        {truncatedAvatars ? (
          <Avatar size={size} shape={shape} className={classes.child} style={{ zIndex: limit + 1 }}>
            <Center className={classes.truncated}>+{truncatedAvatars}</Center>
          </Avatar>
        ) : null}
      </View>
    );
  },
);

AvatarGroup.displayName = '@co-design/core/AvatarGroup';
