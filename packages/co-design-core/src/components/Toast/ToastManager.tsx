import React, { useEffect } from 'react';
import Toast, { ToastType, ToastProps } from './Toast';
import './Toast.style.scss';

// export type ToastPlacementType =
//   'topLeft' |
//   'topRight' |
//   'bottomLeft' |
//   'bottomRight';

class GUID {
  static generate() {
    // tslint:disable-next-line
    const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
  }
}

export interface ToastManagerProps {
  bind(createToast: (message: string, option: ToastOptionType) => void): void;
}

export type ToastOptionType = {
  type: ToastType;
  duration: number;
};

const ToastArea = ({ bind }: ToastManagerProps) => {
  const { useState } = React;
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const createToast = (message: string, option: ToastOptionType) => {
    const guid = GUID.generate();
    const newToast = {
      id: guid,
      message,
      type: option.type,
      duration: option.duration,
    };
    setToasts((oldToasts) => [...oldToasts, newToast]);
  };

  const removeToast = (id: string) => {
    setToasts((oldToasts) => oldToasts.filter((toast) => toast.id !== id));
  };

  bind(createToast);

  return (
    <>
      {toasts.map((toast) => {
        const { id, message, type, duration } = toast;
        return <Toast id={id} message={message} type={type} duration={duration} key={id} onDone={() => removeToast(id)} />;
      })}
    </>
  );
};

export default ToastArea;
