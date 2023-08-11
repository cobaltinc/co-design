import React, { useState } from 'react';
import { useTimeout } from '@co-design/hooks';
import { ClassNames, CoComponentProps } from '@co-design/styles';
import ToastIcon from './ToastIcon';
import useStyles from './Toast.style';
import { View } from '../View';

export type ToastStylesNames = ClassNames<typeof useStyles>;

export type ToastType = 'default' | 'success' | 'error' | 'warning';

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
}

export const Toast = ({ message, type = 'default', duration, close = false, onDone, co, overrideStyles, ...props }: ToastProps) => {
  const [show, setShow] = useState(true);
  const { classes, cx } = useStyles(
    {
      duration,
    },
    {
      overrideStyles,
      name: 'Toast',
    },
  );

  useTimeout(() => {
    if (!close) {
      setShow(false);
      setTimeout(() => {
        onDone?.();
      }, 400);
    }
  }, duration);

  const iconType = type === 'default' ? 'alert-circle' : type === 'success' ? 'check-circle' : type === 'error' ? 'close-circle' : 'alert-circle';
  const iconColor = type === 'default' ? '#D3D9E2' : type === 'success' ? '#5D6BC5' : type === 'error' ? '#BF0711' : '#FFCC33';

  return (
    <View className={cx(classes.container, { [classes.active]: show })} co={co} {...props}>
      <div className={classes.toast}>
        {!close ? <div className={cx(classes.progress, { [classes[type]]: type === 'error' || type === 'warning' })} /> : null}
        <ToastIcon type={iconType} color={iconColor} size={38} className={classes.icon} />
        <span className={classes.message}>{message}</span>
        {close ? (
          <div onClick={onDone}>
            <ToastIcon type="close" color="#c4cdd5" size={18} className={classes.close} />
          </div>
        ) : null}
      </div>
    </View>
  );
};

Toast.displayName = '@co-design/core/Toast';
