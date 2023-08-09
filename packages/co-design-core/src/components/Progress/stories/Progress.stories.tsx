import React from 'react';
import { Progress } from '../Progress';

export default {
  title: '@co-design/core/Progress',
  component: Progress,
  argTypes: {
    value: {
      control: { type: 'number' },
    },
    label: {
      control: { type: 'text' },
    },
    color: {
      options: ['purple', 'gray', 'red', 'blue', 'orange', 'green'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    radius: {
      options: ['small', 'medium', 'large', 'round', 'circular'],
      control: { type: 'inline-radio' },
    },
    striped: {
      control: { type: 'boolean' },
    },
    animate: {
      control: { type: 'boolean' },
    },
  },
  args: {
    value: 20,
    color: 'purple',
    size: 'medium',
    radius: 'round',
    striped: false,
    animate: false,
  },
};

export const Default = (props) => {
  return (
    <div style={{ width: 600, padding: 24 }}>
      <Progress {...props} />
    </div>
  );
};

export const MultipleSection = (props) => {
  return (
    <div style={{ width: 600, padding: 24 }}>
      <Progress
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
