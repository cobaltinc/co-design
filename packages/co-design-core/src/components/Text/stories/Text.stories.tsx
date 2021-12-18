import React from 'react';
import { Text } from '../Text';

export default {
  title: '@co-design/core/Text',
  component: Text,
  argTypes: {
    children: {
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      control: { type: 'text' },
    },
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    strong: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    underline: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    block: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    transform: {
      options: [undefined, 'capitalize', 'uppercase', 'lowercase'],
      control: { type: 'inline-radio' },
    },
    align: {
      options: [undefined, 'left', 'center', 'right'],
      control: { type: 'inline-radio' },
    },
    lineClamp: {
      defaultValue: undefined,
      control: { type: 'number' },
    },
    color: {
      options: [undefined, 'purple', 'blue', 'red', 'dark'],
      control: { type: 'inline-radio' },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ width: 300 }}>
      <Text {...props} />
    </div>
  );
};

export const Inherit = () => {
  return (
    <div>
      <Text size="large" block>
        <Text inherit underline>
          Lorem
        </Text>{' '}
        ipsum dolor sit amet,{' '}
        <Text inherit strong color="blue">
          consectetur
        </Text>{' '}
        <Text inherit transform="uppercase">
          adipiscing
        </Text>{' '}
        elit.
      </Text>
    </div>
  );
};
