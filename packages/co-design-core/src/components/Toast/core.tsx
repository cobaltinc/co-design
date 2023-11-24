import React from 'react';
import ReactDOM from 'react-dom';
import { ToastProps, ToastType } from './Toast';
import ToastArea from './ToastArea';
import { guid } from '../../utils';

export type ToastOptionType = {
  type: ToastType;
  duration?: number;
  close?: boolean;
  closeOnTimeout?: boolean;
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
      closeOnTimeout: option.closeOnTimeout,
    };
    this.toasts = [...this.toasts, newToast];
  }

  removeToast(id: string) {
    this.toasts = this.toasts.filter((toast) => toast.id !== id);
    this.renderToast();
  }

  show(message: string, option?: ToastOptionType) {
    const defaultOption = { type: 'base', duration: 3000, close: false, closeOnTimeout: true };
    this.createPortal();
    this.createToast(message, { ...defaultOption, ...option });
    this.renderToast();
  }

  primary(message: string, option?: Omit<ToastOptionType, 'type'>) {
    const defaultOption = { duration: 3000, close: false, closeOnTimeout: true };
    this.show(message, { type: 'primary', ...defaultOption, ...option });
  }

  success(message: string, option?: Omit<ToastOptionType, 'type'>) {
    const defaultOption = { duration: 3000, close: false, closeOnTimeout: true };
    this.show(message, { type: 'success', ...defaultOption, ...option });
  }

  error(message: string, option?: Omit<ToastOptionType, 'type'>) {
    const defaultOption = { duration: 3000, close: false, closeOnTimeout: true };
    this.show(message, { type: 'critical', ...defaultOption, ...option });
  }

  warning(message: string, option?: Omit<ToastOptionType, 'type'>) {
    const defaultOption = { duration: 3000, close: false, closeOnTimeout: true };
    this.show(message, { type: 'warning', ...defaultOption, ...option });
  }
}

const core = new ToastCore();
export default core;
