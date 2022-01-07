import React, { useEffect, useRef } from 'react';
import { CoComponentProps } from '@co-design/core';
import { Toast } from '../Toast';
import { CoColor, CoPalette } from '@co-design/styles';

export interface ToastProps {
  id?: string;
  color?: CoPalette | CoColor | string;
  className?: string;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  loading?: boolean;
  message: React.ReactNode;
  autoClose?: boolean | number;
  closable?: boolean;
  onClose?(props: ToastProps): void;
  onOpen?(props: ToastProps): void;
}

export interface ToastContainerProps extends CoComponentProps {
  toast: ToastProps;
  onHide(id: string): void;
  autoClose: false | number;
}

function getAutoClose(autoClose: boolean | number, toast: ToastProps) {
  if (typeof toast.autoClose === 'number') {
    return toast.autoClose;
  }

  if (toast.autoClose === false || autoClose === false) {
    return false;
  }

  return autoClose;
}

export default function ToastContainer({ className, style, toast, autoClose, onHide }: ToastContainerProps) {
  const autoCloseTimeout = getAutoClose(autoClose, toast);
  const hideTimeout = useRef<number>();

  const handleHide = () => {
    onHide(toast.id);
    window.clearTimeout(hideTimeout.current);
  };

  const cancelDelayedHide = () => {
    clearTimeout(hideTimeout.current);
  };

  const handleDelayedHide = () => {
    if (typeof autoCloseTimeout === 'number') {
      hideTimeout.current = window.setTimeout(handleHide, autoCloseTimeout);
    }
  };

  useEffect(() => {
    if (typeof toast.onOpen === 'function') {
      toast.onOpen(toast);
    }
  }, []);

  useEffect(() => {
    handleDelayedHide();
    return cancelDelayedHide;
  }, [autoClose, toast.autoClose]);

  return (
    <Toast
      style={style}
      className={className}
      title={toast.title}
      onClose={handleHide}
      color={toast.color}
      icon={toast.icon}
      loading={toast.loading}
      closable={toast.closable}
      onMouseEnter={cancelDelayedHide}
      onMouseLeave={handleDelayedHide}
    >
      {toast.message}
    </Toast>
  );
}

ToastContainer.displayName = '@co-design/Toast/ToastContainer';
