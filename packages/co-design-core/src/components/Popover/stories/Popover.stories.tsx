import React from 'react';
import { Center } from '../../Center';
import { Popover } from '../Popover';

export default {
  title: '@co-design/core/Popover',
  component: Popover,
  argTypes: {
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
      defaultValue: 'click',
      options: ['hover', 'click', 'focus'],
      control: { type: 'inline-radio' },
    },
  },
};

const Content = () => <div>Hi! I'm popover</div>;

export const Default = (props) => {
  return (
    <Center style={{ width: 500, height: 500 }}>
      <Popover placement="bottom" content={<Content />} {...props}>
        <button>Popover</button>
      </Popover>
    </Center>
  );
};
