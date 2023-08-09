import React from 'react';
import { Switch } from '../Switch';

export default {
  title: '@co-design/core/Switch',
  component: Switch,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    size: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    color: {
      options: ['purple', 'blue', 'red', 'gray'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    size: 'medium',
    color: 'purple',
  },
};

export const Default = (props) => {
  return <Switch {...props} />;
};
