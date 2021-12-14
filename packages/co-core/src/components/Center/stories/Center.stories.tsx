import React from 'react';
import { Center } from '../Center';

export default {
  title: '@co/core/Center',
  component: Center,
};

export const Default = () => {
  return <Center co={{ width: 300, height: 300, backgroundColor: 'blue' }}>Centered</Center>;
};
