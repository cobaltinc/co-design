import React from 'react';
import { Stack } from '../Stack';

export default {
  title: '@co-design/core/Stack',
  component: Stack,
  argTypes: {
    align: {
      options: ['start', 'center', 'end'],
      control: { type: 'inline-radio' },
    },
    spacing: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    grow: {
      control: { type: 'boolean' },
    },
  },
  args: {
    align: 'start',
    spacing: 'medium',
    grow: false,
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
