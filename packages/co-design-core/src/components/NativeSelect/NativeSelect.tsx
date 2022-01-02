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
  /** id is used to bind input and label, if not passed unique id will be generated for each input */
  id?: string;

  /** Adds hidden option to select and sets it as selected if value is not present */
  placeholder?: string;

  /** Data used to render options */
  data: (string | SelectItem)[];

  /** Style properties added to select element */
  inputStyle?: React.CSSProperties;

  /** Input size */
  size?: CoSize;
}

export const NativeSelect = forwardRef<HTMLSelectElement, NativeSelectProps>(
  (
    {
      id,
      className,
      required,
      style,
      data,
      placeholder,
      wrapperProps,
      inputStyle,
      defaultValue,
      onChange,
      value,
      invalid,
      size = 'medium',
      rightSection,
      rightSectionWidth,
      co,
      overrideStyles,
      ...props
    }: NativeSelectProps,
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

    return (
      <Input<'select'>
        __staticSelector="NativeSelect"
        component="select"
        ref={ref}
        id={uuid}
        style={inputStyle}
        aria-required={required}
        required={required}
        value={value === null ? '' : value}
        size={size}
        co={co}
        overrideStyles={overrideStyles}
        onChange={onChange}
        {...getSelectRightSectionProps({
          theme,
          rightSection,
          rightSectionWidth,
          overrideStyles,
          shouldClear: false,
          size,
          invalid,
        })}
        {...props}
      >
        {options}
      </Input>
    );
  },
);

NativeSelect.displayName = '@co-design/core/NativeSelect';
