import type { Meta, StoryObj } from '@storybook/react';

import { ShieldBadge } from '..';

const meta = {
  title: '@co-design/core/ShieldBadge',
  component: ShieldBadge,
} satisfies Meta<typeof ShieldBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: {
      text: 'On Air',
      size: 12,
    },
    message: {
      text: '1,000 view',
      size: 11,
    },
  },
};
