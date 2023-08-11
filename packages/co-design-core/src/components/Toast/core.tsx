import React from 'react';
import ReactDOM from 'react-dom';
import { ToastProps, ToastType } from './Toast';
import ToastArea from './ToastArea';
import { guid } from '../../utils';

export type ToastOptionType = {
  type: ToastType;
  duration: number;
};

class ToastCore {
  toasts: ToastProps[] = [];
  portal: Element | null = null;
  portalId = `co-toast-portal`;

  createPortal() {
    if (!this.portal) {
      this.portal = document.createElement('div');
      this.portal.id = this.portalId;
      document.body.appendChild(this.portal);
    }
  }

  renderToast() {
    ReactDOM.render(<ToastArea toasts={this.toasts} removeToast={(id) => this.removeToast(id)} />, this.portal);
  }

  createToast(message: string, option: ToastOptionType) {
    const id = guid();
    const newToast = {
      id,
      message,
      type: option.type,
      duration: option.duration,
    };
    this.toasts = [...this.toasts, newToast];
  }

  removeToast(id: string) {
    this.toasts = this.toasts.filter((toast) => toast.id !== id);
  }

  show(message: string, option: ToastOptionType = { type: 'default', duration: 4500 }) {
    this.createPortal();
    this.createToast(message, option);
    this.renderToast();
  }

  success(message: string, duration = 4500) {
    this.show(message, { type: 'success', duration });
  }

  error(message: string, duration = 4500) {
    this.show(message, { type: 'error', duration });
  }

  warning(message: string, duration = 4500) {
    this.show(message, { type: 'warning', duration });
  }
}

const core = new ToastCore();
export default core;
