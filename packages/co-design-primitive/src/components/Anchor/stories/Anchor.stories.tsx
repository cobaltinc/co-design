import React from 'react';
import { Anchor } from '../Anchor';

export default {
  title: '@co-design/primitive/Anchor',
  component: Anchor,
  argTypes: {
    underlineOnHover: {
      defaultValue: 'true',
      control: { type: 'boolean' },
    },
    color: {
      defaultValue: 'purple',
      options: ['purple', 'blue', 'red', 'gray'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = (props) => {
  return <Anchor {...props}>https://present.do</Anchor>;
};
