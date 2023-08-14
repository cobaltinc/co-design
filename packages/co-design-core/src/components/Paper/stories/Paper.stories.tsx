import React from 'react';
import { Paper } from '../Paper';

export default {
  title: '@co-design/core/Paper',
  component: Paper,
  argTypes: {
    shadow: {
      options: ['none', 'xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    padding: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    radius: {
      options: ['small', 'medium', 'large', 'round', 'circular'],
      control: { type: 'inline-radio' },
    },
    withBorder: {
      control: { type: 'boolean' },
    },
  },
  args: {
    shadow: 'none',
    padding: 'medium',
    radius: 'medium',
    withBorder: true,
  },
};

export const Default = {
  render: (props) => {
    return (
      <div style={{ width: 300, padding: 24 }}>
        <Paper {...props}>Paper</Paper>
      </div>
    );
  },
};
