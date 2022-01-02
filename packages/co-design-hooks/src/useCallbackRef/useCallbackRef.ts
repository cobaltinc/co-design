import { useRef, useEffect, useMemo } from 'react';

export const useCallbackRef = <T extends (...args: any[]) => any>(callback: T | undefined): T => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useMemo(() => ((...args) => callbackRef.current?.(...args)) as T, []);
};
