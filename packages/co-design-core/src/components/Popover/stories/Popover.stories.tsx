import React, { useEffect } from 'react';
import { Modal } from '../../Modal';
import { Center } from '../../Center';
import { Popover } from '../Popover';
import { useToggle } from '@co-design/hooks';

export default {
  title: '@co-design/core/Popover',
  component: Popover,
  argTypes: {
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
    contentPadding: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    withArrow: true,
    placement: 'bottom',
    trigger: 'click',
    contentPadding: 'medium',
  },
};

const Content = () => <div>Hi! I'm popover</div>;

export const Default = (props) => {
  const [opened, toggleOpened] = useToggle(false);

  useEffect(() => {
    const handleScroll = () => toggleOpened(false);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Center style={{ width: 500, height: 500 }}>
      <Popover opened={opened} placement="bottom" content={<Content />} {...props}>
        <button onClick={toggleOpened}>Popover</button>
      </Popover>
    </Center>
  );
};

export const OverrideStyles = (props) => {
  return (
    <Center style={{ width: 500, height: 500 }}>
      <Popover
        placement="bottom"
        content={<Content />}
        {...props}
        overrideStyles={{
          arrow: {
            backgroundColor: '#333',
            borderColor: '#111',
          },
          content: {
            color: 'white',
            backgroundColor: '#333',
          },
        }}
      >
        <button>Popover</button>
      </Popover>
    </Center>
  );
};

export const InModal = (props) => {
  return (
    <Modal opened onClose={() => {}}>
      <Popover zIndex={3001} placement="bottom" content={<Content />} {...props}>
        <button>Popover</button>
      </Popover>
    </Modal>
  );
};
