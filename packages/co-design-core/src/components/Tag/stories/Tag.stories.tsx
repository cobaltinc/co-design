import React from 'react';
import { Tag } from '../Tag';

export default {
  title: '@co-design/core/Tag',
  component: Tag,
  argTypes: {
    color: {
      options: ['purple', 'red', 'blue', 'gray'],
      control: { type: 'inline-radio' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    strong: {
      control: { type: 'boolean' },
    },
  },
  args: {
    color: 'purple',
    fullWidth: false,
    strong: false,
  },
};

export const Default = {
  render: (props) => {
    return <Tag {...props}>Tag</Tag>;
  },
};
