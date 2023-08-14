import React, { useState } from 'react';
import { useScrollLock } from '../useScrollLock';

export default {
  title: '@co-design/hooks/useScrollLock',
};

export const Default = () => {
  const [lock, setLock] = useState(false);
  const scrollLocked = useScrollLock(lock);

  return (
    <div style={{ width: 5000, height: 5000 }}>
      <button onClick={() => setLock((old) => !old)}>{lock ? 'Unlock' : 'Lock'}</button>
      {scrollLocked ? 'Scroll locked' : 'Scrollable'}
    </div>
  );
};
