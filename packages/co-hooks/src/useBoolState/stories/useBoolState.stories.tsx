import React from 'react';
import { useBoolState } from '../useBoolState';

export default {
  title: '@co/hooks/useBoolState',
};

export const Default = () => {
  const [state, handler] = useBoolState();

  return (
    <div>
      <div>current state: {`${state}`}</div>
      <div>
        <button onClick={handler.setTrue}>setTrue</button>
        <button onClick={handler.setFalse}>setFalse</button>
        <button onClick={handler.toggle}>toggle</button>
      </div>
    </div>
  );
};
