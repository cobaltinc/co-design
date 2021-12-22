import { CoTheme, useCoTheme } from '@co-design/styles';
import { Interpolation, PropsOf } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { tags } from './utils';

export interface StyledComponent<ComponentProps extends {}, SpecificComponentProps extends {} = {}, JSXProps extends {} = {}>
  extends React.FC<ComponentProps & SpecificComponentProps & JSXProps> {}

export interface CreateStyledComponent<ComponentProps extends {}, SpecificComponentProps extends {} = {}, JSXProps extends {} = {}> {
  <AdditionalProps extends {} = {}>(
    styles: Interpolation<{ props: ComponentProps & SpecificComponentProps & AdditionalProps; theme: CoTheme }>,
  ): StyledComponent<ComponentProps & AdditionalProps, SpecificComponentProps, JSXProps>;

  (
    template: TemplateStringsArray,
    ...styles: Array<Interpolation<{ props: ComponentProps & SpecificComponentProps; theme: CoTheme }>>
  ): StyledComponent<ComponentProps, SpecificComponentProps, JSXProps>;

  <AdditionalProps extends {}>(
    template: TemplateStringsArray,
    ...styles: Array<Interpolation<{ props: ComponentProps & SpecificComponentProps & AdditionalProps; theme: CoTheme }>>
  ): StyledComponent<ComponentProps & AdditionalProps, SpecificComponentProps, JSXProps>;
}

interface BaseCreateStyled {
  <C extends React.ComponentType<React.ComponentProps<C>>, ForwardedProps extends keyof React.ComponentProps<C> = keyof React.ComponentProps<C>>(
    component: C,
  ): CreateStyledComponent<Pick<PropsOf<C>, ForwardedProps>>;

  <C extends React.ComponentType<React.ComponentProps<C>>>(component: C): CreateStyledComponent<PropsOf<C>>;

  <Tag extends keyof JSX.IntrinsicElements, ForwardedProps extends keyof JSX.IntrinsicElements[Tag] = keyof JSX.IntrinsicElements[Tag]>(
    tag: Tag,
  ): CreateStyledComponent<{ theme?: CoTheme }, Pick<JSX.IntrinsicElements[Tag], ForwardedProps>>;

  <Tag extends keyof JSX.IntrinsicElements>(tag: Tag): CreateStyledComponent<{ theme?: CoTheme }, JSX.IntrinsicElements[Tag]>;
}

export type StyledTags = {
  [Tag in keyof JSX.IntrinsicElements]: CreateStyledComponent<
    {
      theme?: CoTheme;
    },
    JSX.IntrinsicElements[Tag]
  >;
};

export interface CreateStyled extends BaseCreateStyled, StyledTags {}

const newStyled: BaseCreateStyled = (component) => {
  return (styles, ...fns) => {
    return (props) => {
      const theme = useCoTheme();
      const css = Array.isArray(styles)
        ? styles.reduce((prev, cur, i) => prev + cur + ((fns[i] && fns[i]({ props, theme })) || ''), '')
        : typeof styles === 'function'
        ? styles({ props, theme })
        : styles;

      const Component = styled(component)(css);
      return <Component {...props} />;
    };
  };
};

tags.forEach((tagName) => {
  newStyled[tagName] = newStyled(tagName);
});

export default newStyled as CreateStyled;
