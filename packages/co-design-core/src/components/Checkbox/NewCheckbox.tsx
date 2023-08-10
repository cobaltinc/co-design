import React, { useEffect, useState } from 'react';
import { useCoTheme } from '@co-design/styles';
import useStyles from './Checkbox.style';
import { Check } from './icons/Check';
import { DisabledCheck } from './icons/DisabledCheck';
import { Error } from './icons/Error';

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
  const theme = useCoTheme();
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
        {check ? (
          !error ? (
            disabled ? (
              <DisabledCheck />
            ) : (
              <Check />
            )
          ) : (
            <Error />
          )
        ) : indeterminate ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.8333 2.5H4.16667C3.25 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.25 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V4.16667C17.5 3.25 16.75 2.5 15.8333 2.5V2.5ZM14.1667 10.8333H5.83333V9.16667H14.1667V10.8333V10.8333Z"
              fill="#8A3FFC"
            />
          </svg>
        ) : !error ? (
          disabled ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" fill="#F9FAFB" stroke="#DFE3E8" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5ZM3.75 16.25V3.75H16.25V16.25H3.75Z"
                fill="#161616"
              />
            </svg>
          )
        ) : (
          <Error />
        )}
      </span>
      {label ? (
        <span className={classes.text} style={{ color: labelColor }}>
          {label}
        </span>
      ) : null}
    </label>
  );
};
