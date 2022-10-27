import React from 'react';
import { useInterval } from '../useInterval';

export default {
  title: '@co-design/archetype/useInterval',
};

export const Default = () => {
  const clear = useInterval(() => {
    alert('fire');
  }, 3000);

  return (
    <div>
      <button onClick={clear}>clear</button>
    </div>
  );
};
