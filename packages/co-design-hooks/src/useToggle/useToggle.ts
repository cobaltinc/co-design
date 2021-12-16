import { useCallback, useState } from 'react';

export const useToggle = (initialValue: boolean = false): [boolean, typeof toggle] => {
  const [state, setState] = useState<boolean>(initialValue);

  const toggle = useCallback((newState?: any) => setState((old) => (typeof newState === 'boolean' ? newState : !old)), []);

  return [state, toggle];
};
