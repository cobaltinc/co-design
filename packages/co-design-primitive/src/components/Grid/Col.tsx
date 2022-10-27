import React from 'react';
import { ClassNames, CoComponentProps, CoSpacing } from '@co-design/styles';
import { View } from '../View';
import useStyles from './Col.style';

export type ColStylesNames = ClassNames<typeof useStyles>;

export interface ColProps extends CoComponentProps<ColStylesNames>, React.ComponentPropsWithoutRef<'div'> {
  /** Col 컴포넌트가 차지하는 영역을 정합니다. */
  span: number;

  /** breakpoint가 xsmall 이하일 때 Col 컴포넌트가 생략하는 영역을 정합니다. */
  xsmall?: number;

  /** breakpoint가 small 이하일 때 Col 컴포넌트가 생략하는 영역을 정합니다. */
  small?: number;

  /** breakpoint가 medium 이하일 때 Col 컴포넌트가 생략하는 영역을 정합니다. */
  medium?: number;

  /** breakpoint가 large 이하일 때 Col 컴포넌트가 생략하는 영역을 정합니다. */
  large?: number;

  /** breakpoint가 xlarge 이하일 때 Col 컴포넌트가 생략하는 영역을 정합니다. */
  xlarge?: number;

  /** Col 컴포넌트가 생략하는 영역을 정합니다. */
  offset?: number;

  /** breakpoint가 xsmall 이하일 때 Col 컴포넌트가 생략하는 영역을 정합니다. */
  offsetXs?: number;

  /** breakpoint가 small 이하일 때 Col 컴포넌트가 생략하는 영역을 정합니다. */
  offsetSm?: number;

  /** breakpoint가 medium 이하일 때 Col 컴포넌트가 생략하는 영역을 정합니다. */
  offsetMd?: number;

  /** breakpoint가 large 이하일 때 Col 컴포넌트가 생략하는 영역을 정합니다. */
  offsetLg?: number;

  /** breakpoint가 xlarge 이하일 때 Col 컴포넌트가 생략하는 영역을 정합니다. */
  offsetXl?: number;

  /**
   * Col 컴포넌트 좌우 간격을 정합니다.
   * 이 속성은 Grid 컴포넌트에 의해 제어됩니다.
   */
  spacing?: CoSpacing | number;

  /**
   * 상위 요소 너비에 맞춰 Col 컴포넌트가 늘어납니다.
   * 이 속성은 Grid 컴포넌트에 의해 제어됩니다.
   */
  grow?: boolean;

  /**
   * Col 컴포넌트가 사용되는 컬럼 수 입니다.
   * 이 속성은 Grid 컴포넌트에 의해 제어됩니다.
   */
  columns?: number;
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

Col.displayName = '@co-design/primitive/Col';
