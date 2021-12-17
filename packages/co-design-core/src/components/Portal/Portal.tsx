import React, { CSSProperties, ReactPortal, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useIsomorphicEffect } from '@co-design/hooks';
import { CoZIndex, useCoTheme } from '@co-design/styles';
import { getFieldValue } from '../../utils';

export interface PortalProps {
  children: React.ReactNode;
  zIndex?: CoZIndex | number;
  target?: HTMLDivElement;
  className?: string;
  style?: CSSProperties;
}

export const Portal = ({ children, zIndex = 1, target, className, style }: PortalProps): ReactPortal => {
  const theme = useCoTheme();
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLDivElement>();

  useIsomorphicEffect(() => {
    setMounted(true);
    ref.current = target || document.createElement('div');

    if (!target) {
      document.body.appendChild(ref.current);
    }

    return () => {
      !target && document.body.removeChild(ref.current);
    };
  }, [target]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <div className={className} style={{ ...style, position: 'relative', zIndex: getFieldValue(zIndex, theme.zIndex) }}>
      {children}
    </div>,
    ref.current,
  );
};

Portal.displayName = '@co-design/core/Portal';
