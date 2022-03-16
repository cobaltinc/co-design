import React from 'react';
import { getTransitionStyles } from './getTransitionStyles';
import { useTransition } from './useTransition';
import { CoTransition } from './transitions';

export interface TransitionProps {
  /** 기본 정의된 트랜지션을 이용하거나 직접 트랜지션을 정의할 수 있습니다. */
  transition: CoTransition;

  /** 트랜지션이 실행될 시간을 ms단위로 정합니다. */
  duration?: number;

  /** 타이밍 함수를 정의합니다. */
  timingFunction?: string;

  /** true일 경우 자식 컴포넌트가 마운트됩니다. */
  mounted: boolean;

  /** styles를 넘기는 렌더 함수를 정의합니다. */
  children(styles: React.CSSProperties): React.ReactElement<any, any>;

  /** 종료 트랜지션이 끝나면 실행됩니다. */
  onExited?: () => void;

  /** 종료 트랜지션이 시작되면 실행됩니다. */
  onExit?: () => void;

  /** 진입 트랜지션이 시작되면 실행됩니다. */
  onEnter?: () => void;

  /** 진입 트랜지션이 끝나면 실행됩니다. */
  onEntered?: () => void;
}

export const Transition = ({
  transition,
  duration = 250,
  mounted,
  children,
  timingFunction,
  onExit,
  onEntered,
  onEnter,
  onExited,
}: TransitionProps) => {
  const { transitionDuration, transitionStatus, transitionTimingFunction } = useTransition({
    mounted,
    duration,
    timingFunction,
    onExit,
    onEntered,
    onEnter,
    onExited,
  });

  if (transitionDuration === 0) {
    return mounted ? <>{children({})}</> : null;
  }

  return transitionStatus === 'exited' ? null : (
    <>
      {children(
        getTransitionStyles({
          transition,
          duration: transitionDuration,
          state: transitionStatus,
          timingFunction: transitionTimingFunction,
        }),
      )}
    </>
  );
};

Transition.displayName = '@co-design/core/Transition';
