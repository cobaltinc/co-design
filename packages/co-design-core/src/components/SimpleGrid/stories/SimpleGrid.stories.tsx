import React from 'react';
import { View } from '../../View';
import { SimpleGrid } from '../SimpleGrid';

export default {
  title: '@co-design/core/SimpleGrid',
  component: SimpleGrid,
  argTypes: {
    cols: {
      defaultValue: 3,
      control: { type: 'number' },
    },
    spacing: {
      defaultValue: 'spacing2',
      options: ['spacing0', 'spacing1', 'spacing2', 'spacing3', 'spacing4', 'spacing5', 'spacing6', 'spacing7', 'spacing8', 'spacing9'],
      control: { type: 'inline-radio' },
    },
  },
};

const Box = () => {
  return <View co={(theme) => ({ backgroundColor: theme.primaryColor, width: '100%', height: 100 })} />;
};

export const Default = (props) => {
  return (
    <div>
      <SimpleGrid {...props}>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </SimpleGrid>
    </div>
  );
};
