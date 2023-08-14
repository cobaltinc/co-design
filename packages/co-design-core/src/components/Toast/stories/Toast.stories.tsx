import React from 'react';
import { Toast } from '../Toast';

export default {
  title: '@co-design/core/Toast',
  component: Toast,
  argTypes: {
    type: {
      options: ['success', 'error', 'warning'],
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
  },
  args: {
    type: 'success',
    message: '성공했습니다.',
    duration: 1000,
  },
};

export const Default = {
  render: (props) => {
    return <Toast id="1" {...props} />;
  },
};

export const Success = {
  args: {
    type: 'success',
    message: '성공했습니다.',
  },
};

export const SuccessWithClose = {
  args: {
    type: 'success',
    message: '성공했습니다.',
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
