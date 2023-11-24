import { CoComponentProps, View } from '@co-design/core';
import { ClassNames } from '@co-design/styles';
import { ComponentPropsWithoutRef, ReactElement, cloneElement } from 'react';

import { BadgeBaseProps } from './Badge';
import useStyles from './Shield.style';
import { Typography } from '../Typography';

type ShieldBadgeStylesNames = ClassNames<typeof useStyles>;

interface Props {
  text?: string;
  icon?: ReactElement;
  size?: number;
  iconSize?: number;
  color?: string;
}

export interface ShieldBadgeProps extends BadgeBaseProps, CoComponentProps<ShieldBadgeStylesNames>, Omit<ComponentPropsWithoutRef<'span'>, 'title'> {
  title?: Props;
  message?: Props;
}

const ShieldBadge = ({ title, message, className, co, overrideStyles, ...props }: ShieldBadgeProps) => {
  const { cx, classes } = useStyles(null, {
    overrideStyles,
    name: 'ShieldBadge',
  });

  return (
    <View component="span" className={classes.wrapper} co={co} {...props}>
      {title ? (
        <div className={cx(classes.title, className)}>
          {title.icon ? cloneElement(title.icon, { size: title.iconSize, color: title.color }) : null}
          {title.text ? (
            <Typography variant="caption" color="text-light">
              {title.text}
            </Typography>
          ) : null}
        </div>
      ) : null}
      {message ? (
        <div className={cx(classes.message, className)}>
          {message.icon ? cloneElement(message.icon, { size: message.iconSize, color: message.color }) : null}
          {message.text ? (
            <Typography variant="caption" color="text-light">
              {message.text}
            </Typography>
          ) : null}
        </div>
      ) : null}
    </View>
  );
};

export default ShieldBadge;
