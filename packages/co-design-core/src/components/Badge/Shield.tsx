import { ClassNames, PolymorphicComponentProps, PolymorphicRef, CoComponentProps } from '@co-design/styles';
import React, { cloneElement, forwardRef } from 'react';

import { _BadgeProps } from './Badge';
import useStyles from './Shield.style';
import { Typography } from '../Typography';
import { View } from '../View';

type ShieldBadgeStylesNames = ClassNames<typeof useStyles>;

interface Props {
  text?: string;
  icon?: React.ReactElement;
  size?: number;
  iconSize?: number;
  color?: string;
}

export interface _ShieldBadgeProps
  extends Omit<_BadgeProps, 'overrideStyles'>,
    CoComponentProps<ShieldBadgeStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'span'>, 'title'> {
  title?: Props;
  message?: Props;
}

export type ShieldBadgeProps<C extends React.ElementType> = PolymorphicComponentProps<C, _ShieldBadgeProps>;

type ShieldBadgeComponent = <C extends React.ElementType = 'span'>(props: ShieldBadgeProps<C>) => React.ReactNode;

const ShieldBadge: ShieldBadgeComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'span'>(
    { title, message, component, className, co, overrideStyles, ...props }: ShieldBadgeProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const { cx, classes } = useStyles(null, {
      overrideStyles,
      name: 'ShieldBadge',
    });

    return (
      <View<any> ref={ref} component={component || 'span'} className={classes.wrapper} co={co} {...props}>
        {title ? (
          <div className={cx(classes.title, className)}>
            {title.icon ? cloneElement(title.icon, { size: title.iconSize, color: title.color }) : null}
            {title.text ? (
              <Typography variant="caption" color="text_light">
                {title.text}
              </Typography>
            ) : null}
          </div>
        ) : null}
        {message ? (
          <div className={cx(classes.message, className)}>
            {message.icon ? cloneElement(message.icon, { size: message.iconSize, color: message.color }) : null}
            {message.text ? (
              <Typography variant="caption" color="text_light">
                {message.text}
              </Typography>
            ) : null}
          </div>
        ) : null}
      </View>
    );
  },
);

ShieldBadge.displayName = '@co-design/core/ShieldBadge';

export default ShieldBadge;
