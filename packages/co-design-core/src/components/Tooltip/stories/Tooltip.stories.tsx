import React, { useState } from 'react';
import { StoryObj } from '@storybook/react';
import { Center } from '../../Center';
import { Tooltip } from '../Tooltip';
import { Popover } from '../../Popover';
import { Button } from '../../Button';
import { Menu } from '../../Menu';
import { useToggle } from '@co-design/hooks';

export default {
  title: '@co-design/core/Tooltip',
  component: Tooltip,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    withArrow: {
      control: { type: 'boolean' },
    },
    placement: {
      options: [
        'top-left',
        'top',
        'top-right',
        'left-top',
        'left',
        'left-bottom',
        'right-top',
        'right',
        'right-bottom',
        'bottom-left',
        'bottom',
        'bottom-right',
      ],
      control: { type: 'inline-radio' },
    },
    trigger: {
      options: ['hover', 'click', 'focus'],
      control: { type: 'inline-radio' },
    },
    colorScheme: {
      options: [undefined, 'light', 'dark'],
      control: { type: 'inline-radio' },
    },
    title: {
      options: [undefined, 'title'],
      control: { type: 'text' },
    },
  },
  args: {
    label: 'Peek-A-Boo',
    withArrow: true,
    placement: 'bottom',
    trigger: 'hover',
    children: <button>Tooltip</button>,
  },
  decorators: [
    (Story) => (
      <Center style={{ width: 500, height: 500 }}>
        <Story />
      </Center>
    ),
  ],
};

export const Default = {};

export const WithTitle = {
  args: {
    title: 'Title',
  },
};

export const WithPopover: StoryObj = {
  render: (arg) => {
    const [visibleFlag, toggleVisibleFlag] = useToggle(false);
    const [visible, setVisible] = useState(false);

    return (
      <>
        <Popover
          placement="bottom"
          content={
            <Menu>
              <Menu.Item>1</Menu.Item>
              <Menu.Item>2</Menu.Item>
            </Menu>
          }
        >
          <Tooltip
            flag={visibleFlag}
            onChangeVisible={(currentVisible) => {
              setVisible(currentVisible);
            }}
            label="Peek-A-Boo"
            {...arg}
          >
            <Button
              onClick={() => {
                if (visible) {
                  toggleVisibleFlag();
                }
              }}
            >
              hello
            </Button>
          </Tooltip>
        </Popover>
      </>
    );
  },
};
