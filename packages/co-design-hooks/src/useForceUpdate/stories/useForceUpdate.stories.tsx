import React, { useRef } from 'react';
import { useForceUpdate } from '../useForceUpdate';

export default {
  title: '@co-design/hooks/useForceUpdate',
};

export const Default = () => {
  const countRef = useRef(0);
  const forceUpdate = useForceUpdate();

  return (
    <div>
      {countRef.current++}
      <button onClick={forceUpdate}>Update</button>
    </div>
  );
};
