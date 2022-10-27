import React, { CSSProperties, ReactPortal, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useIsomorphicEffect } from '@co-design/archetype';
import { CoZIndex, useCoTheme } from '@co-design/styles';
import { getFieldValue } from '../../utils';

export interface PortalProps {
  /** Portal 컴포넌트에 들어갈 요소를 넣습니다. */
  children: React.ReactNode;

  /** Portal 컴포넌트의 z-index를 설정합니다. */
  zIndex?: CoZIndex | number;

  /** Portal 컴포넌트가 마운트될 요소를 정합니다. */
  target?: HTMLDivElement;

  /** Portal 컴포넌트의 가장 바깥 div에 className을 추가합니다. */
  className?: string;

  /** Portal 컴포넌트의 가장 바깥 div에 style을 추가합니다. */
  style?: CSSProperties;
}

export const Portal = ({ children, zIndex, target, className, style }: PortalProps): ReactPortal => {
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
    <div className={className} style={{ ...style, position: 'relative', zIndex: getFieldValue(zIndex, theme.zIndex) || theme.zIndex.default }}>
      {children}
    </div>,
    ref.current,
  );
};

Portal.displayName = '@co-design/primitive/Portal';
