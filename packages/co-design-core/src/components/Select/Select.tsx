import { Input, InputProps } from '../Input';
import { Menu, MenuProps } from '../Menu';
import { Popover, PopoverProps } from '../Popover';
import { View, ViewProps } from '../View';
import ChevronDownLight from './ChevronDownLight';
import ChevronUpLight from './ChevronUpLight';
import { forwardRef, useRef, useState } from 'react';

export interface SelectProps extends Omit<InputProps<'input'>, 'onSelect'> {
  options: string[];
  defaultOption?: string;
  contentLabel?: string;
  menuProps?: Omit<MenuProps, 'children'>;
  wrapperProps?: ViewProps<'div'>;
  popoverProps?: Partial<PopoverProps>;
  onSelect?: (value: string) => void;
  helperText?: string;
}

export const Select = forwardRef<HTMLInputElement, SelectProps>(
  ({ options, label, contentLabel, menuProps, wrapperProps, popoverProps, onSelect, defaultOption, ...rest }, ref) => {
    const [focusing, setFocusing] = useState(false);
    const [popoverFlag, setPopoverFlag] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>();

    return (
      <Popover
        flag={popoverFlag}
        placement="bottom"
        contentPadding={0}
        withArrow={false}
        onOpen={() => {
          setFocusing(true);
        }}
        onClose={() => {
          setFocusing(false);
        }}
        content={
          <Menu
            co={{
              width: wrapperRef.current?.clientWidth,
              maxHeight: 300,
              overflow: 'auto',
            }}
            {...menuProps}
          >
            {!!contentLabel && <Menu.Label>{contentLabel}</Menu.Label>}
            {options.map((option, idx) => (
              <Menu.Item
                key={idx}
                onClick={() => {
                  onSelect?.(option);
                  setPopoverFlag((prev) => !prev);
                }}
              >
                {option}
              </Menu.Item>
            ))}
          </Menu>
        }
        co={{
          width: '100%',
        }}
        {...popoverProps}
      >
        <View
          co={{
            position: 'relative',
          }}
          ref={wrapperRef}
          {...wrapperProps}
        >
          <Input
            ref={ref}
            label={label}
            defaultValue={defaultOption}
            autoComplete="off"
            rightSection={focusing ? <ChevronUpLight /> : <ChevronDownLight />}
            overrideStyles={{
              input: {
                cursor: 'pointer',
                caretColor: 'transparent',
              },
              rightSection: {
                pointerEvents: 'none',
              },
            }}
            {...rest}
          />
        </View>
      </Popover>
    );
  },
);
