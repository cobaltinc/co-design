import React from 'react';
import { Input } from '../Input';

export default {
  title: '@co-design/core/Textarea',
  component: Input,
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    size: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      control: { type: 'inline-radio' },
    },
    radius: {
      options: ['small', 'medium', 'large', 'round', 'circular'],
      control: { type: 'inline-radio' },
    },
    invalid: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    multiline: {
      control: { type: 'boolean' },
    },
    maximumLength: {
      control: { type: 'number' },
    },
    flexiable: {
      control: { type: 'boolean' },
    },
  },
  args: {
    placeholder: 'Placeholder',
    size: 'medium',
    radius: 'medium',
    invalid: false,
    disabled: false,
    multiline: true,
  },
};

export const Default = {
  render: (props) => {
    return (
      <div style={{ width: 400, padding: 24 }}>
        <Input component="textarea" multiline {...props} />
      </div>
    );
  },
};

export const WithLabel = {
  render: (props) => {
    return (
      <div style={{ width: 400, padding: 24 }}>
        <Input component="textarea" multiline label="Label" {...props} />
      </div>
    );
  },
};

export const WithMaximumLength = {
  render: (props) => {
    return (
      <div style={{ width: 400, padding: 24 }}>
        <Input component="textarea" multiline maximumLength={100} {...props} />
      </div>
    );
  },
};

export const WithLabelMaximumLength = {
  render: (props) => {
    return (
      <div style={{ width: 400, padding: 24 }}>
        <Input component="textarea" multiline label="Label" maximumLength={100} {...props} />
      </div>
    );
  },
};

export const WithLabelMaximumLengthFlexible = {
  render: (props) => {
    return (
      <div style={{ width: 400, padding: 24 }}>
        <Input component="textarea" multiline label="Label" maximumLength={100} flexible={true} {...props} />
      </div>
    );
  },
};
