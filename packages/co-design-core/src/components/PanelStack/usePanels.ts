import { useContext } from 'react';
import { PanelsContext } from './context';

export const usePanels = () => {
  const ctx = useContext(PanelsContext);

  if (!ctx) {
    throw new Error('[@co-design/core] usePanels hook was called outside of context');
  }

  return ctx;
};
