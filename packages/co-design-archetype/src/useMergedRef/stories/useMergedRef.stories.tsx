import React, { useEffect } from 'react';
import { useClickAway } from '../../useClickAway';
import { useHover } from '../../useHover';
import { useForceUpdate } from '../../useForceUpdate';
import { useMergedRef } from '../useMergedRef';

export default {
  title: '@co-design/archetype/useMergedRef',
};

export const Default = () => {
  const [hovered, hoverRef] = useHover();
  const clickAwayRef = useClickAway(() => alert('click away'));
  const ref = useMergedRef(hoverRef, clickAwayRef);
  const update = useForceUpdate();

  // FIXME: Storybook bug
  useEffect(() => {
    update();
  }, []);

  return (
    <div>
      <div ref={ref} style={{ width: 100, height: 100, backgroundColor: 'red' }}>{`${hovered}`}</div>
    </div>
  );
};
