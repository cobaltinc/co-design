import { useEffect } from 'react';
import { useIntervalFn } from '../useIntervalFn';

export const useInterval = (fn: Function, ms: number) => {
  const [run, clear] = useIntervalFn(fn, ms);

  useEffect(() => {
    run();
    return clear;
  }, [run, clear]);

  return clear;
};
