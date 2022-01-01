import React from 'react';
import { View } from '../../View';
import { EquallyGrid } from '../EquallyGrid';

export default {
  title: '@co-design/core/EquallyGrid',
  component: EquallyGrid,
  argTypes: {
    cols: {
      defaultValue: 3,
      control: { type: 'number' },
    },
    spacing: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
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
      <EquallyGrid {...props}>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </EquallyGrid>
    </div>
  );
};
