import React from 'react';
import { Mark } from '../Mark';
import { Text } from '../../Text';
import { Heading } from '../../Heading';

export default {
  title: '@co-design/primitive/Mark',
  component: Mark,
};

export const Default = () => {
  return (
    <div>
      <Heading>
        Lorem <Mark color="blue">ipsum</Mark>
      </Heading>
      <Text>
        Lorem ipsum dolor sit amet, <Mark>consectetur adipiscing</Mark> elit.
      </Text>
    </div>
  );
};
