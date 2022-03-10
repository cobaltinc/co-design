import React from 'react';
import { Switch } from '../Switch';

export default {
  title: '@co-design/core/Switch',
  component: Switch,
  argTypes: {
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    color: {
      defaultValue: 'purple',
      options: ['purple', 'blue', 'red', 'gray'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = (props) => {
  return <Switch {...props} />;
};
