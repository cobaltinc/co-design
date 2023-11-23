import React from 'react';
import { RingProgress2 } from '../RingProgress2';

export default {
  title: '@co-design/core/RingProgress2',
  component: RingProgress2,
  argTypes: {
    value: {
      control: { type: 'number' },
    },
    color: {
      options: [undefined, 'purple', 'gray', 'red', 'blue', 'orange', 'green'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    thickness: {
      control: { type: 'number' },
    },
    roundCaps: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
    labelPosition: {
      options: ['bottom', 'side'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    value: 20,
    roundCaps: false,
    labelPosition: 'bottom',
  },
};

export const Default = {
  render: (props) => {
    return (
      <div style={{ width: 600, padding: 24 }}>
        <RingProgress2 {...props} />
      </div>
    );
  },
};

export const Label = {
  render: (props) => {
    return (
      <div style={{ width: 600, padding: 24 }}>
        <RingProgress2 label="Label" {...props} />
      </div>
    );
  },
};
