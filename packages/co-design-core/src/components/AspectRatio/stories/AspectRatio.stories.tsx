import React from 'react';
import { AspectRatio } from '../AspectRatio';

export default {
  title: '@co-design/core/AspectRatio',
  component: AspectRatio,
  argTypes: {
    ratio: {
      control: { type: 'number' },
    },
  },
  args: {
    ratio: 16 / 9,
  },
};

export const Default = {
  render: (props) => {
    return (
      <div>
        <AspectRatio {...props} co={{ width: 800 }}>
          <img src="https://fastly.picsum.photos/id/142/800/800.jpg?hmac=eXyt1-KM--iTld7JYyjxb_Yst-dSuAKJB8KeLZndh_U" />
        </AspectRatio>
      </div>
    );
  },
};
