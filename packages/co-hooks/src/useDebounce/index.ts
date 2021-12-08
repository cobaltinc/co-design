import { DependencyList, useEffect } from 'react';
import { useTimeoutFn } from '../useTimeoutFn';

export const useDebounce = (fn: Function, ms: number, deps: DependencyList) => {
  const [run, clear] = useTimeoutFn(fn, ms);

  useEffect(run, deps);

  return clear;
};
