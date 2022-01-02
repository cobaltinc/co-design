import { useCallback, useEffect, useRef } from 'react';
import { useCallbackRef } from '../useCallbackRef';

export const useIntervalFn = (fn: () => void, ms: number) => {
  const intervalId = useRef<ReturnType<typeof setInterval>>();
  const callback = useCallbackRef(fn);

  const run = useCallback(() => {
    intervalId.current && clearInterval(intervalId.current);

    intervalId.current = setInterval(() => {
      callback();
    }, ms);
  }, [ms]);

  const clear = useCallback(() => {
    intervalId.current && clearInterval(intervalId.current);
  }, []);

  useEffect(() => clear, [clear]);

  return [run, clear];
};
