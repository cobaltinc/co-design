import React, { useState } from 'react';
import { useDebounce } from '../useDebounce';

export default {
  title: '@co-design/hooks/useDebounce',
};

export const Default = () => {
  const [value, setValue] = useState('');
  const clear = useDebounce(
    () => {
      alert('Updated!');
    },
    1000,
    [value],
  );

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={clear}>Cancel</button>
    </div>
  );
};
