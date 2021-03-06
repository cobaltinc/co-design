import { useEffect } from 'react';

export const usePageLeave = (onPageLeave: () => void) => {
  useEffect(() => {
    if (!onPageLeave) {
      return;
    }

    const handler = (event) => {
      event = event ? event : (window.event as any);
      const from = event.relatedTarget || event.toElement;
      if (!from || (from as any).nodeName === 'HTML') {
        onPageLeave();
      }
    };

    document.addEventListener('mouseout', handler);
    return () => {
      document.removeEventListener('mouseout', handler);
    };
  }, []);
};
