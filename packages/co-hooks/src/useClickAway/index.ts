import { useEffect, useRef } from 'react';

const events = ['mousedown', 'touchstart'];

export const useClickAway = <E extends Event = Event>(handler: (event: E) => void) => {
  const ref = useRef<HTMLElement | null>(null);
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const element = ref.current;

    const handleEvent = (e: any) => {
      element && !element.contains(e.target) && savedHandler.current(e);
    };

    for (const eventName of events) {
      document.addEventListener(eventName, handleEvent);
    }

    return () => {
      for (const eventName of events) {
        document.removeEventListener(eventName, handleEvent);
      }
    };
  }, [ref]);

  return ref;
};
