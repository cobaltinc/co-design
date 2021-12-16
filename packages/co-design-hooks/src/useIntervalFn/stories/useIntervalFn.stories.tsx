import React from 'react';
import { useIntervalFn } from '../useIntervalFn';

export default {
  title: '@co-design/hooks/useIntervalFn',
};

export const Default = () => {
  const [run, clear] = useIntervalFn(() => {
    alert('fire');
  }, 3000);

  return (
    <div>
      <button onClick={run}>run</button>
      <button onClick={clear}>clear</button>
    </div>
  );
};
