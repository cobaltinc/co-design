import React from 'react';
import { MultipleSelectItem } from '../types';
import { useMultipleSelection } from '../useMultipleSelection';

export default {
  title: '@co-design/archetype/MultipleSelection',
};

const data: MultipleSelectItem<number>[] = [
  {
    key: 'Label 1',
    value: 1,
    label: 'Label 1',
  },
  {
    key: 'Label 2',
    value: 2,
    label: 'Label 2',
    disabled: true,
  },
  {
    key: 'Label 3',
    value: 3,
    label: 'Label 3',
    selected: true,
  },
  {
    key: 'Label 4',
    value: 4,
    label: 'Label 4',
  },
  {
    key: 'Label 5',
    value: 5,
    label: 'Label 5',
  },
];

export const Checkbox = () => {
  const [items, { handleSelectAll, handleDeselectAll, handleToggleAll, handleToggle }] = useMultipleSelection(data);
  return (
    <div>
      <button onClick={handleSelectAll}>Select All</button>
      <button onClick={handleDeselectAll}>Deselect All</button>
      <button onClick={handleToggleAll}>Toggle All</button>
      {items.map((item) => (
        <label key={item.key} style={{ display: 'block' }}>
          <input type="checkbox" onClick={() => handleToggle(item.key)} disabled={item.disabled} checked={item.selected} />
          {item.label}
        </label>
      ))}
      <div>
        <div>State:</div>
        <pre>{JSON.stringify(items, null, 2)}</pre>
      </div>
    </div>
  );
};

export const Chips = () => {
  const [items, { handleSelectAll, handleDeselectAll, handleToggleAll, handleToggle }] = useMultipleSelection(data);
  return (
    <div>
      <button onClick={handleSelectAll}>Select All</button>
      <button onClick={handleDeselectAll}>Deselect All</button>
      <button onClick={handleToggleAll}>Toggle All</button>
      <br />
      {items.map((item) => (
        <button
          key={item.key}
          onClick={() => handleToggle(item.key)}
          disabled={item.disabled}
          style={{ backgroundColor: item.disabled ? 'gray' : item.selected ? 'red' : 'blue', color: 'white' }}
        >
          {item.label}
        </button>
      ))}
      <div>
        <div>State:</div>
        <pre>{JSON.stringify(items, null, 2)}</pre>
      </div>
    </div>
  );
};

export const TwoList = () => {
  const [items, { handleSelectAll, handleDeselectAll, handleToggleAll, handleDeselect, handleSelect }] = useMultipleSelection(data);
  return (
    <div>
      <button onClick={handleSelectAll}>Select All</button>
      <button onClick={handleDeselectAll}>Deselect All</button>
      <button onClick={handleToggleAll}>Toggle All</button>

      <br />
      <ul style={{ display: 'inline-block', width: 300, verticalAlign: 'top' }}>
        {items
          .filter((item) => item.selected !== true)
          .map((item) => (
            <li
              key={item.key}
              onClick={() => handleSelect(item.key)}
              style={{ backgroundColor: item.disabled ? 'gray' : item.selected ? 'red' : 'blue', color: 'white' }}
            >
              {item.label}
            </li>
          ))}
      </ul>
      <ul style={{ display: 'inline-block', width: 300, verticalAlign: 'top' }}>
        {items
          .filter((item) => item.selected === true)
          .map((item) => (
            <li
              key={item.key}
              onClick={() => handleDeselect(item.key)}
              style={{ backgroundColor: item.disabled ? 'gray' : item.selected ? 'red' : 'blue', color: 'white' }}
            >
              {item.label}
            </li>
          ))}
      </ul>
    </div>
  );
};
