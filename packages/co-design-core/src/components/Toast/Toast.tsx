import React, { useState } from 'react';
import { useTimeout } from '@co-design/hooks';
import { ClassNames, CoComponentProps } from '@co-design/styles';
import ToastIcon from './ToastIcon';
import useStyles from './Toast.style';
import { View } from '../View';
import { Button } from '../Button';

export type ToastStylesNames = ClassNames<typeof useStyles>;

export type ToastType = 'base' | 'primary' | 'success' | 'warning' | 'critical' | 'error'; // error will be deprecated;

export interface ToastProps extends CoComponentProps<ToastStylesNames> {
  /** Toast 의 id 를 지정합니다. */
  id: string;

  /** Toast 에 보여질 메시지를 설정합니다. */
  message: string;

  /** Toast 타입을 지정하여 Toast의 상태를 보여줍니다. */
  type: ToastType;

  /** Toast 가 보여지는 시간을 설정합니다. */
  duration: number;

  /** 직접 닫을 수 있는 Toast 로 설정합니다.  */
  close?: boolean;

  /** Toast 가 닫힐 때 실행될 콜백 함수를 설정합니다. */
  onDone?(): void;

  /** Toast 에서 실행할 action을 설정합니다. */
  action?: {
    label: string;
    onAction: () => void;
  };

  /** 설정한 duration 이후 Toast 를 닫을 지 설정합니다. */
  closeOnTimeout?: boolean;
}

export const Toast = ({
  message,
  type = 'base',
  duration,
  close = false,
  onDone,
  action,
  closeOnTimeout = true,
  co,
  overrideStyles,
  ...props
}: ToastProps) => {
  const [show, setShow] = useState(true);
  const { classes, cx, theme } = useStyles(
    {
      duration,
      type,
    },
    {
      overrideStyles,
      name: 'Toast',
    },
  );

  const iconType =
    type === 'base'
      ? 'info-circle'
      : type === 'success'
      ? 'check-circle'
      : type === 'error' || type === 'critical'
      ? 'close-circle'
      : type === 'warning'
      ? 'alert-circle'
      : 'info-circle';

  const handleClose = () => {
    setShow(false);
    onDone?.();
  };

  useTimeout(() => {
    if (closeOnTimeout) {
      setShow(false);
      setTimeout(() => {
        onDone?.();
      }, 400);
    }
  }, duration);

  return (
    <View className={cx(classes.container, { [classes.active]: show })} co={co} {...props}>
      <div className={classes.toast}>
        {closeOnTimeout && <div className={classes.progress} />}
        <ToastIcon type={iconType} fill={theme.foundations.tokens.color.icon['icon-inverse-white']} size={20} className={classes.icon} />
        <span className={classes.message}>{message}</span>
        {action ? (
          <Button
            variant="text"
            size="xsmall"
            onClick={action.onAction}
            overrideStyles={{ text: { color: theme.foundations.tokens.color.text['text-light'] } }}
          >
            {action.label}
          </Button>
        ) : null}
        {close ? (
          <div className={classes.closeWrapper} onClick={handleClose}>
            <ToastIcon type="close" fill={theme.foundations.tokens.color.icon['icon-inverse-white']} size={9.71} className={classes.close} />
          </div>
        ) : null}
      </div>
    </View>
  );
};

Toast.displayName = '@co-design/core/Toast';
