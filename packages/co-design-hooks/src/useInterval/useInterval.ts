import { useEffect } from 'react';
import { useIntervalFn } from '../useIntervalFn';

export const useInterval = (fn: () => void, ms: number) => {
  const [run, clear] = useIntervalFn(fn, ms);

  useEffect(() => {
    run();
    return clear;
  }, [run, clear]);

  return clear;
};
