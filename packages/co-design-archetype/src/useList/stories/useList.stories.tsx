import React from 'react';
import { useList } from '../useList';

export default {
  title: '@co-design/archetype/useList',
};

let count = 5;
export const Default = () => {
  const [state, handlers] = useList(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);

  return (
    <div>
      <div>
        <button onClick={() => handlers.append(`Item ${++count}`)}>append</button>
        <button onClick={() => handlers.pop()}>pop</button>
        <button onClick={() => handlers.prepend(`Item ${++count}`)}>prepend</button>
        <button onClick={() => handlers.shift()}>shift</button>
        <button onClick={() => handlers.setItem(3, 'Updated')}>setItem 3 index</button>
        <button onClick={() => handlers.remove(2, 3)}>remove 2, 3 index</button>
        <button onClick={() => handlers.insert(3, `Item ${++count}`)}>insert 3 index</button>
      </div>

      <ul>
        {state.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};
