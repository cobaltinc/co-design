import React from 'react';
import { useLoading } from '../useLoading';

export default {
  title: '@co-design/archetype/useLoading',
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const Default = () => {
  const [loading, handler] = useLoading(sleep);

  return (
    <div>
      <div>
        <button onClick={() => handler(2000)}>Start</button>
      </div>
      <div>Loading: {`${loading}`}</div>
    </div>
  );
};
