import React from 'react';
import { useKeyPress } from '../useKeyPress';

export default {
  title: '@co/hooks/useKeyPress',
};

export const Default = () => {
  const keyPressed = useKeyPress('r');

  return <div>{keyPressed && 'r key pressed'}</div>;
};
