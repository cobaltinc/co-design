import React from 'react';
import { CoComponentProps } from '@co-design/styles';
import { Text } from '../Text';

export interface MenuLabelProps extends CoComponentProps, React.ComponentPropsWithoutRef<typeof Text> {
  /** Label content */
  children: React.ReactNode;
}

export interface MenuLabelType {
  type: any;
  props: MenuLabelProps;
  ref?: React.RefObject<HTMLButtonElement> | ((instance: HTMLButtonElement) => void);
}

export function MenuLabel(
  // Props should be kept for ts integration
  props: MenuLabelProps,
) {
  return null;
}

MenuLabel.displayName = '@co-design/core/MenuLabel';
