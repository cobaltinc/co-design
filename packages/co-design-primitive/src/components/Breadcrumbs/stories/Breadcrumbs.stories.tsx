import React from 'react';
import { Text } from '../../Text';
import { Breadcrumbs } from '../Breadcrumbs';

export default {
  title: '@co-design/primitive/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    separator: {
      defaultValue: '/',
      control: { type: 'text' },
    },
    spacing: {
      defaultValue: 8,
      control: { type: 'number' },
    },
  },
};

export const Default = (props) => {
  return (
    <Breadcrumbs {...props}>
      <Text>Co Design</Text>
      <Text>Components</Text>
      <Text>Breadcrumbs</Text>
    </Breadcrumbs>
  );
};

export const OverrideStyles = (props) => {
  return (
    <Breadcrumbs
      {...props}
      overrideStyles={{
        root: {
          border: '1px solid blue',
        },
        breadcrumb: {
          border: '1px solid red',
        },
        separator: {
          border: '1px solid green',
        },
      }}
    >
      <Text>Co Design</Text>
      <Text>Components</Text>
      <Text>Breadcrumbs</Text>
    </Breadcrumbs>
  );
};
