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
    contentPadding: {
      defaultValue: 'spacing3',
      options: ['spacing0', 'spacing1', 'spacing2', 'spacing3', 'spacing4', 'spacing5', 'spacing6', 'spacing7', 'spacing8', 'spacing9'],
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

export const Test = (props) => {
  return (
    <div style={{ height: 10000 }}>
      <div style={{ position: 'relative', top: 0, left: 0 }}>
        <Popover placement="bottom" content={<Content />} {...props}>
          <button>Popover</button>
        </Popover>
      </div>
    </div>
  );
};
