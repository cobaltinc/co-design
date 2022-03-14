import React, { Children } from 'react';
import { useUncontrolled, useId } from '@co-design/hooks';
import { CoComponentProps, CoSize, CoSpacing, CoRadius, CoPalette } from '@co-design/styles';
import { Group, GroupProps } from '../Group/Group';
import { Chip } from './Chip';

export interface ChipsProps<T extends boolean = false>
  extends CoComponentProps,
    Omit<GroupProps, 'value' | 'defaultValue' | 'onChange' | 'classNames' | 'styles'> {
  /** input에 id 속성을 정합니다. */
  id?: string;

  /** Chip 컴포넌트만 넣을 수 있습니다. */
  children?: React.ReactNode;

  /** 포함된 Chip 컴포넌트의 색상을 정합니다. */
  color?: CoPalette;

  /** 포함된 Chip 컴포넌트의 간격을 정합니다. */
  spacing?: CoSpacing | number;

  /** 포함된 Chip 컴포넌트의 border radius를 정합니다. */
  radius?: CoRadius | number;

  /** 포함된 Chip 컴포넌트의 크기를 정합니다. */
  size?: CoSize;

  /** true일 경우 Chip 컴포넌트를 여러 개 선택할 수 있습니다. */
  multiple?: T;

  /**
   * 현재 value 정합니다.
   * Chips 컴포넌트를 직접 제어한다면 이 속성을 사용합니다.
   * multiple이 true인 경우 value를 배열로 넘겨야 합니다.
   */
  value?: T extends true ? string[] : string;

  /**
   * 기본 value를 정합니다.
   * Chips 컴포넌트를 제어하지 않는다면 이 속성을 사용합니다.
   * multiple이 true인 경우 value를 배열로 넘거야 합니다.
   */
  defaultValue?: T extends true ? string[] : string;

  /**
   * value가 변경된 경우 실행됩니다.
   * multiple이 true인 경우 value가 배열로 넘어옵니다.
   */
  onChange?(value: T extends true ? string[] : string): void;
}

export const Chips = <T extends boolean>({
  id,
  children,
  color,
  spacing = 'small',
  radius = 'medium',
  size = 'small',
  multiple,
  value,
  defaultValue,
  onChange,
  ...props
}: ChipsProps<T>) => {
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
    <Group spacing={spacing} id={uuid} {...props}>
      {chips}
    </Group>
  );
};

Chips.displayName = '@co-design/core/Chips';
