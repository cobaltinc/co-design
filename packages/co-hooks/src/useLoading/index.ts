import { useCallback, useEffect, useRef, useState } from 'react';

type Callback<T> = (...args: any[]) => T | Promise<T>;

const useLoading = <T>(fn: Function): [boolean, Callback<T>] => {
  const [loading, setLoading] = useState(false);
  const savedCallback = useRef(fn);

  const handler = useCallback(
    async (...args) => {
      setLoading(true);
      const result = await savedCallback.current(...args);
      setLoading(false);
      return result;
    },
    [fn],
  );

  useEffect(() => {
    savedCallback.current = fn;
  }, [fn]);

  return [loading, handler];
};

export default useLoading;
