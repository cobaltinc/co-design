import React from 'react';
import { useMediaQuery } from '../useMediaQuery';

export default {
  title: '@co-design/archetype/useMediaQuery',
};

export const Default = () => {
  const matches = useMediaQuery('(min-width: 900px)');

  return (
    <div>
      <div>(min-width: 900px) : {matches ? 'matches' : 'does not match'}</div>
    </div>
  );
};
