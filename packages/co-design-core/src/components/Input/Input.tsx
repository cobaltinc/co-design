import React, { forwardRef } from 'react';
import { useCoTheme, CoComponentProps, CoSize, PolymorphicComponentProps, PolymorphicRef, CoRadius, ClassNames } from '@co-design/styles';
import { View } from '../View';
import useStyles from './Input.style';

export type InputStylesNames = ClassNames<typeof useStyles>;

export interface InputBaseProps {
  /** Sets border color to red and aria-invalid=true on input element */
  invalid?: boolean;

  /** Adds icon on the left side of input */
  icon?: React.ReactNode;

  /** Right section of input, similar to icon but on the right */
  rightSection?: React.ReactNode;

  /** Width of right section, is used to calculate input padding-right */
  rightSectionWidth?: number;

  /** Props spread to rightSection div element */
  rightSectionProps?: React.ComponentPropsWithoutRef<'div'>;

  /** Properties spread to root element */
  wrapperProps?: React.ComponentPropsWithoutRef<'div'> & { [key: string]: any };

  /** Sets aria-required=true on input element */
  required?: boolean;

  /** Input border-radius from theme or number to set border-radius in px */
  radius?: CoRadius | number;

  /** Will input have multiple lines? */
  multiline?: boolean;

  /** Disabled input state */
  disabled?: boolean;

  /** Input size */
  size?: CoSize;
}

interface _InputProps extends InputBaseProps, CoComponentProps<InputStylesNames> {
  /** Static css selector base */
  __staticSelector?: string;
}

export type InputProps<C extends React.ElementType> = PolymorphicComponentProps<C, _InputProps>;

type InputComponent = <C extends React.ElementType = 'input'>(props: InputProps<C>) => React.ReactElement;

export const Input: InputComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'input'>(
    {
      component,
      invalid = false,
      required = false,
      disabled = false,
      icon,
      style,
      rightSectionWidth = 36,
      rightSection,
      rightSectionProps = {},
      radius = 'medium',
      size = 'medium',
      wrapperProps,
      __staticSelector = 'Input',
      multiline = false,
      className,
      co,
      overrideStyles,
      ...props
    }: InputProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const theme = useCoTheme();
    const { classes, cx } = useStyles({ radius, size, multiline, invalid }, { overrideStyles, name: __staticSelector });
    const Element: any = component || 'input';

    return (
      <View className={cx(classes.wrapper, className)} co={co} style={style} {...wrapperProps}>
        {icon && <div className={classes.icon}>{icon}</div>}

        <Element
          {...props}
          ref={ref}
          aria-required={required}
          aria-invalid={invalid}
          className={cx(classes.input, {
            [classes.withIcon]: icon,
            [classes.invalid]: invalid,
            [classes.disabled]: disabled,
          })}
          disabled={disabled}
          style={{ paddingRight: rightSection ? rightSectionWidth : theme.spacing.small }}
        />

        {rightSection && (
          <div {...rightSectionProps} style={{ width: rightSectionWidth }} className={classes.rightSection}>
            {rightSection}
          </div>
        )}
      </View>
    );
  },
);

Input.displayName = '@co-design/core/Input';
