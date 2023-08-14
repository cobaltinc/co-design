import React from 'react';
import { CloseButton } from '../CloseButton';

export default {
  title: '@co-design/core/CloseButton',
  component: CloseButton,
  argTypes: {
    size: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    variant: {
      options: ['solid', 'ghost', 'light-solid', 'text'],
      control: { type: 'inline-radio' },
    },
    color: {
      options: ['purple', 'gray', 'red', 'blue'],
      control: { type: 'inline-radio' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  args: {
    size: 'medium',
    variant: 'solid',
    color: 'purple',
    loading: false,
    disabled: false,
  },
};

export const Default = {
  render: (props) => {
    return <CloseButton {...props} />;
  },
};
