import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { NumberBox } from '../NumberBox';
import { NumberBoxProvider } from '../NumberBoxContext';
import { Stack } from '../../Stack';
import { Button } from '../../Button';

type Story = StoryObj<typeof NumberBox>;

export default {
  title: '@co-design/core/NumberBox',
  component: NumberBox,
  argTypes: {
    checked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    size: {
      options: ['small', 'medium'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta<typeof NumberBox>;

export const Default: Story = {
  render: (props) => {
    return (
      <NumberBoxProvider>
        <NumberBox {...props}>
          <img src="https://via.placeholder.com/150" />
        </NumberBox>
      </NumberBoxProvider>
    );
  },
};

export const MultiSelect: Story = {
  render: (props) => {
    return (
      <NumberBoxProvider>
        <Stack>
          <NumberBox {...props}>
            <img src="https://via.placeholder.com/150" />
          </NumberBox>
          <NumberBox {...props}>
            <img src="https://via.placeholder.com/150" />
          </NumberBox>
          <NumberBox {...props}>
            <img src="https://via.placeholder.com/150" />
          </NumberBox>
          <NumberBox {...props}>
            <img src="https://via.placeholder.com/150" />
          </NumberBox>
          <NumberBox {...props}>
            <img src="https://via.placeholder.com/150" />
          </NumberBox>
        </Stack>
      </NumberBoxProvider>
    );
  },
};

export const Disabled: Story = {
  render: (props) => {
    const [disabled, setDisabled] = useState(false);

    return (
      <NumberBoxProvider>
        <Stack>
          <Button
            onClick={() => {
              setDisabled((prev) => !prev);
            }}
          >
            Toggle disabled
          </Button>
          <NumberBox disabled={disabled} {...props}>
            <img src="https://via.placeholder.com/150" />
          </NumberBox>
          <NumberBox disabled={disabled} {...props}>
            <img src="https://via.placeholder.com/150" />
          </NumberBox>
        </Stack>
      </NumberBoxProvider>
    );
  },
};
