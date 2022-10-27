import { useEffect, useMemo, useRef } from 'react';
import { useRafState } from '../useRafState';

type ObserverRect = Omit<DOMRectReadOnly, 'toJSON'>;

const defaultState: ObserverRect = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
};

const browser = typeof window !== 'undefined';

export const useResize = <T extends HTMLElement = any>() => {
  const ref = useRef<T>(null);

  const [rect, setRect] = useRafState<ObserverRect>(defaultState);

  const observer = useMemo(
    () =>
      browser
        ? new ResizeObserver((entries: any) => {
            const entry = entries[0];

            if (entry) {
              setRect(entry.contentRect);
            }
          })
        : null,
    [],
  );

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref.current]);

  return [ref, rect] as const;
};
