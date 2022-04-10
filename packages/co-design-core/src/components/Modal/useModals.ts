import { useContext } from 'react';
import { ModalsContext } from './context';

export const useModals = () => {
  const ctx = useContext(ModalsContext);

  if (!ctx) {
    throw new Error('[@co-design/core] useModals hook was called outside of context, wrap your app with ModalsProvider component');
  }

  return ctx;
};
