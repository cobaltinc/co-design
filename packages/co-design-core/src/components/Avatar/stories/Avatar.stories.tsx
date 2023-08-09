import React from 'react';
import { Avatar } from '../Avatar';

export default {
  title: '@co-design/core/Avatar',
  component: Avatar,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    src: {
      control: { type: 'text' },
    },
    shape: {
      options: ['square', 'round', 'circle'],
      control: { type: 'inline-radio' },
    },
    size: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    color: {
      options: ['purple', 'blue', 'red', 'gray'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    src: 'https://picsum.photos/600/400',
    shape: 'circle',
    size: 'medium',
    color: 'purple',
  },
};

export const Default = (props) => {
  return (
    <div>
      <Avatar {...props} />
    </div>
  );
};

export const OverrideStyles = (props) => {
  return (
    <div>
      Grayscale filter
      <Avatar
        {...props}
        src="https://picsum.photos/400/400"
        overrideStyles={{
          image: {
            filter: 'grayscale(80%)',
          },
        }}
      />
    </div>
  );
};
