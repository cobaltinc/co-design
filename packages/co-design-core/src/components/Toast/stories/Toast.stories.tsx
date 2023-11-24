import React from 'react';
import { Toast } from '../Toast';

export default {
  title: '@co-design/core/Toast',
  component: Toast,
  argTypes: {
    type: {
      options: ['base', 'primary', 'success', 'error', 'warning'],
      control: { type: 'inline-radio' },
    },
    message: {
      control: { type: 'text' },
    },
    duration: {
      control: { type: 'number' },
    },
    close: {
      control: { type: 'boolean' },
    },
    closeOnTimeout: {
      control: { type: 'boolean' },
    },
  },
  args: {
    type: 'base',
    message: 'This is a toast message',
    duration: 3000,
  },
};

export const Default = {
  render: (props) => {
    return <Toast id="1" {...props} />;
  },
};

export const WithAction = {
  render: (props) => {
    return (
      <Toast
        id="1"
        action={{
          label: 'Undo',
          onAction: () => {
            console.log('action');
          },
        }}
        {...props}
      />
    );
  },
};

export const Success = {
  args: {
    type: 'success',
    message: 'This is a toast message',
  },
};

export const SuccessWithClose = {
  args: {
    type: 'success',
    message: 'This is a toast message',
    close: true,
  },
};

export const Error = {
  args: {
    type: 'error',
    message: '문제가 발생했습니다. 계속해서 같은 문제가 발생한다면 present@present.do로 연락바랍니다.',
  },
};

export const ErrorWithClose = {
  args: {
    type: 'error',
    message: '문제가 발생했습니다. 계속해서 같은 문제가 발생한다면 present@present.do로 연락바랍니다.',
    close: true,
  },
};

export const Warning = {
  args: {
    type: 'warning',
    message: '문제가 발생했습니다. 계속해서 같은 문제가 발생한다면 present@present.do로 연락바랍니다.',
  },
};

export const WarningWithClose = {
  args: {
    type: 'warning',
    message: '문제가 발생했습니다. 계속해서 같은 문제가 발생한다면 present@present.do로 연락바랍니다.',
    close: true,
  },
};

export const CloseOnlyInteraction = {
  args: {
    type: 'success',
    message: 'This is a toast message',
    close: true,
    closeOnTimeout: false,
  },
};
