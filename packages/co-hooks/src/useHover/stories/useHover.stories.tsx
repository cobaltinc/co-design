import React, { useRef } from 'react';
import { useHover } from '../useHover';

export default {
  title: '@co/hooks/useHover',
};

// FIXME: Not working
export const Default = () => {
  const ref = useRef<HTMLDivElement>();
  const state = useHover(ref);

  return (
    <div>
      <div ref={ref} style={{ display: 'inline-block', width: 100, height: 100, backgroundColor: 'red' }} />
      <div>Hover: {`${state}`}</div>
    </div>
  );
};
