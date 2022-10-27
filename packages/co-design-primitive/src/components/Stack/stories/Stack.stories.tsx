import React from 'react';
import { Stack } from '../Stack';

export default {
  title: '@co-design/primitive/Stack',
  component: Stack,
  argTypes: {
    align: {
      defaultValue: 'start',
      options: ['start', 'center', 'end'],
      control: { type: 'inline-radio' },
    },
    spacing: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    grow: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  return (
    <>
      <Stack {...props}>
        <div style={{ width: 100, height: 100, backgroundColor: 'red' }} />
        <div style={{ width: 150, height: 100, backgroundColor: 'blue' }} />
        <div style={{ width: 100, height: 200, backgroundColor: 'green' }} />
        <div style={{ width: 200, height: 150, backgroundColor: 'gray' }} />
      </Stack>
    </>
  );
};
