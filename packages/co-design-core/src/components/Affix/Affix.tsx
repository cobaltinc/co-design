import React, { forwardRef } from 'react';
import { CoComponentProps, CoZIndex, useCoTheme } from '@co-design/styles';
import { View } from '../View';
import { Portal } from '../Portal/Portal';
import { getFieldValue } from '../../utils';

export interface AffixProps extends CoComponentProps, React.ComponentPropsWithoutRef<'div'> {
  /** Affix 컴포넌트가 마운트될 요소를 정합니다. */
  target?: HTMLDivElement;

  /** Affix 컴포넌트의 z-index를 정합니다. */
  zIndex?: CoZIndex | number;

  /** Affix 컴포넌트의 위치를 정합니다. */
  position?: {
    top?: string | number;
    left?: string | number;
    bottom?: string | number;
    right?: string | number;
  };
}

export const Affix = forwardRef<HTMLDivElement, AffixProps>(
  ({ target, zIndex = 'sticky', position = { bottom: 20, right: 20 }, className, co, ...props }: AffixProps, ref) => {
    const theme = useCoTheme();
    return (
      <Portal zIndex={getFieldValue(zIndex, theme.zIndex)} target={target}>
        <View co={[{ position: 'fixed', ...position }, co]} ref={ref} {...props} />
      </Portal>
    );
  },
);

Affix.displayName = '@co-design/core/Affix';
