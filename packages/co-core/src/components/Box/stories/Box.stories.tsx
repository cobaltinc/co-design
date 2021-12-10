import React from 'react';
import { Box } from '../Box';

export default {
  title: '@co/core/Box',
  component: Box,
};

export const Default = () => {
  return <Box sx={{ width: 100, height: 100, backgroundColor: 'red' }} />;
};
