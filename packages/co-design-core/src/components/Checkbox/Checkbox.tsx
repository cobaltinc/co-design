import React, { useEffect, useState } from 'react';
import { ClassNames, CoComponentProps } from '@co-design/styles';
import { CheckboxIcon } from './CheckboxIcon';
import { View } from '../View';
import useStyles from './Checkbox.style';

export type CheckboxStylesNames = ClassNames<typeof useStyles>;

export interface CheckboxProps extends CoComponentProps<CheckboxStylesNames>, Omit<React.ComponentPropsWithoutRef<'input'>, 'onClick'> {
  /** Checkbox 를 설명할 label 을 지정합니다.   */
  label?: string;

  /** Checkbox 를 설명할 label 의 색상을 지정합니다.   */
  labelColor?: string;

  /** Checkbox 를 block 상태로 지정합니다.  */
  block?: boolean;

  /** Checkbox 를 error 상태로 지정합니다.  */
  error?: boolean;

  /** Checkbox 를 indeterminate 상태로 지정합니다.  */
  indeterminate?: boolean;

  /** Checkbox 를 감싸는 요소를 클릭했을 때 발생할 이벤트를 지정합니다. */
  onClick?: React.MouseEventHandler<HTMLLabelElement>;

  /** Checkbox 를 감싸는 요소에 속성을 전달합니다. */
  wrapperProps?: React.ComponentPropsWithoutRef<'label'> & { [key: string]: any };
}

export const Checkbox = ({
  name,
  label,
  labelColor,
  value,
  checked = false,
  block = false,
  error = false,
  disabled = false,
  indeterminate = false,
  onChange,
  onClick,
  className = '',
  style,
  wrapperProps,
  co,
  overrideStyles,
  ...props
}: CheckboxProps) => {
  const [check, setCheck] = useState(checked);
  const { classes, cx } = useStyles(
    { error, checked: check || indeterminate, disabled },
    {
      overrideStyles,
      name: 'Checkbox',
    },
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(event.target.checked);
    onChange?.(event);
  };

  useEffect(() => {
    setCheck(checked);
  }, [checked]);

  return (
    <View
      component="label"
      onClick={onClick}
      className={cx(classes.wrapper, className, {
        [classes.checked]: check || indeterminate,
        [classes.block]: block,
        [classes.disabled]: disabled,
      })}
      co={co}
      style={style}
      {...wrapperProps}
    >
      <input
        type="checkbox"
        className={classes.input}
        name={name}
        checked={check}
        disabled={disabled}
        value={value}
        onChange={handleChange}
        {...props}
      />
      <CheckboxIcon className={classes.checkmark} check={check} indeterminate={indeterminate} />
      {label ? (
        <span className={classes.text} style={{ color: labelColor }}>
          {label}
        </span>
      ) : null}
    </View>
  );
};
