import React, { forwardRef } from 'react';
import { useId } from '@co-design/hooks';
import { CoComponentProps, CoSize, CoPalette, ClassNames, useCoTheme } from '@co-design/styles';
import { View } from '../View';
import useStyles from './Switch.style';

export type SwitchStylesNames = ClassNames<typeof useStyles>;

export interface SwitchProps extends CoComponentProps, Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'size' | 'children'> {
  id?: string;
  label?: React.ReactNode;
  color?: CoPalette;
  size?: CoSize;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ id, size = 'small', color, label, className, style, co, ...props }: SwitchProps, ref) => {
    const theme = useCoTheme();
    const _color = color || theme.primaryColor;
    const { classes, cx } = useStyles({ size, color: _color }, { co, name: 'Switch' });
    const uuid = useId(id);

    return (
      <View className={cx(classes.root, className)} style={style}>
        <input {...props} id={uuid} ref={ref} type="checkbox" className={classes.input} />

        {label && (
          <label className={classes.label} htmlFor={uuid}>
            {label}
          </label>
        )}
      </View>
    );
  },
);

Switch.displayName = '@co-design/core/Switch';
