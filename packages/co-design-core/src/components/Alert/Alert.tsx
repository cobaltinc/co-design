import React, { forwardRef } from 'react';
import { CoComponentProps, PolymorphicComponentProps, PolymorphicRef, ClassNames } from '@co-design/styles';

import useStyles from './Alert.style';
import { Typography } from '../Typography';
import AlertIcon from './AlertIcon';
import { Stack } from '../Stack';
import { Group } from '../Group';
import Close from './icons/Close';

export type AlertSeverity = 'base' | 'info' | 'success' | 'warning' | 'critical';

export type AlertStylesNames = ClassNames<typeof useStyles>;

export interface SharedAlertProps extends CoComponentProps<AlertStylesNames> {
  /** Alert 컴포넌트의 severity 를 설정합니다. */
  severity?: AlertSeverity;

  /** Alert 컴포넌트의 title을 설정합니다. */
  title?: string;

  /** Alert 컴포넌트에 Close 아이콘을 만들고, 그 아이콘을 클릭할 시 발생할 이벤트를 지정합니다.  */
  onClose?: () => void;
}

export type AlertProps<C extends React.ElementType> = PolymorphicComponentProps<C, SharedAlertProps>;

type AlertComponent = <C extends React.ElementType = 'div'>(props: AlertProps<C>) => React.ReactNode;

export const Alert: AlertComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'div'>(
    { component, className, children, severity = 'base', title, onClose, co, overrideStyles, ...props }: AlertProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const { classes, cx } = useStyles(null, { overrideStyles, name: 'Alert' });

    return (
      <Group component={component} spacing={8} className={cx(classes[severity], classes.root, className)} co={co} ref={ref} {...props}>
        <AlertIcon severity={severity} className={classes.icon} />
        <Stack spacing={0} className={classes.message}>
          {title && (
            <Typography disableTextboxTrim variant="heading_08" className={classes.title}>
              {title}
            </Typography>
          )}
          {children && (
            <Typography disableTextboxTrim variant="body_02" className={classes.content}>
              {children as React.ReactNode}
            </Typography>
          )}
        </Stack>
        {onClose && <Close onClick={onClose} className={classes.close} />}
      </Group>
    );
  },
);

Alert.displayName = '@co-design/core/Alert';
