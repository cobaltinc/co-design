import { useState, useEffect, useRef } from 'react';
import { useUpdateEffect } from '@co-design/hooks';

export type TransitionStatus = 'entered' | 'exited' | 'entering' | 'exiting' | 'pre-exiting' | 'pre-entering';

interface UseTransition {
  duration: number;
  timingFunction: string;
  mounted: boolean;
  onEnter?(): void;
  onExit?(): void;
  onEntered?(): void;
  onExited?(): void;
}

export const useTransition = ({ duration, timingFunction, mounted, onEnter, onExit, onEntered, onExited }: UseTransition) => {
  const transitionDuration = duration;
  const [transitionStatus, setStatus] = useState<TransitionStatus>(mounted ? 'entered' : 'exited');
  const timeoutRef = useRef<number>(-1);

  const handleStateChange = (shouldMount: boolean) => {
    const preHandler = shouldMount ? onEnter : onExit;
    const handler = shouldMount ? onEntered : onExited;

    setStatus(shouldMount ? 'pre-entering' : 'pre-exiting');
    window.clearTimeout(timeoutRef.current);

    const preStateTimeout = window.setTimeout(() => {
      typeof preHandler === 'function' && preHandler();
      setStatus(shouldMount ? 'entering' : 'exiting');
    }, 10);

    timeoutRef.current = window.setTimeout(() => {
      window.clearTimeout(preStateTimeout);
      typeof handler === 'function' && handler();
      setStatus(shouldMount ? 'entered' : 'exited');
    }, transitionDuration);
  };

  useUpdateEffect(() => {
    handleStateChange(mounted);
  }, [mounted]);

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  return {
    transitionDuration,
    transitionStatus,
    transitionTimingFunction: timingFunction || 'ease',
  };
};
