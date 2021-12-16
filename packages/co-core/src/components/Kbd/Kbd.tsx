import React, { forwardRef } from 'react';
import { DefaultProps } from '@co/styles';
import { View } from '../View';
import useStyles from './Kbd.style';

export interface KbdProps extends DefaultProps, React.ComponentPropsWithoutRef<'kbd'> {
  children: React.ReactNode;
}

export const Kbd = forwardRef<HTMLElement, KbdProps>(({ children, className, co, ...props }: KbdProps, ref) => {
  const { classes, cx } = useStyles(null, { co, name: 'Kbd' });

  return (
    <View component="kbd" className={cx(classes.root, className)} ref={ref} {...props}>
      {children}
    </View>
  );
});

Kbd.displayName = '@mantine/core/Kbd';
