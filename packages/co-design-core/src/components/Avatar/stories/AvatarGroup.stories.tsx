import React from 'react';
import { AvatarGroup } from '../AvatarGroup';
import { Avatar } from '../Avatar';

export default {
  title: '@co-design/core/AvatarGroup',
  component: AvatarGroup,
  argTypes: {
    size: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    spacing: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    limit: {
      control: { type: 'number' },
    },
    total: {
      control: { type: 'number' },
    },
  },
  args: {
    size: 'medium',
    spacing: 'large',
    limit: 3,
    total: 5,
  },
};

export const Default = (props) => {
  return (
    <div>
      <AvatarGroup {...props}>
        <Avatar src="https://picsum.photos/600/400?1" />
        <Avatar src="https://picsum.photos/600/400?2" />
        <Avatar src="https://picsum.photos/600/400?3" />
        <Avatar src="https://picsum.photos/600/400?4" />
        <Avatar src="https://picsum.photos/600/400?5" />
      </AvatarGroup>
    </div>
  );
};
