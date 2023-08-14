import React from 'react';
import Radio from '../Radio';
import { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Radio>;

export default {
  title: '@co-design/core/Radio',
  component: Radio,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    checked: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    block: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    label: 'Radio',
    checked: false,
    disabled: false,
    block: false,
  },
} as Meta<typeof Radio>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Block: Story = {
  args: {
    block: true,
  },
};

export const DisabledCheck: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};
