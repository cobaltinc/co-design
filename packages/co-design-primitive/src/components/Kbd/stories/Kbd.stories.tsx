import React from 'react';
import { Kbd } from '../Kbd';

export default {
  title: '@co-design/primitive/Kbd',
  component: Kbd,
  argTypes: {
    children: {
      defaultValue: 'Ctrl + K',
      control: { type: 'text' },
    },
  },
};

export const Default = ({ children }) => {
  return <Kbd>{children}</Kbd>;
};
