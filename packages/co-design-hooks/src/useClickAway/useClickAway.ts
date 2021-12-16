import { RefObject, useEffect, useRef } from 'react';

const events = ['mousedown', 'touchstart'];

export const useClickAway = <E extends Event = Event>(ref: RefObject<HTMLElement>, handler: (event: E) => void) => {
  const savedCallback = useRef(handler);

  useEffect(() => {
    savedCallback.current = handler;
  }, [handler]);

  useEffect(() => {
    const handleEvent = (e: any) => {
      const { current: element } = ref;
      element && !element.contains(e.target) && savedCallback.current(e);
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
};
