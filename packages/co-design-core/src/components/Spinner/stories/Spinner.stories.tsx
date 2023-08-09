import React from 'react';
import { Spinner } from '../Spinner';

export default {
  title: '@co-design/core/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    color: {
      control: { type: 'color' },
    },
  },
  args: {
    size: 'medium',
  },
};

export const Default = (props) => {
  return <Spinner {...props} />;
};
