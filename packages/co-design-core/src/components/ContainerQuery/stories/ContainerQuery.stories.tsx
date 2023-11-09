import React from 'react';
import { ContainerQuery } from '../ContainerQuery';
import { View } from '../../View';
import { Stack } from '../../Stack';

export default {
  title: '@co-design/core/ContainerQuery',
  component: ContainerQuery,
};

export const Default = () => {
  const highlight = { color: 'blue' };
  return (
    <Stack
      co={{
        width: '100%',
        containerType: 'inline-size',
      }}
    >
      <ContainerQuery largerThan={900} style={highlight}>
        <View>largerThan 900</View>
      </ContainerQuery>
      <ContainerQuery largerThan={1000} style={highlight}>
        <View>largerThan 1000</View>
      </ContainerQuery>
      <ContainerQuery smallerThan={1000} style={highlight}>
        <View>smallerThan 1000</View>
      </ContainerQuery>
    </Stack>
  );
};
