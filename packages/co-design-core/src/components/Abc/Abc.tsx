import React, { forwardRef } from 'react';
import { CoComponentProps, CoZIndex, useCoTheme } from '@co-design/styles';
import { View } from '../View';
import { anatomy, parts } from './Abc.anatomy';

export interface AbcProps extends CoComponentProps, React.ComponentPropsWithoutRef<'div'> {}

export const Abc = forwardRef<HTMLDivElement, AbcProps>(({ className, co, ...props }: AbcProps, ref) => {
  return (
    <View co={[co]} ref={ref} {...props}>
      Test
    </View>
  );
});

Abc.displayName = '@co-design/core/Abc';
