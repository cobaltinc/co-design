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

export const Default = {
  render: (props) => {
    return (
      <div>
        <AvatarGroup {...props}>
          <Avatar src="https://fastly.picsum.photos/id/786/600/400.jpg?hmac=vrVktsOjvWZxfPkgOvYp5fejC9rXMVAjyABIkuYkvso" />
          <Avatar src="https://fastly.picsum.photos/id/574/600/400.jpg?hmac=EQ9zsodnVQYwYosJrIVHnQ5Ekp7F9_I05f-21GwANC4" />
          <Avatar src="https://fastly.picsum.photos/id/119/600/400.jpg?hmac=83QxaIP9GpgV3_Y4_GdVJW76KdowZbCbjakQqiX56CQ" />
          <Avatar src="https://fastly.picsum.photos/id/1074/600/400.jpg?hmac=-mqpWcJSXqmfo8UkPkASvV1o1NXtm6MpwreadzQAu_o" />
          <Avatar src="https://fastly.picsum.photos/id/267/600/400.jpg?hmac=WKOJueOyFV6BQONn8kCm7lc3IOjNjFMPP6NDezAPYe0" />
        </AvatarGroup>
      </div>
    );
  },
};
