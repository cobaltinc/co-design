import { useEffect } from 'react';
import { useTimeoutFn } from '../useTimeoutFn';

export const useTimeout = (fn: () => void, ms: number) => {
  const [run, clear] = useTimeoutFn(fn, ms);

  useEffect(() => {
    run();
    return clear;
  }, [run, clear]);

  return clear;
};
