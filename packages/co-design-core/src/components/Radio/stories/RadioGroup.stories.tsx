import React from 'react';
import Radio from '../Radio';
import { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Radio.Group>;

export default {
  title: '@co-design/core/RadioGroup',
  component: Radio.Group,
  argTypes: {
    defaultActive: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    defaultActive: '2',
    children: [<Radio value="1" label="Radio 1" block />, <Radio value="2" label="Radio 2" block />, <Radio value="3" label="Radio 3" block />],
  },
} as Meta<typeof Radio.Group>;

export const Default: Story = {};
