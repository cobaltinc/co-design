import React from 'react';
import { Button } from '../Button';

export default {
  title: '@co-design/core/Button',
  component: Button,
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
      options: ['purple', 'gray', 'red', 'blue', 'orange', 'green', 'dark'],
      control: { type: 'inline-radio' },
    },
    fullWidth: {
      control: { type: 'boolean' },
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
    fullWidth: false,
    loading: false,
    disabled: false,
  },
};

export const Default = {
  render: (props) => {
    return <Button {...props}>Button</Button>;
  },
};

export const OverrideStyles = {
  render: (props) => {
    return (
      <Button
        {...props}
        overrideStyles={{
          solid: {
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
  },
};
