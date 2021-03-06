import React from 'react';
import { Paper } from '../Paper';

export default {
  title: '@co-design/core/Paper',
  component: Paper,
  argTypes: {
    shadow: {
      defaultValue: 'none',
      options: ['none', 'xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    padding: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    radius: {
      defaultValue: 'medium',
      options: ['small', 'medium', 'large', 'round', 'circular'],
      control: { type: 'inline-radio' },
    },
    withBorder: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ width: 300, padding: 24 }}>
      <Paper {...props}>Paper</Paper>
    </div>
  );
};
