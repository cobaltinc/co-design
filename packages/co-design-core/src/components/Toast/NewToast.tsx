import React, { useState } from 'react';
import { useTimeout } from '@co-design/hooks';
import ToastIcon from './ToastIcon';
import useStyles from './Toast.style';

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
  const [show, setShow] = useState(true);
  const { classes, cx } = useStyles(
    {
      duration,
    },
    {
      name: 'Toast',
    },
  );

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
    <div className={cx(classes.container, { [classes.active]: show })}>
      <div className={classes.toast}>
        {!close ? <div className={cx(classes.progress, { [classes[type]]: type === 'error' || type === 'warning' })} /> : null}
        <ToastIcon type={iconType} color={iconColor} size={38} className={classes.icon} />
        <span className={classes.message}>{message}</span>
        {close ? (
          <div onClick={onDone}>
            <ToastIcon type="close" color="#c4cdd5" size={18} className={classes.close} />
          </div>
        ) : null}
      </div>
    </div>
  );
};
