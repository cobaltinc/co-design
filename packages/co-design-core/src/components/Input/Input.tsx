import React, { ChangeEvent, forwardRef, useId, useState } from 'react';
import { CoComponentProps, CoSize, PolymorphicComponentProps, PolymorphicRef, ClassNames, CoTypography } from '@co-design/styles';
import { View } from '../View';
import useStyles from './Input.style';
import { Text, TextProps } from '../Text';
import { Group } from '../Group';
import { Typography } from '../Typography';

export type InputStylesNames = ClassNames<typeof useStyles>;

export interface InputBaseProps {
  /** Input 컴포넌트의 크기를 정합니다. */
  size?: CoSize;

  /** Input 컴포넌트의 radius를 정합니다. */
  radius?: number;

  /** Input 컴포넌트 왼쪽 영역에 아이콘이 추가됩니다. */
  icon?: React.ReactNode;

  /** Input 컴포넌트 왼쪽 영역에 요소가 추가됩니다. */
  leftSection?: React.ReactNode;

  /** 왼쪽 영역의 너비를 정합니다. */
  leftSectionWidth?: number;

  /** 왼쪽 영역을 감싸는 div에 속성을 전달합니다. */
  leftSectionProps?: React.ComponentPropsWithoutRef<'div'>;

  /** Input 컴포넌트 오른쪽 영역에 요소가 추가됩니다. */
  rightSection?: React.ReactNode;

  /** 오른쪽 영역의 너비를 정합니다. */
  rightSectionWidth?: number;

  /** 오른쪽 영역을 감싸는 div에 속성을 전달합니다. */
  rightSectionProps?: React.ComponentPropsWithoutRef<'div'>;

  /** input을 감싸는 요소에 속성을 전달합니다. */
  wrapperProps?: React.ComponentPropsWithoutRef<'div'> & { [key: string]: any };

  /** required 상태가 됩니다. */
  required?: boolean;

  /**
   * invalid 상태가 됩니다.
   * 테두리와 텍스트 색상이 red로 변경됩니다.
   */
  invalid?: boolean;

  /** Will input have multiple lines? */
  multiline?: boolean;

  /** disabled 상태가 됩니다. */
  disabled?: boolean;

  /** Input 을 설명할 label을 지정합니다. */
  label?: string;

  /** Label Text의 Props 를 설정합니다. */
  labelTextProps?: TextProps<'span'>;

  /** Input 의 상태를 설명할 helper Text를 지정합니다. */
  helperText?: string;

  /** Input 의 상태를 설명할 helper Text를 설정합니다. */
  helperTextProps?: TextProps<'span'>;

  /** Input 의 최대 글자 수를 지정합니다. */
  maximumLength?: number;

  /** Input 의 hegiht 를 resize 할 수 있게 설정합니다. */
  flexible?: boolean;
}

interface _InputProps extends InputBaseProps, CoComponentProps<InputStylesNames> {
  /** Static css selector base */
  __staticSelector?: string;
}

export type InputProps<C extends React.ElementType> = PolymorphicComponentProps<C, _InputProps>;

type InputComponent = <C extends React.ElementType = 'input'>(props: InputProps<C>) => React.ReactNode;

const labelVariants: Record<string, CoTypography> = {
  xsmall: 'heading-09',
  small: 'heading-09',
  medium: 'heading-08',
  large: 'heading-07',
  xlarge: 'heading-07',
};

export const Input: InputComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'input'>(
    {
      component,
      size = 'medium',
      radius,
      icon,
      leftSectionWidth = 36,
      leftSection,
      leftSectionProps = {},
      rightSectionWidth = 36,
      rightSection,
      rightSectionProps = {},
      wrapperProps,
      invalid = false,
      required = false,
      disabled = false,
      multiline = false,
      label = '',
      labelTextProps = {},
      helperText,
      helperTextProps = {},
      maximumLength,
      flexible,
      className,
      style,
      co,
      overrideStyles,
      __staticSelector = 'Input',
      name,
      onChange,
      ...props
    }: InputProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const inputId = useId();
    const { classes, cx } = useStyles(
      {
        radius,
        size,
        multiline,
        invalid,
        disabled,
        flexible,
        isLeftSectionExist: !!leftSection,
        leftSectionWidth,
        isRightSectionExist: !!rightSection,
        rightSectionWidth,
      },
      { overrideStyles, name: __staticSelector },
    );
    const Element: any = component || 'input';
    const [currentLength, setCurrentLength] = useState(0);

    const Wrapper = label ? View : React.Fragment;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (maximumLength) {
        setCurrentLength(e.target.value.length);
      }
      onChange?.(e);
    };

    return (
      <Wrapper>
        <Group className={classes.labelWrapper} position={label ? 'apart' : 'right'}>
          {label ? (
            <label htmlFor={inputId + name}>
              <Typography variant={labelVariants[size]} className={classes.labelText} {...labelTextProps}>
                {label}
              </Typography>
            </label>
          ) : null}
          {maximumLength ? <Text className={classes.maximumLength}>{`${currentLength} / ${maximumLength}`}</Text> : null}
        </Group>
        <View className={cx(classes.wrapper, className)} co={co} style={style} {...wrapperProps}>
          {leftSection && (
            <div
              {...leftSectionProps}
              style={{ ...leftSectionProps.style, width: leftSectionWidth }}
              className={cx(classes.leftSection, leftSectionProps.className)}
            >
              {leftSection}
            </div>
          )}
          {icon && <div className={classes.icon}>{icon}</div>}
          <Element
            {...props}
            ref={ref}
            className={cx(classes.input, {
              [classes.withLeft]: !!leftSection || !!icon,
              [classes.withRight]: !!rightSection,
              [classes.invalid]: invalid,
              [classes.disabled]: disabled,
            })}
            required={required}
            disabled={disabled}
            id={inputId + name}
            onChange={handleChange}
            maxLength={maximumLength}
          />
          {rightSection && (
            <div
              {...rightSectionProps}
              style={{ ...rightSectionProps.style, width: rightSectionWidth }}
              className={cx(classes.rightSection, rightSectionProps.className)}
            >
              {rightSection}
            </div>
          )}
          {helperText && (
            <Typography variant="caption" className={classes.helperText} {...helperTextProps}>
              {helperText}
            </Typography>
          )}
        </View>
      </Wrapper>
    );
  },
);

Input.displayName = '@co-design/core/Input';
