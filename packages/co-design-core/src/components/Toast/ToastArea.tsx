import React from 'react';
import { Toast, ToastProps } from './Toast';
import useStyles from './ToastArea.style';

export interface ToastAreaProps {
  toasts: ToastProps[];
  removeToast(id: string): void;
}

const ToastArea = ({ toasts, removeToast }: ToastAreaProps) => {
  const { classes } = useStyles(null, { name: 'ToastArea' });

  return (
    <div className={classes.root}>
      {toasts.map((toast) => {
        const { id, message, type, duration, close, closeOnTimeout } = toast;
        return (
          <Toast
            id={id}
            message={message}
            type={type}
            duration={duration}
            close={close}
            closeOnTimeout={closeOnTimeout}
            key={id}
            onDone={() => removeToast(id)}
          />
        );
      })}
    </div>
  );
};

export default ToastArea;
