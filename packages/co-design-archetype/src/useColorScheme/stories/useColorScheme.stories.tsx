import React from 'react';
import { useColorScheme } from '../useColorScheme';

export default {
  title: '@co-design/archetype/useColorScheme',
};

export const Default = () => {
  const scheme = useColorScheme();

  return (
    <div>
      <div>{scheme}</div>
    </div>
  );
};
