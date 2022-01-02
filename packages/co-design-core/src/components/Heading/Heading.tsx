import React, { forwardRef } from 'react';
import { CoColor, CoPalette, CoComponentProps, ClassNames } from '@co-design/styles';
import useStyles from './Heading.style';
import { warning } from '../../utils';

export type HeadingStylesNames = ClassNames<typeof useStyles>;

export interface HeadingProps extends CoComponentProps<HeadingStylesNames>, React.ComponentPropsWithoutRef<'h1'> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  inline?: boolean;
  strong?: boolean | React.CSSProperties['fontWeight'];
  underline?: boolean;
  delete?: boolean;
  color?: CoPalette | CoColor | string;
  align?: 'left' | 'center' | 'right';
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, level = 1, inline = false, strong = false, underline = false, color, align, style, className, co, overrideStyles, ...props }, ref) => {
    const { classes, cx } = useStyles({ inline, color }, { co, overrideStyles, name: 'Heading' });

    let Element = `h${level}` as 'h1';
    if (level < 1 || level > 7) {
      warning('Heading', 'Heading only accept `1 | 2 | 3 | 4 | 5 | 6` as `level` value.');
      Element = 'h1';
    }

    return (
      <Element
        ref={ref}
        className={cx(classes.root, classes[`h${level}`], className)}
        style={{
          fontWeight: typeof strong === 'boolean' ? (strong ? 'bold' : 'normal') : strong,
          textAlign: align,
          textDecoration: underline ? 'underline' : undefined,
          ...style,
        }}
        {...props}
      >
        {children}
      </Element>
    );
  },
);

Heading.displayName = '@co-design/core/Heading';
