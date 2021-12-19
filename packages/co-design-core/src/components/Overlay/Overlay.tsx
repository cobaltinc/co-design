import React, { forwardRef } from 'react';
import { PolymorphicComponentProps, PolymorphicRef, DefaultProps, CoOpacity, CoZIndex, CoRadius } from '@co-design/styles';
import { View } from '../View';
import { getFieldValue } from '../../utils';

interface _OverlayProps extends DefaultProps {
  opacity?: CoOpacity | number;
  color?: string;
  zIndex?: CoZIndex | number;
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
