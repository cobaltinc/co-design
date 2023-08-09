import React from 'react';
import { Center } from '../../Center';
import { Tooltip } from '../Tooltip';

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
  },
};

export const Default = {
  render: (props) => {
    return (
      <Center style={{ width: 500, height: 500 }}>
        <Tooltip {...props}>
          <button>Tooltip</button>
        </Tooltip>
      </Center>
    );
  },
};

export const WithTitle = (props) => {
  return (
    <Center style={{ width: 500, height: 500 }}>
      <Tooltip placement="bottom" title="Title" label="Peek-A-Boo" {...props}>
        <button>Tooltip</button>
      </Tooltip>
    </Center>
  );
};
