import { useToggle } from '@co-design/hooks';
import React from 'react';
import { Transition } from '../Transition';

export default {
  title: '@co-design/core/Transition',
  component: Transition,
  argTypes: {
    duration: {
      control: { type: 'number' },
    },
    transition: {
      options: [
        'fade',
        'skew-up',
        'skew-down',
        'rotate-right',
        'rotate-left',
        'slide-down',
        'slide-up',
        'slide-right',
        'slide-left',
        'scale-y',
        'scale-x',
        'scale',
        'pop',
        'pop-top-left',
        'pop-top-right',
        'pop-bottom-left',
        'pop-bottom-right',
      ],
      control: { type: 'inline-radio' },
    },
    timingFunction: {
      options: ['ease', 'ease-out', 'ease-in'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    duration: 400,
    transition: 'fade',
    timingFunction: 'ease',
  },
};

export const Default = {
  render: (props) => {
    const [state, toggle] = useToggle();
    return (
      <div>
        <button onClick={toggle}>Toggle</button>
        <Transition mounted={state} {...props}>
          {(styles) => <div style={{ width: 100, height: 100, backgroundColor: 'red', ...styles }} />}
        </Transition>
      </div>
    );
  },
};
