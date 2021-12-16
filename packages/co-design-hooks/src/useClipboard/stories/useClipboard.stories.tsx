import React, { useState } from 'react';
import { useClipboard } from '../useClipboard';

export default {
  title: '@co-design/hooks/useClipboard',
};

export const Default = () => {
  const [value, setValue] = useState('');
  const { copy, copied } = useClipboard({ timeout: 3000 });

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => copy(value)}>copy</button>
      <span>{copied && 'Copied!!'}</span>
    </div>
  );
};
