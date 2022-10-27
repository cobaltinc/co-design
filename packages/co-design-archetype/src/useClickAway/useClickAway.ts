import { RefObject, useEffect, useRef } from 'react';
import { useCallbackRef } from '../useCallbackRef';

const events = ['mousedown', 'touchstart'];

export const useClickAway = <T extends HTMLElement, E extends Event = Event>(handler: (event: E) => void): RefObject<T> => {
  const ref = useRef<T>();
  const savedCallback = useCallbackRef(handler);

  useEffect(() => {
    const handleEvent = (e: any) => {
      const { current: element } = ref;
      element && !element.contains(e.target) && savedCallback(e);
    };

    for (const eventName of events) {
      document.addEventListener(eventName, handleEvent);
    }

    return () => {
      for (const eventName of events) {
        document.removeEventListener(eventName, handleEvent);
      }
    };
  }, [ref.current]);

  return ref;
};
