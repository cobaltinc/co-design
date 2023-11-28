import React, { useEffect, useState, forwardRef } from 'react';
import { CoComponentProps, CoSize, PolymorphicComponentProps, PolymorphicRef, CoPalette, useCoTheme, ClassNames } from '@co-design/styles';
import { View } from '../View';
import { AvatarPlaceholderIcon } from './AvatarPlaceholderIcon';
import useStyles, { AvatarShape } from './Avatar.style';
import { Typography } from '../Typography';

export type AvatarStylesNames = ClassNames<typeof useStyles>;

interface _AvatarProps extends CoComponentProps<AvatarStylesNames> {
  /** Avatar 컴포넌트의 이미지 src를 정합니다. */
  src?: string;

  /** 이미지 설명을 추가합니다. */
  alt?: string;

  /** Avatar 컴포넌트의 크기를 정합니다. */
  size?: CoSize | number;

  /** Avatar 컴포넌트의 모양을 정합니다. */
  shape?: AvatarShape;

  /** Avatar 컴포넌트에 src가 없을 경우 기본 색상을 사용합니다. */
  color?: CoPalette;
}

export type AvatarProps<C extends React.ElementType> = PolymorphicComponentProps<C, _AvatarProps>;

type AvatarComponent = <C extends React.ElementType = 'div'>(props: AvatarProps<C>) => React.ReactNode;

export const Avatar: AvatarComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'div'>(
    { children, component, size = 'medium', src, alt, shape = 'circle', color, className, co, overrideStyles, ...props }: AvatarProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const theme = useCoTheme();
    const _color = color || theme.foundations.tokens.color.icon.icon_default;
    const { classes, cx } = useStyles({ color: _color, shape, size }, { overrideStyles, name: 'Avatar' });
    const [error, setError] = useState(!src);

    const sliceChildren =
      children?.length > 2
        ? children
            .split(' ') // 문자열의 공백을 기준으로 자름
            .slice(0, 2) // 최대 2개 까지만 허용
            .map((string) => string[0]) // 각 문자열의 첫 단어로 변경
            .join('')
        : children;

    useEffect(() => {
      !src && !children ? setError(true) : setError(false);
    }, [src]);

    return (
      <View<any> component={component || 'div'} ref={ref} className={cx(classes.root, className)} co={co} {...props}>
        {error ? (
          <div className={classes.placeholder} title={alt}>
            <AvatarPlaceholderIcon />
          </div>
        ) : children ? (
          <div className={classes.placeholder} title={alt}>
            {typeof children === 'string' ? (
              <Typography variant="heading_06" color="text_light">
                {sliceChildren}
              </Typography>
            ) : (
              children
            )}
          </div>
        ) : (
          <img className={classes.image} src={src} alt={alt} onError={() => setError(true)} />
        )}
      </View>
    );
  },
);

Avatar.displayName = '@co-deisgn/core/Avatar';
