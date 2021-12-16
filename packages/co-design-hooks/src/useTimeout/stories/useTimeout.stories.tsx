import React from 'react';
import { useTimeout } from '../useTimeout';

export default {
  title: '@co-design/hooks/useTimeout',
};

export const Default = () => {
  const clear = useTimeout(() => {
    alert('fire!');
  }, 2000);

  return (
    <div>
      <button onClick={clear}>Clear</button>
    </div>
  );
};
