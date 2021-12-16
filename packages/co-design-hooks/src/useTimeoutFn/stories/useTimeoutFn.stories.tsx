import React from 'react';
import { useTimeoutFn } from '../useTimeoutFn';

export default {
  title: '@co-design/hooks/useTimeoutFn',
};

export const Default = () => {
  const [run, clear] = useTimeoutFn(() => {
    alert('fire!');
  }, 2000);

  return (
    <div>
      <button onClick={run}>Run</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
};
