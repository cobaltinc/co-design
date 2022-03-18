import React, { Children, cloneElement, forwardRef } from 'react';
import { PolymorphicComponentProps, PolymorphicRef } from '@co-design/styles';
import { Paper, SharedPaperProps } from '../Paper/Paper';
import { CardSection } from './CardSection';
import useStyles from './Card.style';

interface _CardProps extends SharedPaperProps {
  /** Card 컴포넌트 내용입니다. */
  children: React.ReactNode;
}

export type CardProps<C extends React.ElementType> = PolymorphicComponentProps<C, _CardProps>;

type CardComponent = (<C extends React.ElementType = 'div'>(props: CardProps<C>) => React.ReactElement) & {
  displayName?: string;
  Section: typeof CardSection;
};

export const Card: CardComponent = forwardRef(
  <C extends React.ElementType = 'div'>(
    { component, className, padding = 'medium', radius, children, overrideStyles, ...props }: CardProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const { classes, cx } = useStyles(null, { name: 'Card', overrideStyles });
    const _children = Children.toArray(children);

    const content = _children.map((child, index) => {
      if (typeof child === 'object' && child && 'type' in child && child.type === CardSection) {
        return cloneElement(child, {
          padding,
          first: index === 0,
          last: index === _children.length - 1,
        });
      }

      return child;
    });

    return (
      <Paper className={cx(classes.root, className)} radius={radius} padding={padding} component={component as any} ref={ref} {...props}>
        {content}
      </Paper>
    );
  },
) as any;

Card.Section = CardSection;
Card.displayName = '@co-design/core/Card';
