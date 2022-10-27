import React from 'react';
import { useId } from '../useId';

export default {
  title: '@co-design/archetype/useId',
};

export const Default = () => {
  const id = useId();

  return (
    <div>
      <div>{id}</div>
    </div>
  );
};
