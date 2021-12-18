import React, { forwardRef } from 'react';
import { PolymorphicComponentProps, PolymorphicRef, CoTheme, CSSObject, CoColorPalette, useCoTheme } from '@co-design/styles';
import { Text, SharedTextProps } from '../Text/Text';
import { Mark } from '../Mark/Mark';
import { highlighter } from './highlighter';

interface _HighlightProps extends SharedTextProps {
  children: string;
  highlight: string | string[];
  highlightColor?: CoColorPalette;
  highlightStyles?: CSSObject | ((theme: CoTheme) => CSSObject);
}

export type HighlightProps<C extends React.ElementType> = PolymorphicComponentProps<C, _HighlightProps>;

type HighlightComponent = <C extends React.ElementType = 'div'>(props: HighlightProps<C>) => React.ReactElement;

export const Highlight: HighlightComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'div'>(
    { children, highlight, highlightColor, component, highlightStyles, ...others }: HighlightProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const theme = useCoTheme();
    const highlightChunks = highlighter(children, highlight);

    return (
      <Text component={component as any} ref={ref} {...others}>
        {highlightChunks.map(({ chunk, highlighted }, i) =>
          highlighted ? (
            <Mark key={i} color={highlightColor} co={highlightStyles}>
              {chunk}
            </Mark>
          ) : (
            <span key={i}>{chunk}</span>
          ),
        )}
      </Text>
    );
  },
);

Highlight.displayName = '@co-design/core/Highlight';
