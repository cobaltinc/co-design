import React, { forwardRef } from 'react';
import { CoTheme, CSSObject, CoComponentProps, PolymorphicComponentProps, PolymorphicRef, useCo, useCoTheme, useCss } from '@co-design/styles';

type Co = CSSObject | ((theme: CoTheme) => CSSObject);
type ViewCo = Co | Co[];

interface _ViewProps extends Omit<CoComponentProps, 'co'> {
  co?: ViewCo;
}

export type ViewProps<C extends React.ElementType> = PolymorphicComponentProps<C, _ViewProps>;

type ViewComponent = <C extends React.ElementType = 'div'>(props: ViewProps<C>) => React.ReactElement;

function extractCo(co: Co, theme: CoTheme) {
  return typeof co === 'function' ? co(theme) : co;
}

function useBoxCo(co: ViewCo, className: string) {
  const { css, cx } = useCss();
  const theme = useCoTheme();
  if (Array.isArray(co)) {
    return cx(
      className,
      co.map((partial) => css(extractCo(partial, theme))),
    );
  }
  return cx(className, css(extractCo(co, theme)));
}

export const View: ViewComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'div'>({ component, className, style, co, ...props }: ViewProps<C>, ref: PolymorphicRef<C>) => {
    // const { mergedStyles, rest } = useExtractedMargins({ others, style });

    // TODO: margin, shadow, padding, position, display, backgroundColor, width, height, border
    // https://react-spectrum.adobe.com/react-spectrum/View.html

    const Element = component || 'div';
    return <Element ref={ref} className={useBoxCo(co, className)} style={style} {...props} />;
  },
);

View.displayName = '@co-design/core/View';
