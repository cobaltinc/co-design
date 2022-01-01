import React, { forwardRef } from 'react';
import { CoColor, CoPalette, CoComponentProps, ClassNames } from '@co-design/styles';
import useStyles from './Heading.style';
import { warning } from '../../utils';

export type HeadingStylesNames = ClassNames<typeof useStyles>;

export interface HeadingProps extends CoComponentProps<HeadingStylesNames>, React.ComponentPropsWithoutRef<'h1'> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  inline?: boolean;
  strong?: boolean;
  underline?: boolean;
  delete?: boolean;
  color?: CoPalette | CoColor | string;
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    { children, level = 1, inline = false, strong = false, underline = false, delete: del = false, color, className, co, overrideStyles, ...props },
    ref,
  ) => {
    const { classes, cx } = useStyles({ inline, strong, underline, color }, { co, overrideStyles, name: 'Heading' });

    let Element = `h${level}` as 'h1';
    if (level < 1 || level > 7) {
      warning('Heading', 'Heading only accept `1 | 2 | 3 | 4 | 5 | 6` as `level` value.');
      Element = 'h1';
    }

    if (del) {
      children = <del>{children}</del>;
    }

    return (
      <Element ref={ref} className={cx(classes.root, classes[`h${level}`], className)} {...props}>
        {children}
      </Element>
    );
  },
);

Heading.displayName = '@co-design/core/Heading';
