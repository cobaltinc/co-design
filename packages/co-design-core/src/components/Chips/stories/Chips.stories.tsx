import React from 'react';
import { Chip } from '../Chip';
import { Chips } from '../Chips';

export default {
  title: '@co-design/core/Chips',
  component: Chips,
  argTypes: {
    size: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    color: {
      options: ['purple', 'gray', 'red', 'blue', 'orange', 'green'],
      control: { type: 'inline-radio' },
    },
    spacing: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    radius: {
      options: ['small', 'medium', 'large', 'round'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    size: 'small',
    color: 'purple',
    spacing: 'small',
    radius: 'medium',
  },
};

export const Default = {
  render: (props) => {
    return (
      <Chips {...props}>
        <Chip value="react">React</Chip>
        <Chip value="ng">Angular</Chip>
        <Chip value="svelte">Svelte</Chip>
        <Chip value="vue">Vue</Chip>
      </Chips>
    );
  },
};

export const Multiple = {
  render: (props) => {
    return (
      <Chips {...props} multiple>
        <Chip value="react">React</Chip>
        <Chip value="ng">Angular</Chip>
        <Chip value="svelte">Svelte</Chip>
        <Chip value="vue">Vue</Chip>
      </Chips>
    );
  },
};
