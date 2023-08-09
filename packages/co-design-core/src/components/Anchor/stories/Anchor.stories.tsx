import React from 'react';
import { Anchor } from '../Anchor';

export default {
  title: '@co-design/core/Anchor',
  component: Anchor,
  argTypes: {
    underlineOnHover: {
      control: { type: 'boolean' },
    },
    color: {
      options: ['purple', 'blue', 'red', 'gray'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    underlineOnHover: true,
    color: 'purple',
  },
};

export const Default = {
  render: (props) => {
    return <Anchor {...props}>https://present.do</Anchor>;
  },
};
