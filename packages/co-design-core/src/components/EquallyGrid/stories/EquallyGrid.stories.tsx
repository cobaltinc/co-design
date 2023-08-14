import React from 'react';
import { View } from '../../View';
import { EquallyGrid } from '../EquallyGrid';

export default {
  title: '@co-design/core/EquallyGrid',
  component: EquallyGrid,
  argTypes: {
    cols: {
      control: { type: 'number' },
    },
    spacing: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    cols: 3,
    spacing: 'medium',
  },
};

const Box = () => {
  return <View co={(theme) => ({ backgroundColor: theme.primaryColor, width: '100%', height: 100 })} />;
};

export const Default = {
  render: (props) => {
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
  },
};
