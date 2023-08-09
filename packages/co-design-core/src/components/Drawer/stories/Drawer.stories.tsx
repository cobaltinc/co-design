import { useToggle } from '@co-design/hooks';
import React from 'react';
import { Button } from '../../Button';
import { Drawer } from '../Drawer';

export default {
  title: '@co-design/core/Drawer',
  component: Drawer,
  argTypes: {
    position: {
      options: ['left', 'top', 'bottom', 'right'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge', 'full'],
      control: { type: 'inline-radio' },
    },
    shadow: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    padding: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    noFocusTrap: {
      control: { type: 'boolean' },
    },
    noScrollLock: {
      control: { type: 'boolean' },
    },
    noCloseOnClickOutside: {
      control: { type: 'boolean' },
    },
    noCloseOnEscape: {
      control: { type: 'boolean' },
    },
    trannsition: {
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
    transitionDuration: {
      control: { type: 'number' },
    },
    noOverlay: {
      control: { type: 'boolean' },
    },
    overlayOpacity: {
      control: { type: 'number' },
    },
    overlayColor: {
      control: { type: 'color' },
    },
    hideCloseButton: {
      control: { type: 'boolean' },
    },
  },
  args: {
    position: 'right',
    size: 'medium',
    shadow: 'medium',
    padding: 'medium',
    noFocusTrap: false,
    noScrollLock: false,
    noCloseOnClickOutside: false,
    noCloseOnEscape: false,
    noOverlay: false,
    hideCloseButton: false,
  },
};

export const Default = {
  render: (props) => {
    const [opened, toggleOpened] = useToggle();

    return (
      <>
        <Button onClick={toggleOpened}>Open</Button>
        <Drawer {...props} title="Drawer" opened={opened} onClose={() => toggleOpened(false)}>
          Hello, World!
        </Drawer>
      </>
    );
  },
};
