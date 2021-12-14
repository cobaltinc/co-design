import React from 'react';
import { View } from '../View';

export default {
  title: '@co/core/View',
  component: View,
};

export const Default = () => {
  return <View co={(theme) => ({ width: 100, height: 100, backgroundColor: theme.colors.purple[3] })} />;
};
