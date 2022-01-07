import { createContext } from 'react';
import { ToastProps } from './ToastContainer';

export interface ToastsContextProps {
  toasts: ToastProps[];
  queue: ToastProps[];
  showToast(props: ToastProps): string;
  updateToast(id: string, props: ToastProps): void;
  hideToast(id: string): void;
  clean(): void;
  cleanQueue(): void;
}

export const ToastsContext = createContext<ToastProps>(null);
ToastsContext.displayName = '@co-design/Toast/ToastsContext';
