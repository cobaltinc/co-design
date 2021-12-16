import React from 'react';
import { Tag } from '../Tag';

export default {
  title: '@co/core/Tag',
  component: Tag,
  argTypes: {
    color: {
      defaultValue: 'purple',
      options: ['purple', 'red', 'blue', 'dark'],
      control: { type: 'inline-radio' },
    },
    fullWidth: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    strong: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  return <Tag {...props}>Tag</Tag>;
};
