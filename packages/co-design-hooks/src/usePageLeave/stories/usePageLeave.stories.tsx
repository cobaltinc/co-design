import React, { useState } from 'react';
import { usePageLeave } from '../usePageLeave';

export default {
  title: '@co-design/hooks/usePageLeave',
};

export const Default = () => {
  const [count, setCount] = useState(0);
  usePageLeave(() => setCount((old) => old + 1));

  return <div>Page leave count: {count}</div>;
};
