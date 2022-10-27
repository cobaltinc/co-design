import React from 'react';
import { Image } from '../Image';

export default {
  title: '@co-design/primitive/Image',
  component: Image,
  argTypes: {
    src: {
      defaultValue: 'https://picsum.photos/600/400',
      control: { type: 'text' },
    },
    radius: {
      defaultValue: 'small',
      options: ['small', 'medium', 'large', 'round', 'circular'],
      control: { type: 'inline-radio' },
    },
    lazy: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
    threshold: {
      defaultValue: 0.5,
      control: { type: 'number' },
    },
    width: {
      defaultValue: 400,
      control: { type: 'number' },
    },
    height: {
      defaultValue: 400,
      control: { type: 'number' },
    },
    alt: {
      defaultValue: '',
      control: { type: 'text' },
    },
    fit: {
      defaultValue: 'cover',
      options: ['cover', 'fill', 'contain'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = (props) => {
  return (
    <>
      {[...new Array(10)].map((_, index) => (
        <div key={index}>
          <Image placeholder={<div>Placeholder</div>} {...props} />
        </div>
      ))}
    </>
  );
};
