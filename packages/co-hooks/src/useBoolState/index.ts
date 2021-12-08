import { useCallback, useState } from 'react';

const useBoolState = (initialValue: boolean = false): [boolean, typeof handlers] => {
  const [state, setState] = useState<boolean>(initialValue);

  const setTrue = useCallback(() => setState(true), []);

  const setFalse = useCallback(() => setState(false), []);

  const toggle = useCallback(() => setState((old) => !old), []);

  const handlers = {
    setTrue,
    setFalse,
    toggle,
  };

  return [state, handlers];
};

export default useBoolState;
