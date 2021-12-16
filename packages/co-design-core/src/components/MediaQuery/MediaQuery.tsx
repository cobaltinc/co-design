import React from 'react';
import { CoBreakpoints, CSSObject } from '@co-design/styles';
import useStyles from './MediaQuery.style';

export interface MediaQueryProps {
  children: React.ReactElement;
  smallerThan?: CoBreakpoints | number;
  largerThan?: CoBreakpoints | number;
  query?: string;
  className?: string;
  style?: CSSObject;
}

export function MediaQuery({ children, smallerThan, largerThan, query, className, style }: MediaQueryProps) {
  const { classes, cx } = useStyles({ smallerThan, largerThan, query, style }, { name: 'MediaQuery' });
  const child = React.Children.only(children) as React.ReactElement;
  return React.cloneElement(child, {
    className: cx(classes.media, child.props?.className, className),
  });
}

MediaQuery.displayName = '@co-design/core/MediaQuery';
