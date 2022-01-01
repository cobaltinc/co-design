import React, { forwardRef } from 'react';
import { CoTheme, CSSObject, CoComponentProps, PolymorphicComponentProps, PolymorphicRef, useCoTheme, useCss, Co } from '@co-design/styles';

interface _StyledComponentProps extends Omit<CoComponentProps, 'co'> {
  co?: Co;
}

type StyledComponentProps<C extends React.ElementType> = PolymorphicComponentProps<C, _StyledComponentProps>;

const extractCo = (co: Co, theme: CoTheme) => (typeof co === 'function' ? co(theme) : co);

export const StyledComponent = forwardRef(
  <C extends React.ElementType = 'div'>({ component, className, style, co, ...props }: StyledComponentProps<C>, ref: PolymorphicRef<C>) => {
    const { css, cx } = useCss();
    const theme = useCoTheme();

    const Element = component || 'div';
    return <Element ref={ref} className={cx(className, css(extractCo(co, theme)))} style={style} {...props} />;
  },
);
