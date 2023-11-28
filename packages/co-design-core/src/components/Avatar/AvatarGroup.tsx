import React, { forwardRef } from 'react';
import { CoSize, CoSpacing, CoComponentProps, ClassNames } from '@co-design/styles';
import { Avatar } from './Avatar';
import { AvatarShape } from './Avatar.style';
import { View } from '../View';
import { Center } from '../Center';
import useStyles from './AvatarGroup.style';
import { Typography } from '../Typography';

export type AvatarGroupStylesNames = ClassNames<typeof useStyles>;

export interface AvatarGroupProps extends CoComponentProps<AvatarGroupStylesNames>, React.ComponentPropsWithoutRef<'div'> {
  /** Avatar 컴포넌트만 넣을 수 있습니다. */
  children?: React.ReactNode;

  /** 그룹에 추가된 Avatar 컴포넌트의 크기를 정합니다. */
  size?: CoSize | number;

  /** 그룹에 추가된 Avatar 컴포넌트의 모양을 정합니다. */
  shape?: AvatarShape;

  /**
   * 그룹에 추가할 수 있는 최대 Avatar 컴포넌트 수를 정합니다.
   * 지정된 크기를 넘는다면 나머지 Avatar는 잘립니다.
   */
  limit?: number;

  /** Avatar 컴포넌트 사이 간격을 정합니다. */
  spacing?: CoSpacing | number;

  /**
   * 그룹 내 포함된 Avatar 컴포넌트의 수를 정합니다.
   * 별도로 컴포넌트를 추가하지 않아도 limit와 상호작용 합니다.
   */
  total?: number;
}

export const AvatarGroup = forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    { children, size = 'medium', shape = 'circle', limit = 2, spacing = 8, total, className, co, overrideStyles, ...props }: AvatarGroupProps,
    ref,
  ) => {
    const { classes, cx } = useStyles({ spacing }, { overrideStyles, name: 'AvatarGroup' });

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
      <View ref={ref} className={cx(className, classes.root)} co={co} {...props}>
        {avatars.slice(0, avatars.length - extraAvatars)}
        {truncatedAvatars ? (
          <Avatar size={size} shape={shape} className={classes.child} style={{ zIndex: limit + 1 }}>
            <Center className={classes.truncated}>
              <Typography variant="heading_06" color="text_light">
                +{truncatedAvatars}
              </Typography>
            </Center>
          </Avatar>
        ) : null}
      </View>
    );
  },
);

AvatarGroup.displayName = '@co-design/core/AvatarGroup';
