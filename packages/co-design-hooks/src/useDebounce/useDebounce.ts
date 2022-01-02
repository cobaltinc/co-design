import { DependencyList } from 'react';
import { useUpdateEffect } from '../useUpdateEffect';
import { useTimeoutFn } from '../useTimeoutFn';

export const useDebounce = (fn: () => void, ms: number, deps: DependencyList) => {
  const [run, clear] = useTimeoutFn(fn, ms);

  useUpdateEffect(run, deps);

  return clear;
};
