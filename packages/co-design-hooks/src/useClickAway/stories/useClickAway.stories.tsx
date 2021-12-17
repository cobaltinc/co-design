import React, { useRef } from 'react';
import { useClickAway } from '../useClickAway';

export default {
  title: '@co-design/hooks/useClickAway',
};

export const Default = () => {
  const ref = useClickAway<HTMLDivElement>(() => {
    alert(`Click away from red box!`);
  });

  return (
    <div>
      <div ref={ref} style={{ width: 100, height: 100, backgroundColor: 'red' }} />
    </div>
  );
};
