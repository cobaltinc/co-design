import React, { forwardRef } from 'react';
import { ClassNames, CoComponentProps } from '@co-design/styles';
import { View } from '../View';
import useStyles from './Kbd.style';

export type KbdStylesNames = ClassNames<typeof useStyles>;

export interface KbdProps extends CoComponentProps<KbdStylesNames>, React.ComponentPropsWithoutRef<'kbd'> {
  children: React.ReactNode;
}

export const Kbd = forwardRef<HTMLElement, KbdProps>(({ children, className, co, overrideStyles, ...props }: KbdProps, ref) => {
  const { classes, cx } = useStyles(null, { co, overrideStyles, name: 'Kbd' });

  return (
    <View component="kbd" className={cx(classes.root, className)} ref={ref} {...props}>
      {children}
    </View>
  );
});

Kbd.displayName = '@co-design/core/Kbd';
