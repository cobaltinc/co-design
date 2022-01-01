import React from 'react';
import { Divider } from '../Divider';

export default {
  title: '@co-design/core/Divider',
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
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
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
