import { useCallback, useEffect, useRef } from 'react';
import { useCallbackRef } from '../useCallbackRef';

export const useTimeoutFn = (fn: (...args) => void, ms: number) => {
  const timeoutId = useRef<ReturnType<typeof setTimeout>>();
  const callback = useCallbackRef(fn);

  const run = useCallback(
    (...args) => {
      timeoutId.current && clearTimeout(timeoutId.current);

      timeoutId.current = setTimeout(() => {
        callback(...args);
      }, ms);
    },
    [ms],
  );

  const clear = useCallback(() => {
    timeoutId.current && clearTimeout(timeoutId.current);
  }, []);

  useEffect(() => clear, [clear]);

  return [run, clear];
};
