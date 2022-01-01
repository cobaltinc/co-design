import React, { forwardRef } from 'react';
import { CoComponentProps, ClassNames } from '@co-design/styles';
import useStyles from './Center.style';

export type CenterStylesNames = ClassNames<typeof useStyles>;

export interface CenterProps extends CoComponentProps<CenterStylesNames>, React.ComponentPropsWithoutRef<'div'> {
  inline?: boolean;
}

export const Center = forwardRef<HTMLDivElement, CenterProps>(({ inline, className, co, overrideStyles, ...props }, ref) => {
  const { classes, cx } = useStyles({ inline }, { co, overrideStyles, name: 'Center' });

  return <div ref={ref} className={cx(classes.root, className)} {...props} />;
});

Center.displayName = '@co-design/core/Center';
