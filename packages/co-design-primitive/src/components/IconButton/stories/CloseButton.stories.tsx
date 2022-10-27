import React from 'react';
import { CloseButton } from '../CloseButton';

export default {
  title: '@co-design/primitive/CloseButton',
  component: CloseButton,
  argTypes: {
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    variant: {
      defaultValue: 'solid',
      options: ['solid', 'ghost', 'light-solid', 'text'],
      control: { type: 'inline-radio' },
    },
    color: {
      defaultValue: 'purple',
      options: ['purple', 'gray', 'red', 'blue'],
      control: { type: 'inline-radio' },
    },
    loading: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  return <CloseButton {...props} />;
};
