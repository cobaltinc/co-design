import React from 'react';
import { CloseButton } from '../CloseButton';

export default {
  title: '@co-design/core/CloseButton',
  component: CloseButton,
  argTypes: {
    size: {
      options: ['xsmall', 'small', 'medium', 'large'],
      control: { type: 'inline-radio' },
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'ghost', 'ghost-light', 'text', 'link', 'critical'],
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
    variant: 'primary',
    loading: false,
    disabled: false,
  },
};

export const Default = {
  render: (props) => {
    return <CloseButton {...props} />;
  },
};
