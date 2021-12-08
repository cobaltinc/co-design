import { useCallback, useEffect, useState, useRef, RefObject } from 'react';

export const useHover = <T extends HTMLElement>(): [RefObject<T>, boolean] => {
  const [state, setState] = useState(false);
  const ref = useRef<T>(null);

  const handleMouseOver = useCallback(() => setState(true), []);
  const handleMouseOut = useCallback(() => setState(false), []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener('mouseover', handleMouseOver);
    element.addEventListener('mouseout', handleMouseOut);

    return () => {
      element.removeEventListener('mouseover', handleMouseOver);
      element.removeEventListener('mouseout', handleMouseOut);
    };
  }, [ref.current, handleMouseOver, handleMouseOut]);

  return [ref, state];
};
