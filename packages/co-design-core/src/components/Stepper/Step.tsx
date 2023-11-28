import React, { forwardRef } from 'react';
import { ClassNames, CoComponentProps } from '@co-design/styles';
import { View } from '../View';
import useStyles from './Step.style';
import { Badge } from '../Badge';
import { Typography } from '../Typography';
import { CheckIcon } from './CheckIcon';
import { AlertTriangleIcon } from './AlertTriangleIcon';

export type StepStylesNames = ClassNames<typeof useStyles>;

export interface StepProps extends CoComponentProps<StepStylesNames>, React.ComponentPropsWithoutRef<'div'> {
  /** Step 컴포넌트의 상태를 정합니다. */
  variant?: 'wait' | 'current' | 'finished' | 'error';

  /** Step 컴포넌트의 아이콘을 정합니다. */
  icon?: React.ReactNode;

  /** Step 컴포넌트의 index를 정합니다. */
  index?: number;

  /** Step 컴포넌트의 label을 정합니다. */
  label?: string;

  /** Step 컴포넌트의 label 위치를 정합니다. */
  labelPosition?: 'right' | 'bottom';
}

export const Step = forwardRef<HTMLDivElement, StepProps>(
  ({ variant = 'current', icon, index, label, labelPosition = 'bottom', className, co, overrideStyles, ...props }: StepProps, ref) => {
    const { classes, cx } = useStyles({ variant, labelPosition }, { overrideStyles, name: 'Step' });

    const badgeContent = icon ? icon : variant === 'finished' ? <CheckIcon /> : variant === 'error' ? <AlertTriangleIcon /> : index;

    return (
      <View ref={ref} className={cx(classes.root, className)} co={co} {...props}>
        <Badge className={classes.circle} size="large" badgeContent={badgeContent} />
        <Typography className={classes.label} variant="body-02">
          {label}
        </Typography>
      </View>
    );
  },
);

Step.displayName = '@co-design/core/Step';
