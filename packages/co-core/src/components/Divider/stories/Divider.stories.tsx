import React from 'react';
import { Divider } from '../Divider';

export default {
  title: '@co/core/Divider',
  component: Divider,
  argTypes: {
    orientation: {
      defaultValue: 'horizontal',
      options: ['horizontal', 'vertical'],
      control: { type: 'inline-radio' },
    },
    variant: {
      defaultValue: 'solid',
      options: ['solid', 'dashed', 'dotted'],
      control: { type: 'inline-radio' },
    },
    margin: {
      defaultValue: 'spacing3',
      options: ['spacing0', 'spacing1', 'spacing2', 'spacing3', 'spacing4', 'spacing5', 'spacing6', 'spacing7', 'spacing8', 'spacing9'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = (props) => {
  return (
    <>
      <span style={{ verticalAlign: 'middle' }}>First</span>
      <Divider {...props} />
      <span style={{ verticalAlign: 'middle' }}>Second</span>
    </>
  );
};
