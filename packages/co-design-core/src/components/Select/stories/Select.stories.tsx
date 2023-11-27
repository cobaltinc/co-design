import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Select } from '../Select';

const meta: Meta<typeof Select> = {
  title: '@co-design/core/Select',
  component: Select,
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    size: {
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
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
    placeholder: 'Choose an option',
    size: 'medium',
    invalid: false,
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (props) => {
    const [value, setValue] = useState('');

    return (
      <div style={{ width: 800 }}>
        <Select
          {...props}
          value={value}
          onSelect={(v) => setValue(v)}
          options={['New', 'Open', 'In progress', 'Open deal', 'Connected', 'Bad timing']}
        />
        <div style={{ marginTop: '20px' }}>value: {value}</div>
      </div>
    );
  },
};

export const WithHelperText: Story = {
  render: (props) => {
    const [value, setValue] = useState('New');

    return (
      <div style={{ width: 400 }}>
        <Select
          {...props}
          value={value}
          onSelect={(v) => setValue(v)}
          label="Stage"
          options={['New', 'Open', 'In progress', 'Open deal', 'Connected', 'Bad timing']}
          helperText="This is helper text"
        />
        <div style={{ marginTop: '20px' }}>value: {value}</div>
      </div>
    );
  },
};

export const WithContentLabel: Story = {
  render: (props) => {
    const [value, setValue] = useState('New');

    return (
      <div style={{ width: 400 }}>
        <Select
          {...props}
          onSelect={(v) => setValue(v)}
          label="Stage"
          contentLabel="Select Stage"
          options={['New', 'Open', 'In progress', 'Open deal', 'Connected', 'Bad timing']}
        />
        <div style={{ marginTop: '20px' }}>value: {value}</div>
      </div>
    );
  },
};
