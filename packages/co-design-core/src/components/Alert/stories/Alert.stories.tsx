import React from 'react';
import { Alert } from '../Alert';
import { Button } from '../../Button';
import { Stack } from '../../Stack';
import { Group } from '../../Group';

export default {
  title: '@co-design/core/Alert',
  component: Alert,
  argTypes: {
    severity: {
      options: ['base', 'info', 'success', 'warning', 'critical'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    severity: 'base',
  },
};

export const Default = {
  render: (props) => {
    return (
      <div style={{ width: 300, padding: 24 }}>
        <Alert onClose={() => {}} {...props}>
          {/* This is a alert message This is a alert message This is a alert message This is a alert message This is a alert message */}
          This is a alert message
        </Alert>
      </div>
    );
  },
};

export const WithButton = {
  render: (props) => {
    return (
      <div style={{ width: 300, padding: 24 }}>
        <Alert {...props}>
          <Group position="apart">
            <span>Alert</span>
            <Button variant="tertiary" size="xsmall">
              Label
            </Button>
          </Group>
        </Alert>
      </div>
    );
  },
};

export const WithTitle = {
  render: (props) => {
    return (
      <div style={{ width: 300, padding: 24 }}>
        <Alert title="Alert title" {...props}>
          <Stack>
            <span>Alert</span>
            <Button variant="tertiary" size="xsmall">
              Label
            </Button>
          </Stack>
        </Alert>
      </div>
    );
  },
};

export const WithClose = {
  render: (props) => {
    return (
      <div style={{ width: 300, padding: 24 }}>
        <Alert
          onClose={() => {
            console.log('close');
          }}
          {...props}
        >
          Alert
        </Alert>
      </div>
    );
  },
};
export const WithTitltAndClose = {
  render: (props) => {
    return (
      <div style={{ width: 300, padding: 24 }}>
        <Alert
          title="Alert title"
          onClose={() => {
            console.log('close');
          }}
          {...props}
        >
          Alert
        </Alert>
      </div>
    );
  },
};
