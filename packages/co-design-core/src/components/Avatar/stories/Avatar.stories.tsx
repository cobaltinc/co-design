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
    src: 'https://fastly.picsum.photos/id/786/600/400.jpg?hmac=vrVktsOjvWZxfPkgOvYp5fejC9rXMVAjyABIkuYkvso',
    shape: 'circle',
    size: 'medium',
    color: 'purple',
  },
};

export const Default = {
  render: (props) => {
    return (
      <div>
        <Avatar {...props} />
      </div>
    );
  },
};

export const OverrideStyles = {
  render: (props) => {
    return (
      <div>
        Grayscale filter
        <Avatar
          {...props}
          src="https://fastly.picsum.photos/id/786/600/400.jpg?hmac=vrVktsOjvWZxfPkgOvYp5fejC9rXMVAjyABIkuYkvso"
          overrideStyles={{
            image: {
              filter: 'grayscale(80%)',
            },
          }}
        />
      </div>
    );
  },
};
