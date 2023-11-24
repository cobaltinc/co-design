import { CoComponentProps, View } from '@co-design/core';
import { ClassNames } from '@co-design/styles';
import { ComponentPropsWithoutRef } from 'react';

import useStyles from './Badge.style';

export type BadgeStylesNames = ClassNames<typeof useStyles>;

export interface BadgeBaseProps {
  count?: number;
  showZero?: boolean;
  maxCount?: number;
  dot?: boolean;
  backgroundColor?: string;
  textColor?: string;
  size?: 'small' | 'medium' | 'large' | number;
}

export interface BadgeProps extends BadgeBaseProps, CoComponentProps<BadgeStylesNames>, ComponentPropsWithoutRef<'span'> {}

const Badge = ({
  children,
  count = 0,
  showZero = false,
  maxCount = 99,
  dot = false,
  size = 'medium',
  className = '',
  style,
  co,
  overrideStyles,
  ...props
}: BadgeProps) => {
  const contentLength = maxCount && count > maxCount ? String(maxCount).length : String(count).length;

  const { cx, classes } = useStyles(
    { size, contentLength },
    {
      overrideStyles,
      name: 'Badge',
    },
  );

  let badge = null;
  if (dot) {
    badge = <sup className={cx(className, classes.badge, classes.dot)} />;
  } else if (count || showZero) {
    if (count == 0) {
      badge = showZero ? <sup className={cx(className, classes.badge)}>0</sup> : null;
    } else {
      badge = <sup className={cx(className, classes.badge)}>{maxCount && count > maxCount ? `${maxCount}+` : count}</sup>;
    }
  } else {
    badge = <sup className={cx(className, classes.badge)}>{children}</sup>;
  }

  return (
    <View component="span" className={classes.container} style={style} co={co} {...props}>
      {badge}
    </View>
  );
};

export default Badge;
