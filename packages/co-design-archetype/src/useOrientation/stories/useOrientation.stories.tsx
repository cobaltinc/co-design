import React from 'react';
import { useOrientation } from '../useOrientation';

export default {
  title: '@co-design/archetype/useOrientation',
};

export const Default = () => {
  const state = useOrientation();

  return <div>{JSON.stringify(state)}</div>;
};
