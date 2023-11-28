import React, { forwardRef } from 'react';
import { useId } from '@co-design/hooks';
import { CoComponentProps, CoSize, useCoTheme } from '@co-design/styles';
import { Input, InputBaseProps, InputStylesNames } from '../Input/Input';
import { getSelectRightSectionProps } from './getSelectRightSectionProps';

export type NativeSelectStylesNames = InputStylesNames;

export interface SelectItem {
  value: string;
  label?: string;
  disabled?: boolean;
  group?: string;
  [key: string]: any;
}

export interface NativeSelectProps
  extends CoComponentProps<NativeSelectStylesNames>,
    InputBaseProps,
    Omit<React.ComponentPropsWithoutRef<'select'>, 'size'> {
  /** input에 id를 정합니다. 설정하지 않은 경우 임의의 uuid가 설정됩니다. */
  id?: string;

  /** NativeSelect 컴포넌트의 크기를 정합니다. */
  size?: CoSize;

  /**
   * hidden, disabled 속성이 추가된 option을 추가합니다.
   * value가 설정되지 않은 경우 해당 option이 보입니다.
   */
  placeholder?: string;

  /** option으로 들어갈 데이터를 정의합니다. */
  data: (string | SelectItem)[];
}

export const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
  (
    { id, size = 'medium', data, placeholder, required, invalid, rightSection, rightSectionWidth, overrideStyles, ...props }: NativeSelectProps,
    ref,
  ) => {
    const uuid = useId(id);
    const theme = useCoTheme();

    const formattedData = data.map((item) => (typeof item === 'string' ? { label: item, value: item } : item));

    const options = formattedData.map((item) => (
      <option key={item.value} value={item.value} disabled={item.disabled}>
        {item.label}
      </option>
    ));

    if (placeholder) {
      options.unshift(
        <option key="placeholder" value="" disabled hidden>
          {placeholder}
        </option>,
      );
    }

    const selectRightSectionProps = getSelectRightSectionProps({
      theme,
      rightSection,
      rightSectionWidth,
      overrideStyles,
      shouldClear: false,
      size,
      invalid,
    });

    return (
      <Input<'select'>
        __staticSelector="NativeSelect"
        component="select"
        ref={ref}
        id={uuid}
        required={required}
        size={size}
        {...selectRightSectionProps}
        defaultValue={placeholder ? '' : undefined}
        overrideStyles={{
          ...overrideStyles,
          ...selectRightSectionProps.overrideStyles,
          input: {
            padding: `0 ${theme.foundations.tokens.size.size_06}px`,
          },
        }}
        {...props}
      >
        {options}
      </Input>
    );
  },
);

NativeSelect.displayName = '@co-design/core/NativeSelect';
