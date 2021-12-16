import React from 'react';
import { Group } from '../Group';

export default {
  title: '@co/core/Group',
  component: Group,
  argTypes: {
    position: {
      defaultValue: 'left',
      options: ['left', 'center', 'right', 'apart'],
      control: { type: 'inline-radio' },
    },
    align: {
      defaultValue: 'align',
      options: ['start', 'center', 'end'],
      control: { type: 'inline-radio' },
    },
    gutter: {
      defaultValue: 'spacing2',
      options: ['spacing0', 'spacing1', 'spacing2', 'spacing3', 'spacing4', 'spacing5', 'spacing6', 'spacing7', 'spacing8', 'spacing9'],
      control: { type: 'inline-radio' },
    },
    direction: {
      defaultValue: 'row',
      options: ['row', 'column'],
      control: { type: 'inline-radio' },
    },
    inline: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    grow: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    noWrap: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
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
