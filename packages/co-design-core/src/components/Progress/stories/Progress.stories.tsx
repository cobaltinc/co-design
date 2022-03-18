import React from 'react';
import { Progress } from '../Progress';

export default {
  title: '@co-design/core/Progress',
  component: Progress,
  argTypes: {
    value: {
      defaultValue: 20,
      control: { type: 'number' },
    },
    label: {
      control: { type: 'text' },
    },
    color: {
      defaultValue: 'purple',
      options: ['purple', 'gray', 'red', 'blue', 'orange', 'green'],
      control: { type: 'inline-radio' },
    },
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    radius: {
      defaultValue: 'round',
      options: ['small', 'medium', 'large', 'round', 'circular'],
      control: { type: 'inline-radio' },
    },
    striped: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    animate: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
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
