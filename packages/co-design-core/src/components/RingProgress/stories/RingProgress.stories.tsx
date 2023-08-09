import React from 'react';
import { RingProgress } from '../RingProgress';

export default {
  title: '@co-design/core/RingProgress',
  component: RingProgress,
  argTypes: {
    value: {
      control: { type: 'number' },
    },
    color: {
      options: ['purple', 'gray', 'red', 'blue', 'orange', 'green'],
      control: { type: 'inline-radio' },
    },
    size: {
      control: { type: 'number' },
    },
    thickness: {
      control: { type: 'number' },
    },
    roundCaps: {
      control: { type: 'boolean' },
    },
  },
  args: {
    value: 20,
    color: 'purple',
    size: 50,
    thickness: 4,
    roundCaps: false,
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
