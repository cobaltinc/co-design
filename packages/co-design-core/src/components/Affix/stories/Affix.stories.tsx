import React from 'react';
import { Affix } from '../Affix';
import { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Affix>;

export default {
  title: '@co-design/core/Affix',
  component: Affix,
  decorators: [
    (Story) => (
      <div style={{ height: 10000 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    children: 'Affix',
  },
} as Meta<typeof Affix>;

export const Default: Story = {};
