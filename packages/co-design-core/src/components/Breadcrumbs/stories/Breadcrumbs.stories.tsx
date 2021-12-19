import React from 'react';
import { Text } from '../../Text';
import { Breadcrumbs } from '../Breadcrumbs';

export default {
  title: '@co-design/core/Breadcrumbs',
  component: Breadcrumbs,
};

export const Default = () => {
  return (
    <Breadcrumbs separator="/">
      <Text>Co Design</Text>
      <Text>Components</Text>
      <Text>Breadcrumbs</Text>
    </Breadcrumbs>
  );
};
