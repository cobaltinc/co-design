import React, { useEffect, useState, forwardRef } from 'react';
import { CoComponentProps, CoSize, PolymorphicComponentProps, PolymorphicRef, CoPalette, useCoTheme, ClassNames } from '@co-design/styles';
import { View } from '../View';
import { AvatarPlaceholderIcon } from './AvatarPlaceholderIcon';
import useStyles, { AvatarShape } from './Avatar.style';

export type AvatarStylesNames = ClassNames<typeof useStyles>;

interface _AvatarProps extends CoComponentProps<AvatarStylesNames> {
  src?: string;
  alt?: string;
  size?: CoSize | number;
  shape?: AvatarShape;
  color?: CoPalette;
}

export type AvatarProps<C extends React.ElementType> = PolymorphicComponentProps<C, _AvatarProps>;

type AvatarComponent = <C extends React.ElementType = 'div'>(props: AvatarProps<C>) => React.ReactElement;

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
