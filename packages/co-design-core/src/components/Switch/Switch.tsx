import React, { forwardRef } from 'react';
import { useId } from '@co-design/hooks';
import { CoComponentProps, CoSize, CoPalette, ClassNames, useCoTheme } from '@co-design/styles';
import { View } from '../View';
import useStyles from './Switch.style';

export type SwitchStylesNames = ClassNames<typeof useStyles>;

export interface SwitchProps
  extends CoComponentProps<SwitchStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'type' | 'size' | 'children'> {
  /** input에 id를 넣습니다. */
  id?: string;

  /** 우측 영역에 label을 추가합니다. */
  label?: React.ReactNode;

  /** Switch 컴포넌트의 색상을 정합니다. */
  color?: CoPalette;

  /** Switch 컴포넌트의 크기를 정합니다. */
  size?: CoSize;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ id, size = 'small', color, label, className, style, co, overrideStyles, ...props }: SwitchProps, ref) => {
    const theme = useCoTheme();
    const _color = color || theme.primaryColor;
    const { classes, cx } = useStyles({ size, color: _color }, { overrideStyles, name: 'Switch' });
    const uuid = useId(id);

    return (
      <View className={cx(classes.root, className)} co={co} style={style}>
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
