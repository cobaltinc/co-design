import React from 'react';
import { Abc } from '../Abc';
import { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Abc>;

export default {
  title: '@co-design/core/Abc',
  component: Abc,
  decorators: [
    (Story) => (
      <div style={{ height: 10000 }}>
        <Story />
      </div>
    ),
  ],
  args: {
    children: 'Abc',
  },
} as Meta<typeof Abc>;

export const Default: Story = {};
