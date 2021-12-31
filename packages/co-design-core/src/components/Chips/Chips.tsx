import React, { Children } from 'react';
import { useUncontrolled, useId } from '@co-design/hooks';
import { CoComponentProps, CoSize, CoSpacing, CoRadius, CoPalette } from '@co-design/styles';
import { Group, GroupProps } from '../Group/Group';
import { Chip } from './Chip';

export interface ChipsProps<T extends boolean = false>
  extends CoComponentProps,
    Omit<GroupProps, 'value' | 'defaultValue' | 'onChange' | 'classNames' | 'styles'> {
  spacing?: CoSpacing | number;

  radius?: CoRadius | number;

  /** Predefined chip size */
  size?: CoSize;

  /** Allow multiple values to be picked */
  multiple?: T;

  /** Controlled component value */
  value?: T extends true ? string[] : string;

  /** Uncontrolled component value */
  defaultValue?: T extends true ? string[] : string;

  /** Called when value changes */
  onChange?(value: T extends true ? string[] : string): void;

  /** Static id, used to generate inputs names */
  id?: string;

  /** <Chip /> components only */
  children?: React.ReactNode;

  /** Controls chip appearance, defaults to filled with dark theme and to outline in light theme */
  variant?: 'filled' | 'outline';

  /** Active chip color, defaults to theme.primaryColor */
  color?: CoPalette;
}

export function Chips<T extends boolean>({
  value,
  defaultValue,
  onChange,
  color,
  spacing = 'spacing2',
  radius = 9999,
  size = 'small',
  variant,
  multiple,
  children,
  id,
  ...others
}: ChipsProps<T>) {
  const uuid = useId(id);
  const [_value, setValue] = useUncontrolled<string | string[]>({
    value,
    defaultValue,
    finalValue: multiple ? [] : null,
    onChange,
    rule: (val) => (multiple ? Array.isArray(val) : typeof val === 'string'),
  });

  const chips = Children.toArray(children)
    .filter((child: React.ReactElement) => child.type === Chip)
    .map((child: React.ReactElement, index) =>
      React.cloneElement(child, {
        variant,
        radius,
        color,
        __staticSelector: 'Chips',
        name: uuid,
        size,
        id: `${uuid}-${index}`,
        type: multiple ? 'checkbox' : 'radio',
        checked: Array.isArray(_value) ? _value.includes(child.props.value) : child.props.value === _value,
        onChange: () => {
          const val = child.props.value;

          if (Array.isArray(_value)) {
            setValue(_value.includes(val) ? _value.filter((v) => v !== val) : [..._value, val]);
          } else {
            setValue(val);
          }
        },
      }),
    );

  return (
    <Group spacing={spacing} id={uuid} {...others}>
      {chips}
    </Group>
  );
}

Chips.displayName = '@co-design/core/Chips';
