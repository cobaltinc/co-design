import React from 'react';
import { Chip } from '../Chip';
import { Chips } from '../Chips';

export default {
  title: '@co-design/core/Chips',
  component: Chips,
};

export const Default = () => {
  return (
    <Chips>
      <Chip value="react">React</Chip>
      <Chip value="ng">Angular</Chip>
      <Chip value="svelte">Svelte</Chip>
      <Chip value="vue">Vue</Chip>
    </Chips>
  );
};
