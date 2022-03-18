import React from 'react';
import { Button } from '../Button';

export default {
  title: '@co-design/core/Button',
  component: Button,
  argTypes: {
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    variant: {
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'tertiary', 'inverse', 'transparent'],
      control: { type: 'inline-radio' },
    },
    color: {
      defaultValue: 'purple',
      options: ['purple', 'gray', 'red', 'blue', 'orange', 'green', 'dark'],
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

export const OverrideStyles = (props) => {
  return (
    <Button
      {...props}
      overrideStyles={{
        primary: {
          backgroundColor: 'black',
          '&:not(:disabled):hover': {
            backgroundColor: '#222',
          },
          '&:not(:disabled):active': {
            backgroundColor: '#444',
          },
        },
      }}
    >
      Button
    </Button>
  );
};
