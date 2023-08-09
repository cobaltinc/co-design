import React from 'react';
import { Group } from '../Group';

export default {
  title: '@co-design/core/Group',
  component: Group,
  argTypes: {
    position: {
      options: ['left', 'center', 'right', 'apart'],
      control: { type: 'inline-radio' },
    },
    align: {
      options: ['start', 'center', 'end'],
      control: { type: 'inline-radio' },
    },
    spacing: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    direction: {
      options: ['row', 'column'],
      control: { type: 'inline-radio' },
    },
    inline: {
      control: { type: 'boolean' },
    },
    grow: {
      control: { type: 'boolean' },
    },
    noWrap: {
      control: { type: 'boolean' },
    },
  },
  args: {
    position: 'left',
    align: 'align',
    spacing: 'medium',
    direction: 'row',
    inline: false,
    grow: false,
    noWrap: false,
  },
};

export const Default = (props) => {
  return (
    <>
      <Group {...props}>
        <div style={{ width: 100, height: 100, backgroundColor: 'red' }} />
        <div style={{ width: 150, height: 100, backgroundColor: 'blue' }} />
        <div style={{ width: 100, height: 200, backgroundColor: 'green' }} />
        <div style={{ width: 200, height: 150, backgroundColor: 'gray' }} />
      </Group>
    </>
  );
};
