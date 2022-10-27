import React from 'react';
import { useOs } from '../useOs';

export default {
  title: '@co-design/archetype/useOs',
};

export const Default = () => {
  const os = useOs();

  return <div>{os}</div>;
};
