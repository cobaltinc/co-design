import React, { useEffect, useState, forwardRef } from 'react';
import { CoComponentProps, CoSize, PolymorphicComponentProps, PolymorphicRef, CoPalette, useCoTheme, ClassNames } from '@co-design/styles';
import { View } from '../View';
import { AvatarPlaceholderIcon } from './AvatarPlaceholderIcon';
import useStyles, { AvatarShape } from './Avatar.style';

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
    const _color = color || theme.primaryColor;
    const { classes, cx } = useStyles({ color: _color, shape, size }, { overrideStyles, name: 'Avatar' });
    const [error, setError] = useState(!src);

    useEffect(() => {
      !src ? setError(true) : setError(false);
    }, [src]);

    return (
      <View<any> component={component || 'div'} ref={ref} className={cx(classes.root, className)} co={co} {...props}>
        {error ? (
          <div className={classes.placeholder} title={alt}>
            {children ? children : <AvatarPlaceholderIcon className={classes.placeholderIcon} />}
          </div>
        ) : (
          <img className={classes.image} src={src} alt={alt} onError={() => setError(true)} />
        )}
      </View>
    );
  },
);

Avatar.displayName = '@co-deisgn/core/Avatar';
