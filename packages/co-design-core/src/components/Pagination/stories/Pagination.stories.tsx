import React from 'react';
import { Pagination } from '../Pagination';
import { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Pagination>;

export default {
  title: '@co-design/core/Pagination',
  component: Pagination,
  argTypes: {
    activePage: {
      control: {
        type: 'number',
      },
    },
    itemsCountPerView: {
      control: {
        type: 'number',
      },
    },
    totalItemsCount: {
      control: {
        type: 'number',
      },
    },
    showFirst: {
      control: {
        type: 'boolean',
      },
    },
    showLast: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    activePage: 1,
    itemsCountPerView: 10,
    totalItemsCount: 120,
    showFirst: true,
    showLast: true,
  },
} as Meta<typeof Pagination>;

export const Default: Story = {};

export const NoShowBullet: Story = {
  args: {
    showFirst: false,
    showLast: false,
  },
};
