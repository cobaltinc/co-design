import React from 'react';
import { useOs } from '../useOs';

export default {
  title: '@co/hooks/useOs',
};

export const Default = () => {
  const os = useOs();

  return <div>{os}</div>;
};
