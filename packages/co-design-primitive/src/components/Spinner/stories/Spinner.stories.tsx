import React from 'react';
import { Spinner } from '../Spinner';

export default {
  title: '@co-design/primitive/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    color: {
      control: { type: 'color' },
    },
  },
};

export const Default = (props) => {
  return <Spinner {...props} />;
};
