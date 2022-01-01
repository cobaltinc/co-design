import React, { forwardRef } from 'react';
import { useUncontrolled, useId } from '@co-design/hooks';
import { CoComponentProps, CoPalette, CoSize, CoRadius, useCoTheme, ClassNames } from '@co-design/styles';
import { View } from '../View';
import { CheckboxIcon } from './CheckboxIcon';
import useStyles from './Chip.style';

export type ChipStylesNames = ClassNames<typeof useStyles>;

export interface ChipProps extends CoComponentProps<ChipStylesNames>, Omit<React.ComponentPropsWithoutRef<'input'>, 'size' | 'onChange'> {
  /** Chip radius from theme or number to set value in px */
  radius?: CoRadius | number;

  /** Predefined chip size */
  size?: CoSize;

  /** Chip input type */
  type?: 'radio' | 'checkbox';

  /** Controls chip appearance, defaults to filled with dark theme and to outline in light theme */
  variant?: 'outline' | 'filled';

  /** Chip label */
  children: React.ReactNode;

  /** Checked state for controlled component */
  checked?: boolean;

  /** Default value for uncontrolled component */
  defaultChecked?: boolean;

  /** Calls when checked state changes */
  onChange?(checked: boolean): void;

  /** Active color from theme, defaults to theme.primaryColor */
  color?: CoPalette;

  /** Static id to bind input with label */
  id?: string;

  /** Static selector base */
  __staticSelector?: string;

  /** Input value */
  value: string;
}

export const Chip = forwardRef<HTMLInputElement, ChipProps>(
  (
    {
      radius = 'round',
      type = 'checkbox',
      size = 'small',
      variant,
      disabled = false,
      __staticSelector = 'Chip',
      id,
      color,
      children,
      className,
      style,
      checked,
      defaultChecked,
      onChange,
      co,
      overrideStyles,
      ...props
    }: ChipProps,
    ref,
  ) => {
    const uuid = useId(id);
    const theme = useCoTheme();
    const _color = color || theme.primaryColor;
    const { classes, cx } = useStyles({ radius, size, color: _color }, { co, overrideStyles, name: __staticSelector });

    const [value, setValue] = useUncontrolled({
      value: checked,
      defaultValue: defaultChecked,
      finalValue: true,
      onChange,
      rule: (val) => typeof val === 'boolean',
    });

    const defaultVariant = theme.colorScheme === 'dark' ? 'filled' : 'outline';

    return (
      <View className={cx(classes.root, className)} style={style} co={co}>
        <input
          type={type}
          className={classes.input}
          checked={value}
          onChange={(event) => setValue(event.currentTarget.checked)}
          id={uuid}
          disabled={disabled}
          ref={ref}
          {...props}
        />
        <label
          htmlFor={uuid}
          className={cx(classes.label, { [classes.checked]: value, [classes.disabled]: disabled }, classes[variant || defaultVariant])}
        >
          {value && (
            <span className={classes.iconWrapper}>
              <CheckboxIcon indeterminate={false} className={classes.checkIcon} />
            </span>
          )}
          {children}
        </label>
      </View>
    );
  },
);

Chip.displayName = '@co-design/core/Chip';
