import React, { forwardRef } from 'react';
import { useCoTheme, CoComponentProps, CoNumberSize, CoPalette, CoColor, ClassNames } from '@co-design/styles';
import { View } from '../View';
import useStyles from './Burger.style';
import { useUpdateEffect, useToggle } from '@co-design/archetype';
import { useCallback } from 'react';

export type BurgerStylesNames = ClassNames<typeof useStyles>;

export interface BurgerProps extends CoComponentProps<BurgerStylesNames>, React.ComponentPropsWithoutRef<'button'> {
  /** true일 경우 X 모양이 되고 false일 경우 버거 모양이 됩니다. */
  opened?: boolean;

  /** Burger 컴포넌트의 크기를 정합니다. */
  size?: CoNumberSize;

  /** Burger 컴포넌트의 색상을 정합니다. */
  color?: CoPalette | CoColor | string;
}

export const Burger = forwardRef<HTMLButtonElement, BurgerProps>(
  ({ opened = false, color, size = 'medium', co, className, overrideStyles, ...props }: BurgerProps, ref) => {
    const theme = useCoTheme();
    const _color =
      (color in theme.palettes
        ? theme.palettes[color][theme.colorScheme === 'light' ? 5 : 2]
        : color in theme.colors
        ? theme.colors[color]
        : color) || (theme.colorScheme === 'dark' ? theme.colors.white : theme.palettes.gray[9]);
    const { classes, cx } = useStyles({ color: _color, size }, { overrideStyles, name: 'Burger' });

    const [currentOpened, toggleCurrentOpened] = useToggle(opened);

    useUpdateEffect(() => {
      toggleCurrentOpened(opened);
    }, [opened]);

    const handleClick = useCallback(() => {
      toggleCurrentOpened();
    }, []);

    return (
      <View
        component="button"
        type="button"
        ref={ref}
        onClick={handleClick}
        title="burger"
        className={cx(classes.root, className)}
        co={co}
        {...props}
      >
        <div className={cx(classes.burger, { [classes.opened]: currentOpened })} />
      </View>
    );
  },
);

Burger.displayName = '@co-design/primitive/Burger';
