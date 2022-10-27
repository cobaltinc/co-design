import React from 'react';
import { Container } from '../Container';

export default {
  title: '@co-design/primitive/Container',
  component: Container,
  argTypes: {
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    padding: {
      defaultValue: 0,
      control: { type: 'number' },
    },
    fluid: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    break: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  return (
    <Container {...props} co={(theme) => ({ backgroundColor: theme.palettes.purple[3] })}>
      Container
    </Container>
  );
};
