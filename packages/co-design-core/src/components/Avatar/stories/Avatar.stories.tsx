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
      defaultValue: 'https://picsum.photos/600/400',
      control: { type: 'text' },
    },
    shape: {
      defaultValue: 'circle',
      options: ['square', 'round', 'circle'],
      control: { type: 'inline-radio' },
    },
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    color: {
      defaultValue: 'purple',
      options: ['purple', 'blue', 'red', 'dark'],
      control: { type: 'inline-radio' },
    },
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
