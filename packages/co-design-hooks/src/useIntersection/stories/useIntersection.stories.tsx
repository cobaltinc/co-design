import React, { useRef } from 'react';
import { useIntersection } from '../useIntersection';

export default {
  title: '@co-design/hooks/useIntersection',
};

export const Default = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [ref, observer] = useIntersection({
    root: rootRef.current,
    threshold: 0.5,
  });

  return (
    <div ref={rootRef} style={{ width: 300, height: 300, overflowY: 'scroll' }}>
      <div style={{ height: 500 }}>
        <div ref={ref} style={{ marginTop: 290, height: 50, backgroundColor: observer?.isIntersecting ? 'green' : 'red' }}>
          {observer?.isIntersecting ? 'Half visible' : 'Obscured'}
        </div>
      </div>
    </div>
  );
};
