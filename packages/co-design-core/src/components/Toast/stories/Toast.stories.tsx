import React from 'react';
import { Toast } from '../Toast';

export default {
  title: '@co-design/core/Toast',
  component: Toast,
  argTypes: {
    loading: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    closable: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
  },
};

export const Default = (props) => {
  return (
    <div style={{ width: 300 }}>
      <Toast title="Toast" onClose={() => {}} {...props}>
        Description
      </Toast>
    </div>
  );
};
