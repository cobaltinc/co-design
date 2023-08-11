/// <reference types="@emotion/react/types/css-prop" />
/** @jsxImportSource @emotion/react */

import React, { useState } from 'react';
import classnames from './classnames';
import { css } from '@emotion/react';
import { useTimeout } from '@co-design/hooks';
import ToastIcon from './ToastIcon';

export type ToastType = 'default' | 'success' | 'error' | 'warning';

export interface ToastProps {
  id: string;
  message: string;
  type: ToastType;
  duration: number;
  close?: boolean;
  onDone?(): void;
}

export default ({ message, type = 'default', duration, close = false, onDone }: ToastProps) => {
  const prefix = 'co-toast';
  const classNames = classnames(prefix, `${prefix}--type-${type}`);

  const toastCss = css`
    .${prefix}-portal {
      position: fixed;
      top: 24px;
      right: 24px;
      max-width: 450px;
      width: 95%;
      z-index: 2000;

      @media (max-width: 500px) {
        right: 2.5%;
      }
    }

    transform: translate3d(0, -0, -0) scale(1);
    transition: all 400ms ease; // duration slow
    opacity: 0;

    &.${prefix}--container-active {
      opacity: 1;
    }

    &:first-child {
      animation: ${prefix}--move 400ms ease-out forwards;
    }

    &:not(:first-child) {
      margin-top: 8px;
    }

    @keyframes ${prefix}--move {
      0% {
        margin-top: 78px;
      }
      100% {
        margin-top: 0;
      }
    }

    .${prefix} {
      position: relative;
      display: flex;
      max-width: 450px;
      width: 100%;
      height: 70px;
      padding: 0 20px;
      align-items: center;
      font-size: 14px; // $typography-paragraph2
      color: #212b36;
      border-radius: 5px;
      border: 1px solid #cfd8eb;
      background-color: white;
      box-shadow: 0px 1px 3px rgba(63, 63, 68, 0.15), 0px 0px 0px rgba(63, 63, 68, 0.05);
      box-sizing: border-box;
      overflow: hidden;
    }

    .${prefix}--progress {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background-color: #5c6ac4; // indigo
      animation-name: ${prefix}--progress;
      animation-timing-function: linear;
      animation-fill-mode: forwards;

      @keyframes ${prefix}--progress {
        0% {
          width: 100%;
        }
        100% {
          width: 0;
        }
      }
    }
    .${prefix}--icon {
      vertical-align: middle;
    }

    .${prefix}--icon--close {
      cursor: pointer;
      position: absolute;
      right: 8px;
      top: 8px;
    }

    .${prefix}--message {
      margin-top: -2px;
      margin-left: 14px;
      vertical-align: middle;
    }

    .${prefix}--type-error .${prefix}--progress {
      background-color: #de3618; // red
    }

    .${prefix}--type-warning .${prefix}--progress {
      background-color: #ffca28; // amber
    }
  `;

  const [show, setShow] = useState(true);

  useTimeout(() => {
    if (!close) {
      setShow(false);
      setTimeout(() => {
        onDone?.();
      }, 400);
    }
  }, duration);

  const iconType = type === 'default' ? 'alert-circle' : type === 'success' ? 'check-circle' : type === 'error' ? 'close-circle' : 'alert-circle';
  const iconColor = type === 'default' ? '#D3D9E2' : type === 'success' ? '#5D6BC5' : type === 'error' ? '#BF0711' : '#FFCC33';

  return (
    <div css={toastCss} className={classnames(`${prefix}--container`, { [`${prefix}--container-active`]: show })}>
      <div className={classNames}>
        {!close ? <div className={`${prefix}--progress`} style={{ animationDuration: `${duration}ms` }} /> : null}
        <ToastIcon type={iconType} color={iconColor} size={38} className={`${prefix}--icon`} />
        <span className={`${prefix}--message`}>{message}</span>
        {close ? (
          <div onClick={onDone}>
            <ToastIcon type="close" color="#c4cdd5" size={18} className={`${prefix}--icon--close`} />
          </div>
        ) : null}
      </div>
    </div>
  );
};
