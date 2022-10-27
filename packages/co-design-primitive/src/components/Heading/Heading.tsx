import React, { forwardRef } from 'react';
import { CoColor, CoPalette, CoComponentProps, ClassNames } from '@co-design/styles';
import useStyles from './Heading.style';
import { warning } from '../../utils';
import { View } from '../View';

export type HeadingStylesNames = ClassNames<typeof useStyles>;

export interface HeadingProps extends CoComponentProps<HeadingStylesNames>, React.ComponentPropsWithoutRef<'h1'> {
  /** Heading 컴포넌트의 크기를 정합니다. */
  level?: 1 | 2 | 3 | 4 | 5 | 6;

  /** Heading 컴포넌트의 display 속성이 inline으로 변경됩니다. */
  inline?: boolean;

  /**
   * true일 경우 텍스트에 bold가 적용됩니다.
   * fontWeight 속성을 직접 지정하는 것도 가능합니다.
   */
  strong?: boolean | React.CSSProperties['fontWeight'];

  /** 텍스트에 밑줄이 추가됩니다. */
  underline?: boolean;

  /** 텍스트에 취소선이 추가됩니다. */
  delete?: boolean;

  /** 텍스트 색상을 정합니다. */
  color?: CoPalette | CoColor | string;

  /** 텍스트 정렬을 정합니다. */
  align?: 'left' | 'center' | 'right';
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, level = 1, inline = false, strong = false, underline = false, color, align, style, className, co, overrideStyles, ...props }, ref) => {
    const { classes, cx } = useStyles({ inline, color }, { overrideStyles, name: 'Heading' });

    let Element = `h${level}` as 'h1';
    if (level < 1 || level > 7) {
      warning('Heading', 'Heading only accept `1 | 2 | 3 | 4 | 5 | 6` as `level` value.');
      Element = 'h1';
    }

    return (
      <View<typeof Element>
        ref={ref}
        className={cx(classes.root, classes[`h${level}`], className)}
        co={co}
        style={{
          fontWeight: typeof strong === 'boolean' ? (strong ? 'bold' : 'normal') : strong,
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

Heading.displayName = '@co-design/primitive/Heading';
