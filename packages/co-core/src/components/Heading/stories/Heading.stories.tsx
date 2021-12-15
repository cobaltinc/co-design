import React from 'react';
import { Heading } from '../Heading';

export default {
  title: '@co/core/Heading',
  component: Heading,
  argTypes: {
    level: {
      defaultValue: 1,
      options: [1, 2, 3, 4, 5, 6],
      control: { type: 'inline-radio' },
    },
    inline: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    strong: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    underline: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    delete: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    color: {
      control: { type: 'color' },
    },
  },
};

export const Default = (props) => {
  return <Heading {...props}>Heading</Heading>;
};
