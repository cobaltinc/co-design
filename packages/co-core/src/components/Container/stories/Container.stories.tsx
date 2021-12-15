import React from 'react';
import { Container } from '../Container';

export default {
  title: '@co/core/Container',
  component: Container,
  argTypes: {
    size: {
      defaultValue: 'medium',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    padding: {
      defaultValue: 'spacing0',
      options: ['spacing0', 'spacing1', 'spacing2', 'spacing3', 'spacing4', 'spacing5', 'spacing6', 'spacing7', 'spacing8', 'spacing9'],
      control: { type: 'inline-radio' },
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
    <Container {...props} co={(theme) => ({ backgroundColor: theme.colorPalettes.purple[6] })}>
      Container
    </Container>
  );
};
