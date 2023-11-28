import React, { Children, Fragment, forwardRef } from 'react';
import { ClassNames, CoComponentProps } from '@co-design/styles';
import { View } from '../View';
import useStyles from './Stepper.style';
import { Divider } from '../Divider';

export type StepperStylesNames = ClassNames<typeof useStyles>;

export interface StepperProps extends CoComponentProps<StepperStylesNames>, React.ComponentPropsWithoutRef<'div'> {
  /**
   * Stepper 의 방향을 정합니다.
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Step Label 의 위치를 정합니다.
   */
  stepLabelPosition?: 'right' | 'bottom';

  /**
   * 현재 진행 중인 Step 의 index 를 정합니다.
   */
  activeStep?: number;

  /**
   * Step 진행 중 error 발생 시 true 로 설정하면, Stepper 가 더 이상 진행되지 않습니다.
   */
  isError?: boolean;
}

export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  ({ orientation, stepLabelPosition = 'bottom', activeStep, isError, children, className, co, overrideStyles, ...props }: StepperProps, ref) => {
    const verticalRight = orientation === 'vertical' && stepLabelPosition === 'right';
    const horizontalRight = orientation === 'horizontal' && stepLabelPosition === 'right';
    const verticalBottom = orientation === 'vertical' && stepLabelPosition === 'bottom';
    const horizontalBottom = orientation === 'horizontal' && stepLabelPosition === 'bottom';
    const isNeedGap = horizontalRight || verticalBottom;

    const { classes, cx } = useStyles({ orientation, isNeedGap }, { overrideStyles, name: 'Stepper' });

    const items = (Children.toArray(children) as React.ReactElement[]).map((child, idx) =>
      React.cloneElement(child, {
        variant: idx === activeStep ? (isError ? 'error' : 'current') : idx < activeStep ? 'finished' : 'wait',
        labelPosition: stepLabelPosition,
        className: cx(classes.child, child.props.className),
      }),
    );

    const StepWrapper = horizontalBottom || verticalRight ? 'div' : Fragment;

    return (
      <View ref={ref} className={cx(classes.root, className)} co={co} {...props}>
        {items.map((item, index) => (
          <StepWrapper key={index} {...(horizontalBottom || verticalRight ? { className: classes.stepWrapper } : {})}>
            {!!index && (
              <Divider
                strong
                orientation={orientation}
                className={cx(classes.connector, {
                  [classes.connectorActive]: index <= activeStep,
                  [classes.verticalRight]: verticalRight,
                  [classes.horizontalRight]: horizontalRight,
                  [classes.verticalBottom]: verticalBottom,
                  [classes.horizontalBottom]: horizontalBottom,
                })}
              />
            )}
            {item}
          </StepWrapper>
        ))}
      </View>
    );
  },
);

Stepper.displayName = '@co-design/core/Stepper';
