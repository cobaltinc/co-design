import React from 'react';
import { Image } from '../Image';

export default {
  title: '@co-design/core/Image',
  component: Image,
  argTypes: {
    src: {
      control: { type: 'text' },
    },
    radius: {
      options: ['small', 'medium', 'large', 'round', 'circular'],
      control: { type: 'inline-radio' },
    },
    lazy: {
      control: { type: 'boolean' },
    },
    threshold: {
      control: { type: 'number' },
    },
    width: {
      control: { type: 'number' },
    },
    height: {
      control: { type: 'number' },
    },
    alt: {
      control: { type: 'text' },
    },
    fit: {
      options: ['cover', 'fill', 'contain'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    src: 'https://fastly.picsum.photos/id/555/600/400.jpg?hmac=X8_WXk4i6QHECXBPK0HYpi1Oz1PH230SJVWaoecqUpY',
    radius: 'small',
    lazy: true,
    threshold: 0.5,
    width: 400,
    height: 400,
    alt: '',
    fit: 'cover',
  },
};

export const Default = {
  render: (props) => {
    return (
      <>
        {[...new Array(10)].map((_, index) => (
          <div key={index}>
            <Image placeholder={<div>Placeholder</div>} {...props} />
          </div>
        ))}
      </>
    );
  },
};
