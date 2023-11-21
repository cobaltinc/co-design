import React, { forwardRef } from 'react';
import { CoComponentProps } from '@co-design/styles';
import { View } from '../View';
import useStyles from './Abc.style';

export interface AbcProps extends CoComponentProps, React.ComponentPropsWithoutRef<'div'> {}

export const Abc = forwardRef<HTMLDivElement, AbcProps>(({ className, co, ...props }: AbcProps, ref) => {
  const { classes, cx } = useStyles({ color: 'black', underlineOnHover: true });

  return (
    <View co={[co]} ref={ref} {...props} className={cx(classes.root)}>
      <View className={cx(classes.label)}>Test</View>
    </View>
  );
});

Abc.displayName = '@co-design/core/Abc';
