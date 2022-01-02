import { useCallback, useEffect, useRef, useState } from 'react';
import { useCallbackRef } from '../useCallbackRef';

export const useLoading = <T extends (...args: any[]) => Promise<any>>(fn: T): [boolean, T] => {
  const [loading, setLoading] = useState(false);
  const savedCallback = useCallbackRef(fn);

  const handler = useCallback(
    async (...args) => {
      setLoading(true);
      const result = await savedCallback(...args);
      setLoading(false);
      return result;
    },
    [fn],
  );

  return [loading, handler as any];
};
