import React from 'react';
import ReactDOM from 'react-dom';
import { ToastProps, ToastType } from './Toast';
import ToastArea from './ToastArea';
import { guid } from '../../utils';

export type ToastOptionType = {
  type: ToastType;
  duration?: number;
  close?: boolean;
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
      close: option.close,
    };
    this.toasts = [...this.toasts, newToast];
  }

  removeToast(id: string) {
    this.toasts = this.toasts.filter((toast) => toast.id !== id);
    this.renderToast();
  }

  show(message: string, option: ToastOptionType = { type: 'default', duration: 4500, close: false }) {
    this.createPortal();
    this.createToast(message, option);
    this.renderToast();
  }

  success(message: string, option: Omit<ToastOptionType, 'type'> = { duration: 4500, close: false }) {
    this.show(message, { type: 'success', ...option });
  }

  error(message: string, option: Omit<ToastOptionType, 'type'> = { duration: 4500, close: false }) {
    this.show(message, { type: 'error', ...option });
  }

  warning(message: string, option: Omit<ToastOptionType, 'type'> = { duration: 4500, close: false }) {
    this.show(message, { type: 'warning', ...option });
  }
}

const core = new ToastCore();
export default core;
