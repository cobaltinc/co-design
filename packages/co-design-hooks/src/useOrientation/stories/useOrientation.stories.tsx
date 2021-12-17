import React from 'react';
import { useOrientation } from '../useOrientation';

export default {
  title: '@co-design/hooks/useOrientation',
};

export const Default = () => {
  const state = useOrientation();

  return <div>{JSON.stringify(state)}</div>;
};
