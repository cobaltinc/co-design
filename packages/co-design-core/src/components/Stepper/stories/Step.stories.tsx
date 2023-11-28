import React from 'react';
import { Step } from '../Step';

export default {
  title: '@co-design/core/Step',
  component: Step,
  argTypes: {
    variant: {
      options: ['wait', 'current', 'finished', 'error'],
      control: { type: 'inline-radio' },
    },
    label: {
      control: { type: 'text' },
    },
    labelPosition: {
      options: ['right', 'bottom'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    variant: 'current',
    label: 'Step 1',
  },
};

export const Default = {
  render: (props) => {
    return (
      <div style={{ width: 100 }}>
        <Step {...props} index={1} />
      </div>
    );
  },
};

export const RightLabel = {
  render: (props) => {
    return (
      <div style={{ width: 100 }}>
        <Step {...props} index={1} labelPosition="right" />
      </div>
    );
  },
};

export const Icon = {
  render: (props) => {
    return (
      <div style={{ width: 100 }}>
        <Step
          {...props}
          icon={
            <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.9826 0.258435C14.3391 0.603015 14.3391 1.16169 13.9826 1.50627L5.46084 9.74156C5.10427 10.0861 4.52616 10.0861 4.1696 9.74156L0.517424 6.21215C0.160859 5.86757 0.160859 5.3089 0.517424 4.96432C0.87399 4.61974 1.4521 4.61974 1.80866 4.96432L4.81522 7.86981L12.6913 0.258435C13.0479 -0.0861451 13.626 -0.0861451 13.9826 0.258435Z"
                fill="white"
              />
            </svg>
          }
        />
      </div>
    );
  },
};
