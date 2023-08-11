import React from 'react';
import { Toast, ToastType, ToastProps } from './Toast';
import useStyles from './ToastArea.style';

export interface ToastAreaProps {
  toasts: ToastProps[];
  removeToast(id: string): void;
}

export type ToastOptionType = {
  type: ToastType;
  duration: number;
};

const ToastArea = ({ toasts, removeToast }: ToastAreaProps) => {
  const { classes } = useStyles(null, { name: 'ToastArea' });

  return (
    <div className={classes.root}>
      {toasts.map((toast) => {
        const { id, message, type, duration } = toast;
        return <Toast id={id} message={message} type={type} duration={duration} key={id} onDone={() => removeToast(id)} />;
      })}
    </div>
  );
};

export default ToastArea;
