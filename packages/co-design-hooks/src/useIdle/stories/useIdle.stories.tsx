import React from 'react';
import { useIdle } from '../useIdle';

export default {
  title: '@co-design/hooks/useIdle',
};

export const Default = () => {
  const idle = useIdle(3000);

  return (
    <div>
      <div>Idle: {`${idle}`}</div>
    </div>
  );
};
