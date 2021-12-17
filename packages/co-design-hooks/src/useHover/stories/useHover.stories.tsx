import React, { useEffect } from 'react';
import { useHover } from '../useHover';
import { useForceUpdate } from '../../useForceUpdate';

export default {
  title: '@co-design/hooks/useHover',
};

export const Default = () => {
  const [state, ref] = useHover<HTMLDivElement>();
  const update = useForceUpdate();

  // FIXME: Storybook bug
  useEffect(() => {
    update();
  }, []);

  return (
    <div>
      <div ref={ref} style={{ display: 'inline-block', width: 100, height: 100, backgroundColor: 'red' }}>
        Hover: {`${state}`}
      </div>
    </div>
  );
};
