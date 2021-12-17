import React, { forwardRef } from 'react';
import { DefaultProps, CoZIndex, useCoTheme } from '@co-design/styles';
import { View } from '../View';
import { Portal } from '../Portal/Portal';
import { getFieldValue } from '../../utils';

export interface AffixProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  target?: HTMLDivElement;
  zIndex?: CoZIndex | number;
  position?: {
    top?: string | number;
    left?: string | number;
    bottom?: string | number;
    right?: string | number;
  };
}

export const Affix = forwardRef<HTMLDivElement, AffixProps>(
  ({ target, zIndex, position = { bottom: 20, right: 20 }, className, co, ...props }: AffixProps, ref) => {
    const theme = useCoTheme();
    const _zIndex = getFieldValue(zIndex, theme.zIndex);

    return (
      <Portal zIndex={_zIndex} target={target}>
        <View co={[{ position: 'fixed', ...position }, co]} ref={ref} {...props} />
      </Portal>
    );
  },
);

Affix.displayName = '@co-design/core/Affix';
