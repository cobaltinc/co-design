import React from 'react';
import { Button } from '../Button';

export default {
  title: '@co/core/Button',
  component: Button,
  argTypes: {
    variant: {
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'tertiary', 'inverse'],
      control: { type: 'inline-radio' },
    },
    color: {
      defaultValue: 'purple',
      options: ['purple', 'dark', 'red', 'blue'],
      control: { type: 'inline-radio' },
    },
    fullWidth: {
      defaultValue: false,
      control: { type: 'boolean' },
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
  return <Button {...props}>Button</Button>;
};
