import { useCallback, useEffect, useState, RefObject, useRef } from 'react';

export const useHover = <T extends HTMLElement>(): [boolean, RefObject<T>] => {
  const ref = useRef(null);
  const [state, setState] = useState(false);

  const handleMouseEnter = useCallback(() => setState(true), []);
  const handleMouseLeave = useCallback(() => setState(false), []);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref.current]);

  return [state, ref];
};
