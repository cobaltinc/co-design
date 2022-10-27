import React from 'react';
import { getTransitionStyles } from './getTransitionStyles';
import { useTransition } from './useTransition';
import { CoTransition } from './transitions';

interface GroupedTransitionItem {
  duration: number;
  timingFunction?: React.CSSProperties['transitionTimingFunction'];
  transition: CoTransition;
}

export interface GroupedTransitionProps {
  /** 여러 개의 트랜지션을 정의합니다. */
  transitions: Record<string, GroupedTransitionItem>;

  /** styles를 넘기는 렌더 함수를 정의합니다. */
  children(styles: Record<string, React.CSSProperties>): React.ReactElement<any, any>;

  /** 트랜지션이 실행될 시간을 ms단위로 정합니다. */
  duration?: number;

  /** 타이밍 함수를 정의합니다. */
  timingFunction?: string;

  /** true일 경우 자식 컴포넌트가 마운트됩니다. */
  mounted: boolean;

  /** 종료 트랜지션이 끝나면 실행됩니다. */
  onExited?: () => void;

  /** 종료 트랜지션이 시작되면 실행됩니다. */
  onExit?: () => void;

  /** 진입 트랜지션이 시작되면 실행됩니다. */
  onEnter?: () => void;

  /** 진입 트랜지션이 끝나면 실행됩니다. */
  onEntered?: () => void;
}

export function GroupedTransition({
  transitions,
  duration = 250,
  mounted,
  children,
  timingFunction,
  onExit,
  onEntered,
  onEnter,
  onExited,
}: GroupedTransitionProps) {
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

  if (transitionStatus === 'exited') {
    return null;
  }

  const transitionsStyles = Object.keys(transitions).reduce((acc, transition) => {
    acc[transition] = getTransitionStyles({
      duration: transitions[transition].duration,
      transition: transitions[transition].transition,
      timingFunction: transitions[transition].timingFunction || transitionTimingFunction,
      state: transitionStatus,
    });

    return acc;
  }, {});

  return <>{children(transitionsStyles)}</>;
}

GroupedTransition.displayName = '@co-design/primitive/GroupedTransition';
