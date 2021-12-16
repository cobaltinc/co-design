import React, { forwardRef } from 'react';
import { DefaultProps, PolymorphicComponentProps, PolymorphicRef, useCo } from '@co-design/styles';

export type ViewProps<C extends React.ElementType> = PolymorphicComponentProps<C, DefaultProps>;

type ViewComponent = <C extends React.ElementType = 'div'>(props: ViewProps<C>) => React.ReactElement;

export const View: ViewComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'div'>({ component, className, style, co, ...props }: ViewProps<C>, ref: PolymorphicRef<C>) => {
    const { coClassName } = useCo({ co, className });
    // const { mergedStyles, rest } = useExtractedMargins({ others, style });

    // TODO: margin, shadow, padding, position, display, backgroundColor, width, height, border
    // https://react-spectrum.adobe.com/react-spectrum/View.html

    const Element = component || 'div';
    return <Element ref={ref} className={coClassName} style={style} {...props} />;
  },
);

View.displayName = '@co-design/core/View';
