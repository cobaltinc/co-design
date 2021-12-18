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
  /** Transitions group */
  transitions: Record<string, GroupedTransitionItem>;

  /** Render function with transition group styles argument */
  children(styles: Record<string, React.CSSProperties>): React.ReactElement<any, any>;

  /** Transition duration in ms */
  duration?: number;

  /** Transition timing function, defaults to theme.transitionTimingFunction */
  timingFunction?: string;

  /** When true, component will be mounted */
  mounted: boolean;

  /** Calls when exit transition ends */
  onExited?: () => void;

  /** Calls when exit transition starts */
  onExit?: () => void;

  /** Calls when enter transition starts */
  onEnter?: () => void;

  /** Calls when enter transition ends */
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

GroupedTransition.displayName = '@co-design/core/GroupedTransition';
