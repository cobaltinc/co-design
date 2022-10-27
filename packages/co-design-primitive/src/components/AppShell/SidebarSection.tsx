import React, { forwardRef } from 'react';
import { CoComponentProps, PolymorphicComponentProps, PolymorphicRef } from '@co-design/styles';
import { View } from '../View';

interface _SidebarSectionProps extends CoComponentProps {
  /** Section 내용을 넣습니다. */
  children: React.ReactNode;

  /** 가능한 모든 영역을 차지합니다. */
  grow?: boolean;
}

export type SidebarSectionProps<C extends React.ElementType> = PolymorphicComponentProps<C, _SidebarSectionProps>;

type SidebarSectionComponent = <C extends React.ElementType = 'div'>(props: SidebarSectionProps<C>) => React.ReactElement;

export const SidebarSection: SidebarSectionComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'div'>({ component, children, grow = false, co, ...props }: SidebarSectionProps<C>, ref: PolymorphicRef<C>) => (
    <View<any> component={component || 'div'} ref={ref} co={[{ flex: grow ? 1 : 0, boxSizing: 'border-box' }, co]} {...props}>
      {children}
    </View>
  ),
);

SidebarSection.displayName = '@co-design/primitive/SidebarSection';
