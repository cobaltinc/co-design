import React, { useEffect, useState } from 'react';
import { useUpdateEffect } from '../useUpdateEffect';

export default {
  title: '@co-design/archetype/useUpdateEffect',
};

export const Default = () => {
  const [value, setValue] = useState('');

  useEffect(() => {
    console.log('useEffect:', value);
  }, [value]);

  useUpdateEffect(() => {
    console.log('useUpdateEffect:', value);
  }, [value]);

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};
