import React, { useEffect, useState } from 'react';
import { Stepper } from '../Stepper';
import { Step } from '../Step';
import { Button } from '../../Button';
import { Group } from '../../Group';

export default {
  title: '@co-design/core/Stepper',
  component: Stepper,
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'inline-radio' },
    },
    stepLabelPosition: {
      options: ['right', 'bottom'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    orientation: 'horizontal',
  },
};

const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];

export const Default = {
  render: (props) => {
    const [activeStep, setActiveStep] = useState(0);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
      if (activeStep === 3) {
        setIsError(true);
      }
    }, [activeStep]);

    return (
      <div style={{ height: 500 }}>
        <Stepper activeStep={activeStep} isError={isError} {...props}>
          {steps.map((step, index) => (
            <Step key={index} index={index + 1} label={step} />
          ))}
        </Stepper>
        <Group position="apart" co={{ marginTop: 10 }}>
          <Button
            onClick={() => {
              setActiveStep((prev) => {
                if (prev === 0) return prev;
                setIsError(false);
                return prev - 1;
              });
            }}
          >
            back
          </Button>
          <Button
            onClick={() => {
              setActiveStep((prev) => {
                if (isError) return prev;
                if (prev === steps.length - 1) return prev;
                return prev + 1;
              });
            }}
          >
            next
          </Button>
        </Group>
      </div>
    );
  },
};

export const RightLabels = {
  render: (props) => {
    return (
      <div style={{ height: 500 }}>
        <Stepper {...props} stepLabelPosition="right">
          {steps.map((step, index) => (
            <Step key={index} index={index + 1} label={step} />
          ))}
        </Stepper>
      </div>
    );
  },
};
