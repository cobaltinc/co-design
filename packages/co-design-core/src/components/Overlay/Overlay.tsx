import React, { forwardRef } from 'react';
import { PolymorphicComponentProps, PolymorphicRef, CoComponentProps, CoOpacity, CoZIndex, CoRadius } from '@co-design/styles';
import { View } from '../View';
import { getFieldValue } from '../../utils';

interface _OverlayProps extends Omit<CoComponentProps, 'overrideStyles'> {
  /** Overlay의 투명도를 설정합니다. */
  opacity?: CoOpacity | number;

  /** Overlay 색상을 정합니다. */
  color?: string;

  /** Overlay의 z-index를 설정합니다. */
  zIndex?: CoZIndex | number;

  /** Overlay의 radius를 설정합니다. */
  radius?: CoRadius | number;
}

export type OverlayProps<C extends React.ElementType> = PolymorphicComponentProps<C, _OverlayProps>;

type OverlayComponent = <C extends React.ElementType = 'div'>(props: OverlayProps<C>) => React.ReactElement;

export const Overlay: OverlayComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'div'>(
    { opacity = 'opacity5', color = '#000', gradient, zIndex = 'modal', component, radius = 0, co, ...props }: OverlayProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const background = gradient ? { backgroundImage: gradient } : { backgroundColor: color };

    return (
      <View<any>
        component={component || 'div'}
        ref={ref}
        co={[
          (theme) => ({
            ...background,
            opacity: getFieldValue(opacity, theme.opacity),
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            borderRadius: getFieldValue(radius, theme.radius),
            zIndex: getFieldValue(zIndex, theme.zIndex),
          }),
          co,
        ]}
        {...props}
      />
    );
  },
);

Overlay.displayName = '@co-design/core/Overlay';
