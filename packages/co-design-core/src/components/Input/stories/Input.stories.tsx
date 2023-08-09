import React from 'react';
import { Tooltip } from '../../Tooltip';
import { Input } from '../Input';

export default {
  title: '@co-design/core/Input',
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
  },
  args: {
    placeholder: 'Placeholder',
    size: 'medium',
    radius: 'medium',
    invalid: false,
    disabled: false,
  },
};

const Icon = () => (
  <svg viewBox="0 0 24 24">
    <path
      d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
      fill="currentColor"
    />
  </svg>
);

export const Default = (props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input {...props} />
    </div>
  );
};

export const WithIcon = (props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input icon={<Icon />} {...props} />
    </div>
  );
};

export const WithRightSection = (props) => {
  const withTooltip = (
    <Tooltip label="Tutorial" placement="bottom">
      Info
    </Tooltip>
  );

  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input icon={<Icon />} rightSection={withTooltip} rightSectionWidth={50} {...props} />
    </div>
  );
};

export const Textarea = (props) => {
  return (
    <div style={{ width: 400, padding: 24 }}>
      <Input component="textarea" multiline {...props} />
    </div>
  );
};
