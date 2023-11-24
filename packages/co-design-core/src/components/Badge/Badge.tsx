import { CoComponentProps, View } from '@co-design/core';
import { ClassNames } from '@co-design/styles';
import { ComponentPropsWithoutRef } from 'react';

import useStyles from './Badge.style';
import { Typography } from '../Typography';

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
    badge = <Typography component="sup" className={cx(className, classes.badge, classes.dot)} />;
  } else if (count || showZero) {
    if (count == 0) {
      badge = showZero ? (
        <Typography component="sup" variant="caption" color="text-light" className={cx(className, classes.badge)}>
          0
        </Typography>
      ) : null;
    } else {
      badge = (
        <Typography component="sup" variant="caption" color="text-light" className={cx(className, classes.badge)}>
          {maxCount && count > maxCount ? `${maxCount}+` : count}
        </Typography>
      );
    }
  } else {
    badge = (
      <Typography component="sup" variant="caption" color="text-light" className={cx(className, classes.badge)}>
        {children}
      </Typography>
    );
  }

  return (
    <View component="span" className={classes.container} style={style} co={co} {...props}>
      {badge}
    </View>
  );
};

export default Badge;
