import React from 'react';
import { AspectRatio } from '../AspectRatio';

export default {
  title: '@co-design/core/AspectRatio',
  component: AspectRatio,
  argTypes: {
    ratio: {
      defaultValue: 16 / 9,
      control: { type: 'number' },
    },
  },
};

export const Default = (props) => {
  return (
    <div>
      <AspectRatio {...props} co={{ width: 800 }}>
        <img src="https://picsum.photos/800" />
      </AspectRatio>
    </div>
  );
};
