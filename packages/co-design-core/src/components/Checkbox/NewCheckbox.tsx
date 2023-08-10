import React, { useEffect, useState } from 'react';
import useStyles from './Checkbox.style';
import { CheckboxIcon } from './CheckboxIcon';

export interface CheckboxProps {
  name?: string;
  label?: string;
  labelColor?: string;
  value?: string;
  checked?: boolean;
  block?: boolean;
  error?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLLabelElement>;
  className?: string;
  style?: React.CSSProperties;
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
  ...props
}: CheckboxProps) => {
  const [check, setCheck] = useState(checked);
  const { classes, cx } = useStyles(null, {
    name: 'Checkbox',
  });

  useEffect(() => {
    setCheck(checked);
  }, [checked]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(event.target.checked);
    onChange?.(event);
  };

  return (
    <label
      onClick={onClick}
      className={cx(classes.wrapper, className, { [classes.block]: block, [classes.disabled]: disabled })}
      style={style}
      {...props}
    >
      <input type="checkbox" className={classes.input} name={name} checked={check} disabled={disabled} value={value} onChange={handleChange} />
      <span className={classes.checkmark}>
        <CheckboxIcon check={check} indeterminate={indeterminate} error={error} disabled={disabled} />
      </span>
      {label ? (
        <span className={classes.text} style={{ color: labelColor }}>
          {label}
        </span>
      ) : null}
    </label>
  );
};
