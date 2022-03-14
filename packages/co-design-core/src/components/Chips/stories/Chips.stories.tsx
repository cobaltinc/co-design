import React from 'react';
import { Chip } from '../Chip';
import { Chips } from '../Chips';

export default {
  title: '@co-design/core/Chips',
  component: Chips,
  argTypes: {
    size: {
      defaultValue: 'small',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    color: {
      defaultValue: 'purple',
      options: ['purple', 'gray', 'red', 'blue', 'orange', 'green'],
      control: { type: 'inline-radio' },
    },
    spacing: {
      defaultValue: 'small',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    radius: {
      defaultValue: 'medium',
      options: ['small', 'medium', 'large', 'round'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = (props) => {
  return (
    <Chips {...props}>
      <Chip value="react">React</Chip>
      <Chip value="ng">Angular</Chip>
      <Chip value="svelte">Svelte</Chip>
      <Chip value="vue">Vue</Chip>
    </Chips>
  );
};

export const Multiple = (props) => {
  return (
    <Chips {...props} multiple>
      <Chip value="react">React</Chip>
      <Chip value="ng">Angular</Chip>
      <Chip value="svelte">Svelte</Chip>
      <Chip value="vue">Vue</Chip>
    </Chips>
  );
};
