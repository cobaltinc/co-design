import { useCallback, useEffect, useRef } from 'react';

export const useIntervalFn = (fn: Function, ms: number) => {
  const intervalId = useRef<ReturnType<typeof setInterval>>();
  const callback = useRef(fn);

  useEffect(() => {
    callback.current = fn;
  }, [fn]);

  const run = useCallback(() => {
    intervalId.current && clearInterval(intervalId.current);

    intervalId.current = setInterval(() => {
      callback.current();
    }, ms);
  }, [ms]);

  const clear = useCallback(() => {
    intervalId.current && clearInterval(intervalId.current);
  }, []);

  useEffect(() => clear, [clear]);

  return [run, clear];
};
