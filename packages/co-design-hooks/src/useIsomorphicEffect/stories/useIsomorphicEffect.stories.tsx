import React, { useState } from 'react';
import { useIsomorphicEffect } from '../useIsomorphicEffect';

export default {
  title: '@co-design/hooks/useIsomorphicEffect',
};

export const Default = () => {
  const [state, setState] = useState(false);
  useIsomorphicEffect(() => {
    setState(true);
  }, []);

  return <div>{state && 'mounted'}</div>;
};
