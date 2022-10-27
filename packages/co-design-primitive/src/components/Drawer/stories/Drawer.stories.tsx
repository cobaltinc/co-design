import { useToggle } from '@co-design/archetype';
import React from 'react';
import { Button } from '../../Button';
import { Drawer } from '../Drawer';

export default {
  title: '@co-design/primitive/Drawer',
  component: Drawer,
  argTypes: {
    position: {
      defaultValue: 'right',
      options: ['left', 'top', 'bottom', 'right'],
      control: { type: 'inline-radio' },
    },
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge', 'full'],
      control: { type: 'inline-radio' },
    },
    shadow: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    padding: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    noFocusTrap: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    noScrollLock: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    noCloseOnClickOutside: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    noCloseOnEscape: {
      defaultValue: false,
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
      defaultValue: false,
      control: { type: 'boolean' },
    },
    overlayOpacity: {
      control: { type: 'number' },
    },
    overlayColor: {
      control: { type: 'color' },
    },
    hideCloseButton: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  const [opened, toggleOpened] = useToggle();

  return (
    <>
      <Button onClick={toggleOpened}>Open</Button>
      <Drawer {...props} title="Drawer" opened={opened} onClose={() => toggleOpened(false)}>
        Hello, World!
      </Drawer>
    </>
  );
};
