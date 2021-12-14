import React, { forwardRef } from 'react';
import { CoBreakpoints, CoSpacing, DefaultProps } from '@co/styles';
import useStyles from './Center.style';

export interface CenterProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  inline?: boolean;
}

export const Center = forwardRef<HTMLDivElement, CenterProps>(({ inline, className, styles, classNames, co, ...props }, ref) => {
  const { classes, cx } = useStyles({ inline }, { styles, classNames, co, name: 'Center' });

  return <div ref={ref} className={cx(classes.root, className)} {...props} />;
});

Center.displayName = '@co/core/Center';
