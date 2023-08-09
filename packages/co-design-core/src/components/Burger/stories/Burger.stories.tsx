import React from 'react';
import { Burger } from '../Burger';

export default {
  title: '@co-design/core/Burger',
  component: Burger,
  argTypes: {
    size: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    color: {
      options: ['purple', 'gray', 'red', 'blue'],
      control: { type: 'inline-radio' },
    },
    opened: {
      control: { type: 'boolean' },
    },
  },
  args: {
    size: 'medium',
    opened: false,
  },
};

export const Default = (props) => {
  return <Burger {...props} />;
};
