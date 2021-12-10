import React from 'react';
import { useIdle } from '../useIdle';

export default {
  title: '@co/hooks/useIdle',
};

export const Default = () => {
  const idle = useIdle(3000);

  return (
    <div>
      <div>Idle: {`${idle}`}</div>
    </div>
  );
};
