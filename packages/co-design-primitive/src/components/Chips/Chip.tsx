import React, { forwardRef } from 'react';
import { useUncontrolled, useId } from '@co-design/archetype';
import { CoComponentProps, CoPalette, CoSize, CoRadius, useCoTheme, ClassNames } from '@co-design/styles';
import { View } from '../View';
import { CheckboxIcon } from './CheckboxIcon';
import useStyles from './Chip.style';

export type ChipStylesNames = ClassNames<typeof useStyles>;

export interface ChipProps extends CoComponentProps<ChipStylesNames>, Omit<React.ComponentPropsWithoutRef<'input'>, 'size' | 'onChange'> {
  /** Chip 컴포넌트의 label 입니다. */
  children: React.ReactNode;

  /** Chip 컴포넌트의 색상을 정합니다. */
  color?: CoPalette;

  /** Chip 컴포넌트의 input에 id 속성을 정합니다. */
  id?: string;

  /** Chip 컴포넌트의 input에 value를 정합니다. */
  value: string;

  /**
   * Chip 컴포넌트의 input에 checked 속성을 제어합니다.
   * Chip 컴포넌트를 직접 제어한다면 이 속성을 사용합니다.
   */
  checked?: boolean;

  /**
   * Chip 컴포넌트의 input에 defaultChecked 속성을 제어합니다.
   * Chip 컴포넌트를 직접 제어하지 않는다면 이 속성을 사용합니다.
   */
  defaultChecked?: boolean;

  /**
   * Chip 컴포넌트의 input type을 정합니다.
   * 이 속성은 Chips 컴포넌트에 의해 제어될 수 있습니다.
   **/
  type?: 'radio' | 'checkbox';

  /**
   * Chip 컴포넌트의 border radius를 정합니다.
   * 이 속성은 Chips 컴포넌트에서 제어될 수 있습니다.
   */
  radius?: CoRadius | number;

  /**
   * Chip 컴포넌트의 크기를 정합니다.
   * 이 속성은 Chips 컴포넌트에 의해 제어될 수 있습니다.
   */
  size?: CoSize;

  /**
   * checked 속성이 변경된다면 함수가 실행됩니다.
   */
  onChange?(checked: boolean): void;

  __staticSelector?: string;
}

export const Chip = forwardRef<HTMLInputElement, ChipProps>(
  (
    {
      radius = 'round',
      type = 'checkbox',
      size = 'small',
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
    const { classes, cx } = useStyles({ radius, size, color: _color }, { overrideStyles, name: __staticSelector });

    const [value, setValue] = useUncontrolled({
      value: checked,
      defaultValue: defaultChecked,
      finalValue: true,
      onChange,
      rule: (val) => typeof val === 'boolean',
    });

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
        <label htmlFor={uuid} className={cx(classes.label, { [classes.checked]: value, [classes.disabled]: disabled })}>
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

Chip.displayName = '@co-design/primitive/Chip';
