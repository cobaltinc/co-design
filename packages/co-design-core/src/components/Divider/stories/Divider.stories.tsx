import React from 'react';
import { Divider } from '../Divider';

export default {
  title: '@co-design/core/Divider',
  component: Divider,
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'inline-radio' },
    },
    variant: {
      options: ['solid', 'dashed', 'dotted'],
      control: { type: 'inline-radio' },
    },
    margin: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    label: {
      control: { type: 'text' },
    },
    labelPosition: {
      options: ['left', 'center', 'right'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    orientation: 'horizontal',
    variant: 'solid',
    margin: 'medium',
    labelPosition: 'center',
  },
};

export const Default = (props) => {
  return (
    <>
      <span style={{ verticalAlign: 'middle' }}>First</span>
      <Divider label="Test" {...props} />
      <span style={{ verticalAlign: 'middle' }}>Second</span>
    </>
  );
};
