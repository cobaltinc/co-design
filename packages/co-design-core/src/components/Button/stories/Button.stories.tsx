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
      options: ['primary', 'secondary', 'tertiary', 'ghost', 'ghost-light', 'text', 'link', 'critical'],
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
    variant: 'primary',
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
  },
};
