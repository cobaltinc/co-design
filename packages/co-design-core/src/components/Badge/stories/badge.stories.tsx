import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '..';
import { useCoTheme } from '@co-design/styles';

const meta = {
  title: '@co-design/core/Badge',
  component: Badge,
  argTypes: {
    badgeContent: {
      control: {
        type: 'text',
      },
    },
    maxCount: {
      control: {
        type: 'number',
      },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  args: {
    maxCount: 99,
    size: 'medium',
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Number: Story = {
  render: (props) => {
    return <Badge badgeContent={5} {...props} />;
  },
};

export const MaxNumber: Story = {
  render: (props) => {
    return <Badge badgeContent={100} maxCount={100} {...props} />;
  },
};

export const Icon: Story = {
  render: (props) => {
    const theme = useCoTheme();
    return (
      <Badge
        {...props}
        badgeContent={
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.6466 2L6.57329 10.1133L6.29996 10.6533L6.27996 11.0867L6.14663 13.6333H3.33329L2.66663 14.6333H6.09329L8.82663 12.3667L9.15996 12.0933L9.43329 11.5533L13.5066 3.43333L10.6466 2ZM8.53996 11.1L8.46663 11.06L7.47329 10.56L11.0933 3.34L12.1666 3.88L8.53996 11.1Z"
              fill="white"
            />
          </svg>
        }
        overrideStyles={{
          badge: {
            backgroundColor: theme.foundations.tokens.color.bg['bg-primary'],
          },
        }}
      />
    );
  },
};
