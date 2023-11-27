import { CoComponentProps, View } from '@co-design/core';
import { ClassNames } from '@co-design/styles';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

import useStyles from './Badge.style';
import { Typography } from '../Typography';

export type BadgeStylesNames = ClassNames<typeof useStyles>;

export interface BadgeBaseProps {
  badgeContent?: ReactNode;
  placement?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  placeDistance?: number;
  placeDistanceX?: number;
  placeDistanceY?: number;
  maxCount?: number;
  size?: 'small' | 'medium' | 'large' | number;
}

export interface BadgeProps extends BadgeBaseProps, CoComponentProps<BadgeStylesNames>, ComponentPropsWithoutRef<'span'> {}

const Badge = ({
  children,
  badgeContent = 0,
  placement = 'top-right',
  placeDistance = 4,
  placeDistanceX,
  placeDistanceY,
  maxCount = 99,
  size = 'medium',
  className = '',
  style,
  co,
  overrideStyles,
  ...props
}: BadgeProps) => {
  const dot = !badgeContent;
  const contentLength =
    typeof badgeContent === 'number'
      ? maxCount && badgeContent > maxCount
        ? String(maxCount).length
        : String(badgeContent).length
      : typeof badgeContent === 'string'
      ? badgeContent.length
      : 1;

  const { cx, classes } = useStyles(
    { size, contentLength, dot, placement, placeDistance, placeDistanceX, placeDistanceY },
    {
      overrideStyles,
      name: 'Badge',
    },
  );

  let badge = null;
  if (badgeContent) {
    if (typeof badgeContent === 'number') {
      badge = (
        <Typography component="sup" variant="caption" color="text-light" className={cx(className, classes.badge)}>
          {maxCount && badgeContent > maxCount ? `${maxCount}+` : badgeContent}
        </Typography>
      );
    } else {
      badge = (
        <Typography component="sup" variant="caption" color="text-light" className={cx(className, classes.badge)}>
          {badgeContent}
        </Typography>
      );
    }
  } else {
    badge = <Typography component="sup" className={cx(className, classes.badge, classes.dot)} />;
  }

  return (
    <View component="span" className={classes.container} style={style} co={co} {...props}>
      {children}
      {badge}
    </View>
  );
};

export default Badge;
