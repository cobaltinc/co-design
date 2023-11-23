import React from 'react';
import { Progress2 } from '../Progress2';

export default {
  title: '@co-design/core/Progress2',
  component: Progress2,
  argTypes: {
    value: {
      control: { type: 'number' },
    },
    label: {
      control: { type: 'text' },
    },
    labelPosition: {
      options: ['top', 'side'],
      control: { type: 'inline-radio' },
    },
    showPercent: {
      control: { type: 'boolean' },
    },
    color: {
      options: [undefined, 'purple', 'gray', 'red', 'blue', 'orange', 'green'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    radius: {
      options: ['small', 'medium', 'large', 'round', 'circular'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    value: 20,
    size: 'medium',
    radius: 'round',
    labelPosition: 'top',
    showPercent: true,
  },
};

export const Default = {
  render: (props) => {
    return (
      <div style={{ width: 600, padding: 24 }}>
        <Progress2 {...props} />
      </div>
    );
  },
};

export const Label = {
  render: (props) => {
    return (
      <div style={{ width: 600, padding: 24 }}>
        <Progress2 label="Label" {...props} />
      </div>
    );
  },
};
