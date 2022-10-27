import React, { useEffect } from 'react';
import { useResize } from '../useResize';
import { useForceUpdate } from '../../useForceUpdate';

export default {
  title: '@co-design/archetype/useResize',
};

export const Default = () => {
  const [ref, rect] = useResize();
  const update = useForceUpdate();

  // FIXME: Storybook bug
  useEffect(() => {
    update();
  }, []);

  return (
    <div>
      <textarea ref={ref} style={{ width: 100, height: 100, backgroundColor: 'red', resize: 'both' }} />
      <div>{JSON.stringify(rect)}</div>
    </div>
  );
};
