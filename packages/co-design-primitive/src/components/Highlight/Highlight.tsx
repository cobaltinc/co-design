import React, { forwardRef } from 'react';
import { PolymorphicComponentProps, PolymorphicRef, CoPalette, Co } from '@co-design/styles';
import { Text, SharedTextProps } from '../Text/Text';
import { Mark } from '../Mark/Mark';
import { highlighter } from './highlighter';

interface _HighlightProps extends SharedTextProps {
  /** 텍스트를 넣습니다. */
  children: string;

  /** 강조 표시할 문자열을 정합니다. */
  highlight: string | string[];

  /** 강조 표시된 텍스트의 색상을 정합니다. */
  highlightColor?: CoPalette;

  /** 강조 표시된 텍스트의 스타일을 정합니다. */
  highlightStyles?: Co;
}

export type HighlightProps<C extends React.ElementType> = PolymorphicComponentProps<C, _HighlightProps>;

type HighlightComponent = <C extends React.ElementType = 'div'>(props: HighlightProps<C>) => React.ReactElement;

export const Highlight: HighlightComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'div'>(
    { children, highlight, highlightColor, component, highlightStyles, ...props }: HighlightProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const highlightChunks = highlighter(children, highlight);

    return (
      <Text component={component as any} ref={ref} {...props}>
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

Highlight.displayName = '@co-design/primitive/Highlight';
