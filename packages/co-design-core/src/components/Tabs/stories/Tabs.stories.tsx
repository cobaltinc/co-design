import React from 'react';
import { Tabs } from '../Tabs';

export default {
  title: '@co-design/core/Tabs',
  component: Tabs,
  argTypes: {
    orientation: {
      defaultValue: 'horizontal',
      options: ['horizontal', 'vertical'],
      control: { type: 'inline-radio' },
    },
    color: {
      defaultValue: 'purple',
      options: ['purple', 'blue', 'red', 'gray'],
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
    <Tabs {...props}>
      <Tabs.Pane label="Gallery">Hi</Tabs.Pane>
      <Tabs.Pane label="Message">Hello</Tabs.Pane>
    </Tabs>
  );
};
