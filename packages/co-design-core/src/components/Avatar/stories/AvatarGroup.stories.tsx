import React from 'react';
import { AvatarGroup } from '../AvatarGroup';
import { Avatar } from '../Avatar';

export default {
  title: '@co-design/core/AvatarGroup',
  component: AvatarGroup,
  argTypes: {
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    spacing: {
      defaultValue: 'spacing4',
      options: ['spacing0', 'spacing1', 'spacing2', 'spacing3', 'spacing4', 'spacing5', 'spacing6', 'spacing7', 'spacing8', 'spacing9'],
      control: { type: 'inline-radio' },
    },
    limit: {
      defaultValue: 3,
      control: { type: 'number' },
    },
    total: {
      defaultValue: 5,
      control: { type: 'number' },
    },
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
