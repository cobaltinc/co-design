import React from 'react';
import { CoBreakpoints, CSSObject } from '@co-design/styles';
import useStyles from './MediaQuery.style';

export interface MediaQueryProps {
  /** MediaQuery 컴포넌트는 오직 하나의 자식만 가질 수 있습니다. */
  children: React.ReactElement;

  /** 속성 값보다 작은 경우 자식 요소에 className과 style이 적용됩니다. */
  smallerThan?: CoBreakpoints | number;

  /** 속성 값보다 큰 경우 자식 요소에 className과 style이 적용됩니다. */
  largerThan?: CoBreakpoints | number;

  /** MediaQuery를 raw string으로 적용합니다. */
  query?: string;

  /** 자식 요소에 적용되는 className 입니다. */
  className?: string;

  /** 자식 요소에 적용되는 style 입니다. */
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
