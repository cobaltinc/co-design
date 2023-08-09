import React from 'react';
import { Tabs } from '../Tabs';

export default {
  title: '@co-design/core/Tabs',
  component: Tabs,
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'inline-radio' },
    },
    color: {
      options: ['purple', 'blue', 'red', 'gray'],
      control: { type: 'inline-radio' },
    },
    grow: {
      control: { type: 'boolean' },
    },
  },
  args: {
    orientation: 'horizontal',
    color: 'purple',
    grow: false,
  },
};

export const Default = (props) => {
  return (
    <Tabs {...props}>
      <Tabs.Pane label="Gallery">Hi</Tabs.Pane>
      <Tabs.Pane label="Message">Hello</Tabs.Pane>
    </Tabs>
  );
};
