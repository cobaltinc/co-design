import React, { forwardRef } from 'react';
import { useCoTheme, DefaultProps, CoNumberSize, CoColorPalette, CoColor } from '@co/styles';
import { View } from '../View';
import useStyles from './Burger.style';
import { useUpdateEffect, useToggle } from '@co/hooks';
import { useCallback } from 'react';

export interface BurgerProps extends DefaultProps, React.ComponentPropsWithoutRef<'button'> {
  opened?: boolean;
  size?: CoNumberSize;
  color?: CoColorPalette | CoColor | string;
}

export const Burger = forwardRef<HTMLButtonElement, BurgerProps>(
  ({ opened = false, color, size = 'medium', co, className, ...props }: BurgerProps, ref) => {
    const theme = useCoTheme();
    const _color =
      (color in theme.colorPalettes
        ? theme.colorPalettes[color][theme.colorScheme === 'light' ? 6 : 2]
        : color in theme.colors
        ? theme.colors[color]
        : color) || (theme.colorScheme === 'dark' ? theme.colors.white : theme.colorPalettes.dark[9]);
    const { classes, cx } = useStyles({ color: _color, size }, { co, name: 'Burger' });

    const [currentOpened, toggleCurrentOpened] = useToggle(opened);

    useUpdateEffect(() => {
      toggleCurrentOpened(opened);
    }, [opened]);

    const handleClick = useCallback(() => {
      toggleCurrentOpened();
    }, []);

    return (
      <View component="button" type="button" ref={ref} onClick={handleClick} title="burger" className={cx(classes.root, className)} {...props}>
        <div className={cx(classes.burger, { [classes.opened]: currentOpened })} />
      </View>
    );
  },
);

Burger.displayName = '@mantine/core/Burger';
