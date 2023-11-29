import { Checkbox } from '../Checkbox';

export default {
  title: '@co-design/core/Checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    indeterminate: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    block: {
      control: { type: 'boolean' },
    },
    checked: {
      control: { type: 'boolean' },
    },
  },
};

export const Default = {};

export const WithLabel = {
  args: {
    label: 'hello',
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};

export const DisabledCheck = {
  args: {
    disabled: true,
    checked: true,
  },
};

export const Indeterminate = {
  args: {
    indeterminate: true,
  },
};

export const Error = {
  args: {
    error: true,
  },
};

export const ErrorCheck = {
  args: {
    error: true,
    checked: true,
  },
};

export const Block = {
  args: {
    block: true,
  },
};

export const Checked = {
  args: {
    checked: true,
  },
};
