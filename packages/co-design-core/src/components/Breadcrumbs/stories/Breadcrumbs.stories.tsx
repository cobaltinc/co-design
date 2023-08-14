import React from 'react';
import { Text } from '../../Text';
import { Breadcrumbs } from '../Breadcrumbs';

export default {
  title: '@co-design/core/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    separator: {
      control: { type: 'text' },
    },
    spacing: {
      control: { type: 'number' },
    },
  },
  args: {
    separator: '/',
    spacing: 8,
  },
};

export const Default = {
  render: (props) => {
    return (
      <Breadcrumbs {...props}>
        <Text>Co Design</Text>
        <Text>Components</Text>
        <Text>Breadcrumbs</Text>
      </Breadcrumbs>
    );
  },
};

export const OverrideStyles = {
  render: (props) => {
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
  },
};
