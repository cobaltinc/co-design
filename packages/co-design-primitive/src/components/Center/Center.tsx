import React, { forwardRef } from 'react';
import { CoComponentProps, ClassNames } from '@co-design/styles';
import useStyles from './Center.style';
import { View } from '../View';

export type CenterStylesNames = ClassNames<typeof useStyles>;

export interface CenterProps extends CoComponentProps<CenterStylesNames>, React.ComponentPropsWithoutRef<'div'> {
  /** display 속성이 block에서 inline으로 변경됩니다. */
  inline?: boolean;
}

export const Center = forwardRef<HTMLDivElement, CenterProps>(({ inline, className, co, overrideStyles, ...props }, ref) => {
  const { classes, cx } = useStyles({ inline }, { overrideStyles, name: 'Center' });

  return <View ref={ref} className={cx(classes.root, className)} co={co} {...props} />;
});

Center.displayName = '@co-design/primitive/Center';
