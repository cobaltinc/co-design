import React from 'react';
import { Kbd } from '../Kbd';

export default {
  title: '@co-design/core/Kbd',
  component: Kbd,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
  args: {
    children: 'Ctrl + K',
  },
};

export const Default = ({ children }) => {
  return <Kbd>{children}</Kbd>;
};
