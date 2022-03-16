import React, { forwardRef } from 'react';
import { CoComponentProps, PolymorphicComponentProps, PolymorphicRef, CoFontSizes, CoPalette, CoColor, ClassNames } from '@co-design/styles';
import { View } from '../View';
import useStyles from './Text.style';

export type TextStylesNames = ClassNames<typeof useStyles>;

export interface SharedTextProps extends CoComponentProps<TextStylesNames> {
  /** 폰트 크기를 정합니다. */
  size?: CoFontSizes | number;

  /** 폰트 색상을 정합니다. */
  color?: CoPalette | CoColor | string;

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
   * Text 컴포넌트에서 문자열 정렬을 합니다.
   * block 상태일 경우만 적용됩니다.
   */
  align?: 'left' | 'center' | 'right';

  /**
   * 여러 줄 제한이 생깁니다.
   * 예를 들어, 해당 속성이 3일 경우 3줄 이상 문자열이 입력되면 ...으로 잘립니다.
   */
  lineClamp?: number;

  /** Text 컴포넌트의 display 속성이 block으로 변경됩니다. */
  block?: boolean;

  /** 상위 요소의 폰트 관련 속성을 적용합니다. */
  inherit?: boolean;
}

export type TextProps<C extends React.ElementType> = PolymorphicComponentProps<C, SharedTextProps>;

type TextComponent = <C extends React.ElementType = 'span'>(props: TextProps<C>) => React.ReactElement;

export const Text: TextComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'span'>(
    {
      children,
      component,
      size = 'medium',
      color,
      strong,
      underline,
      transform,
      align,
      lineClamp,
      block = false,
      inherit = false,
      className,
      style,
      co,
      overrideStyles,
      ...props
    }: TextProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const { classes, cx } = useStyles(
      {
        color,
        size,
        lineClamp,
        block,
        inherit,
      },
      { overrideStyles, name: 'Text' },
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

Text.displayName = '@co-design/core/Text';
