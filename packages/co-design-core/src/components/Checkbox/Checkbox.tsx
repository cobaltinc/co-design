/// <reference types="@emotion/react/types/css-prop" />
/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';
import css from '@emotion/css';
import { useCoTheme } from '@co-design/styles';
import classnames from './classnames';

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
  const classPrefix = `chemi-checkbox`;
  const [check, setCheck] = useState(checked);
  const theme = useCoTheme();

  useEffect(() => {
    setCheck(checked);
  }, [checked]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(event.target.checked);
    onChange?.(event);
  };

  const classNames = classnames(classPrefix, className, {
    [`${classPrefix}--disabled`]: disabled,
    [`${classPrefix}--block`]: block,
  });

  const CheckboxStyle = css`
    position: relative;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    z-index: 0;

    &:hover,
    &:focus {
      &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 2px;
        z-index: -1;
        box-sizing: border-box;
        background-color: ${theme.palettes.gray[3]};
      }

      &::selection {
        background-color: ${theme.palettes.purple[6]};
        border-color: ${theme.palettes.purple[7]};
      }
    }

    &:active {
      &::before {
        content: '';
        position: absolute;
        top: -2px;
        right: -2px;
        bottom: -2px;
        left: -2px;
        border-radius: 2px;
        z-index: -1;
      }
    }

    input {
      position: absolute;
      width: 0px;
      height: 0px;
      opacity: 0;
    }

    .${classPrefix}--checkmark {
      display: inline-block;
      width: 20px;
      height: 20px;
      vertical-align: middle;
    }

    .${classPrefix}--text {
      padding-left: 4px;
      font-size: 14px;
      line-height: 20px;
      vertical-align: middle;
    }

    &.${classPrefix}--disabled {
      cursor: not-allowed;
      color: #c6c6c6;
    }

    &.${classPrefix}--block {
      display: flex;
    }
  `;

  return (
    <label onClick={onClick} className={classNames} style={style} css={CheckboxStyle} {...props}>
      <input type="checkbox" name={name} checked={check} disabled={disabled} value={value} onChange={handleChange} />
      <span className={`${classPrefix}--checkmark`}>
        {check ? (
          !error ? (
            disabled ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" fill="#F9FAFB" stroke="#DFE3E8" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.31476 11.8585L3.13295 8.4415C2.95568 8.2535 2.95568 7.9475 3.13295 7.7575L3.77568 7.0745C3.95295 6.8865 4.24113 6.8865 4.4184 7.0745L6.63657 9.4665L11.5811 4.1415C11.7584 3.9535 12.0465 3.9535 12.2238 4.1415L12.8665 4.8255C13.0438 5.0135 13.0438 5.3205 12.8665 5.5075L6.95748 11.8585C6.78021 12.0465 6.49203 12.0465 6.31476 11.8585Z"
                  fill="#919EAB"
                />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2.5" y="2.5" width="15" height="15" rx="2" fill="#8A3FFC" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.75 13.4375L5.625 10.3375L6.61875 9.35625L8.75 11.4688L13.3812 6.875L14.375 7.8625L8.75 13.4375Z"
                  fill="white"
                />
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="5" y="6" width="10" height="8">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.75 13.4375L5.625 10.3375L6.61875 9.35625L8.75 11.4688L13.3812 6.875L14.375 7.8625L8.75 13.4375Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0)"></g>
              </svg>
            )
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5ZM3.75 16.25V3.75H16.25V16.25H3.75Z"
                fill={theme.palettes.red[9]}
              />
            </svg>
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
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5ZM3.75 16.25V3.75H16.25V16.25H3.75Z"
              fill={theme.palettes.red[9]}
            />
          </svg>
        )}
      </span>
      {label ? (
        <span className={`${classPrefix}--text`} style={{ color: labelColor }}>
          {label}
        </span>
      ) : null}
    </label>
  );
};
