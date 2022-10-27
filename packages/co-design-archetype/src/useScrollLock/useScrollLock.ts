import { useEffect, useRef, useState } from 'react';
import { makeStyleTag, insertStyleTag, getLockStyles, injectStyles } from './utils';

export const useScrollLock = (
  lock?: boolean,
  options = {
    disableBodyPadding: false,
  },
) => {
  const [scrollLocked, setScrollLocked] = useState(lock || false);
  const scrollTop = useRef(0);

  const { disableBodyPadding } = options;

  const stylesheet = useRef<CSSStyleSheet | any | null>(null);

  const lockScroll = () => {
    scrollTop.current = window.scrollY;

    const styles = getLockStyles({ disableBodyPadding });

    /**
     * by applying styles via style tag
     * we dont care about previous styles due to inheritance
     * when scroll gets unlocked we delete that style tag
     */
    const sheet = makeStyleTag();

    injectStyles(sheet, styles);
    insertStyleTag(sheet);

    stylesheet.current = sheet;
  };

  const unlockScroll = () => {
    if (!stylesheet?.current) return;

    stylesheet.current.parentNode.removeChild(stylesheet.current);
    stylesheet.current = null;
  };

  useEffect(() => {
    if (scrollLocked) {
      lockScroll();
    } else {
      unlockScroll();
    }

    return unlockScroll;
  }, [scrollLocked]);

  useEffect(() => {
    if (lock !== undefined) {
      setScrollLocked(lock);
    }
  }, [lock]);

  useEffect(() => {
    if (lock === undefined && typeof window !== 'undefined') {
      window.document.body.style.overflow === 'hidden' && setScrollLocked(true);
    }
  }, [setScrollLocked]);

  return [scrollLocked, setScrollLocked] as const;
};
