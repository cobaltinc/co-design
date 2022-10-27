import React from 'react';
import { RingProgress } from '../RingProgress';

export default {
  title: '@co-design/primitive/RingProgress',
  component: RingProgress,
  argTypes: {
    value: {
      defaultValue: 20,
      control: { type: 'number' },
    },
    color: {
      defaultValue: 'purple',
      options: ['purple', 'gray', 'red', 'blue', 'orange', 'green'],
      control: { type: 'inline-radio' },
    },
    size: {
      defaultValue: 50,
      control: { type: 'number' },
    },
    thickness: {
      defaultValue: 4,
      control: { type: 'number' },
    },
    roundCaps: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ width: 600, padding: 24 }}>
      <RingProgress {...props} />
    </div>
  );
};

export const MultipleSection = (props) => {
  return (
    <div style={{ width: 600, padding: 24 }}>
      <RingProgress
        {...props}
        sections={[
          { value: 20, color: 'purple' },
          { value: 15, color: 'green' },
          { value: 30, color: 'orange' },
          { value: 20, color: 'blue' },
        ]}
      />
    </div>
  );
};
