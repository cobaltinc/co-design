import React from 'react';
import { Heading } from '../Heading';

export default {
  title: '@co-design/core/Heading',
  component: Heading,
  argTypes: {
    level: {
      options: [1, 2, 3, 4, 5, 6],
      control: { type: 'inline-radio' },
    },
    inline: {
      control: { type: 'boolean' },
    },
    strong: {
      control: { type: 'boolean' },
    },
    underline: {
      control: { type: 'boolean' },
    },
    align: {
      options: ['left', 'center', 'right'],
      control: { type: 'inline-radio' },
    },
    color: {
      control: { type: 'color' },
    },
  },
  args: {
    level: 1,
    inline: false,
    strong: false,
    underline: false,
  },
};

export const Default = {
  render: (props) => {
    return <Heading {...props}>Heading</Heading>;
  },
};
