import React from 'react';
import { Container } from '../Container';

export default {
  title: '@co-design/core/Container',
  component: Container,
  argTypes: {
    size: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    padding: {
      control: { type: 'number' },
    },
    fluid: {
      control: { type: 'boolean' },
    },
    break: {
      control: { type: 'boolean' },
    },
  },
  args: {
    size: 'medium',
    padding: 0,
    fluid: false,
    break: false,
  },
};

export const Default = {
  render: (props) => {
    return (
      <Container {...props} co={(theme) => ({ backgroundColor: theme.palettes.purple[3] })}>
        Container
      </Container>
    );
  },
};
