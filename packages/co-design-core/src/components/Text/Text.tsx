import React, { forwardRef } from 'react';
import { DefaultProps, PolymorphicComponentProps, PolymorphicRef, CoFontSizes, CoPalette, CoColor } from '@co-design/styles';
import { View } from '../View';
import useStyles from './Text.style';

export interface SharedTextProps extends DefaultProps {
  size?: CoFontSizes | number;
  color?: CoPalette | CoColor | string;
  strong?: boolean | React.CSSProperties['fontWeight'];
  underline?: boolean;
  transform?: 'capitalize' | 'uppercase' | 'lowercase';
  align?: 'left' | 'center' | 'right';
  lineClamp?: number;
  block?: boolean;
  inherit?: boolean;
}

export type TextProps<C extends React.ElementType> = PolymorphicComponentProps<C, SharedTextProps>;

type TextComponent = <C extends React.ElementType = 'span'>(props: TextProps<C>) => React.ReactElement;

export const Text: TextComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'span'>(
    {
      children,
      component,
      size = 'medium',
      color,
      strong,
      underline,
      transform,
      align,
      lineClamp,
      block = false,
      inherit = false,
      className,
      style,
      co,
      ...props
    }: TextProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const { classes, cx } = useStyles(
      {
        color,
        size,
        lineClamp,
        block,
        inherit,
      },
      { co, name: 'Text' },
    );

    return (
      <View<any>
        ref={ref}
        component={component || 'span'}
        className={cx(classes.root, className)}
        style={{
          fontWeight: inherit ? 'inherit' : typeof strong === 'boolean' ? (strong ? 'bold' : undefined) : strong,
          textTransform: transform,
          textAlign: align,
          textDecoration: underline ? 'underline' : undefined,
          ...style,
        }}
        {...props}
      >
        {children}
      </View>
    );
  },
);

Text.displayName = '@co-design/core/Text';
