import React from 'react';
import { Burger } from '../Burger';

export default {
  title: '@co-design/core/Burger',
  component: Burger,
  argTypes: {
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    color: {
      options: ['purple', 'dark', 'red', 'blue'],
      control: { type: 'inline-radio' },
    },
    opened: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  return <Burger {...props} />;
};
