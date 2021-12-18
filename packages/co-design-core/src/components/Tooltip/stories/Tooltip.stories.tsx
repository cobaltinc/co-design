import React from 'react';
import { Center } from '../../Center';
import { Tooltip } from '../Tooltip';

export default {
  title: '@co-design/core/Tooltip',
  component: Tooltip,
  argTypes: {
    label: {
      defaultValue: 'Peek-A-Boo',
      control: { type: 'text' },
    },
    colorScheme: {
      options: ['light', 'dark'],
      control: { type: 'inline-radio' },
    },
    withArrow: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
    placement: {
      defaultValue: 'bottom',
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
      defaultValue: 'hover',
      options: ['hover', 'click', 'focus'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = (props) => {
  return (
    <Center style={{ width: 500, height: 500 }}>
      <Tooltip placement="bottom" label="Test" {...props}>
        <button>Tooltip</button>
      </Tooltip>
    </Center>
  );
};
