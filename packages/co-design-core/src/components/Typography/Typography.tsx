import React, { forwardRef } from 'react';
import { CoComponentProps, PolymorphicComponentProps, PolymorphicRef, CoTypography, ClassNames, CoColor } from '@co-design/styles';
import { View } from '../View';
import useStyles from './Typography.style';

export type TypographyStylesNames = ClassNames<typeof useStyles>;

export interface SharedTypographyProps extends CoComponentProps<TypographyStylesNames> {
  /** 폰트 크기를 정합니다. */
  variant?: CoTypography;

  /** 폰트 색상을 정합니다. */
  color?: CoColor;

  /**
   * true일 경우 폰트에 bold가 적용됩니다.
   * 혹은ㄴ fontWeight 값을 직접 지정할 수 있습니다.
   */
  strong?: boolean | React.CSSProperties['fontWeight'];

  /** 텍스트에 underline이 적용됩니다. */
  underline?: boolean;

  /** 영문일 경우 transform 속성을 정할 수 있습니다. */
  transform?: 'capitalize' | 'uppercase' | 'lowercase';

  /**
   * Typography 컴포넌트에서 문자열 정렬을 합니다.
   * block 상태일 경우만 적용됩니다.
   */
  align?: 'left' | 'center' | 'right';

  /**
   * 여러 줄 제한이 생깁니다.
   * 예를 들어, 해당 속성이 3일 경우 3줄 이상 문자열이 입력되면 ...으로 잘립니다.
   */
  lineClamp?: number;

  /** Typography 컴포넌트의 display 속성이 block으로 변경됩니다. */
  block?: boolean;

  /** 상위 요소의 폰트 관련 속성을 적용합니다. */
  inherit?: boolean;

  /** 텍스트의 vertical trim을 비활성화합니다. */
  disableTextboxTrim?: boolean;
}

export type TypographyProps<C extends React.ElementType> = PolymorphicComponentProps<C, SharedTypographyProps>;

type TypographyComponent = <C extends React.ElementType = 'span'>(props: TypographyProps<C>) => React.ReactNode;

export const Typography: TypographyComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'span'>(
    {
      children,
      component,
      variant = 'body_02',
      color = 'text_default',
      strong,
      underline,
      transform,
      align,
      lineClamp,
      block = false,
      inherit = false,
      disableTextboxTrim = false,
      className,
      style,
      co,
      overrideStyles,
      ...props
    }: TypographyProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const { classes, cx } = useStyles(
      {
        color,
        variant,
        lineClamp,
        block,
        inherit,
        disableTextboxTrim,
      },
      { overrideStyles, name: 'Typography' },
    );

    return (
      <View<any>
        ref={ref}
        component={component || 'span'}
        className={cx(classes.root, className)}
        co={co}
        style={{
          fontWeight: inherit ? 'inherit' : typeof strong === 'boolean' ? (strong ? 'bold' : undefined) : strong,
          textTransform: transform,
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

Typography.displayName = '@co-design/core/Typography';
