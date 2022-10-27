import React, { useRef, useState } from 'react';
import { useHotKey } from '../useHotKey';

export default {
  title: '@co-design/archetype/useHotKey',
};

export const Default = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');
  const { handleKeyDown, handleKeyUp } = useHotKey([
    {
      global: true,
      combo: 'ctrl+f',
      onKeyDown() {
        alert('Blocking find');
      },
    },
    {
      combo: 'ctrl+l',
      onKeyDown() {
        inputRef.current.select();
      },
    },
    {
      combo: 'shift+r',
      onKeyUp() {
        setValue('');
      },
    },
  ]);

  return (
    <div>
      <input ref={inputRef} type="text" value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} />
    </div>
  );
};
