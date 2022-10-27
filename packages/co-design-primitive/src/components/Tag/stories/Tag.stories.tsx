import React from 'react';
import { Tag } from '../Tag';

export default {
  title: '@co-design/primitive/Tag',
  component: Tag,
  argTypes: {
    color: {
      defaultValue: 'purple',
      options: ['purple', 'red', 'blue', 'gray'],
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
