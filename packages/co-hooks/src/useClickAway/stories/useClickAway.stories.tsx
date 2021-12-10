import React, { useRef } from 'react';
import { useClickAway } from '../useClickAway';

export default {
  title: '@co/hooks/useClickAway',
};

export const Default = () => {
  const ref = useRef<HTMLDivElement>();
  useClickAway(ref, () => {
    alert(`Click away from red box!`);
  });

  return (
    <div>
      <div ref={ref} style={{ width: 100, height: 100, backgroundColor: 'red' }} />
    </div>
  );
};
