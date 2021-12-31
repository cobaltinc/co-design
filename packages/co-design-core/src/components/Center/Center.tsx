import React, { forwardRef } from 'react';
import { CoBreakpoints, CoSpacing, CoComponentProps } from '@co-design/styles';
import useStyles from './Center.style';

export interface CenterProps extends CoComponentProps, React.ComponentPropsWithoutRef<'div'> {
  inline?: boolean;
}

export const Center = forwardRef<HTMLDivElement, CenterProps>(({ inline, className, co, ...props }, ref) => {
  const { classes, cx } = useStyles({ inline }, { co, name: 'Center' });

  return <div ref={ref} className={cx(classes.root, className)} {...props} />;
});

Center.displayName = '@co-design/core/Center';
