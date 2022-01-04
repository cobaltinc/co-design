import React from 'react';
import { ClassNames, CoComponentProps, CoSpacing } from '@co-design/styles';
import { View } from '../View';
import useStyles from './Col.style';

export type ColStylesNames = ClassNames<typeof useStyles>;

export interface ColProps extends CoComponentProps<ColStylesNames>, React.ComponentPropsWithoutRef<'div'> {
  span: number;
  columns?: number;
  offset?: number;
  offsetXs?: number;
  offsetSm?: number;
  offsetMd?: number;
  offsetLg?: number;
  offsetXl?: number;
  spacing?: CoSpacing | number;
  grow?: boolean;
  xsmall?: number;
  small?: number;
  medium?: number;
  large?: number;
  xlarge?: number;
}

export function isValidSpan(span: number) {
  return typeof span === 'number' && span > 0 && span % 1 === 0;
}

export const getColumnWidth = (colSpan: number, columns: number) => `${100 / (columns / colSpan)}%`;

export function Col({
  children,
  span,
  spacing,
  offset = 0,
  offsetXs = 0,
  offsetSm = 0,
  offsetMd = 0,
  offsetLg = 0,
  offsetXl = 0,
  grow,
  xsmall,
  small,
  medium,
  large,
  xlarge,
  columns,
  className,
  co,
  overrideStyles,
  ...props
}: ColProps) {
  const { classes, cx } = useStyles(
    {
      spacing,
      offset,
      offsetXs,
      offsetSm,
      offsetMd,
      offsetLg,
      offsetXl,
      xsmall,
      small,
      medium,
      large,
      xlarge,
      grow,
      columns,
      span,
    },
    { overrideStyles, name: 'Col' },
  );

  if (!isValidSpan(span) || span > columns) {
    return null;
  }

  return (
    <View className={cx(classes.root, className)} co={co} {...props}>
      {children}
    </View>
  );
}

Col.displayName = '@co-design/core/Col';
