import { Reducer, useCallback, useReducer } from 'react';
import { multipleSelectReducer, Action, MultipleSelectState } from './reducer';
import { MultipleSelectItem } from './types';

export const useMultipleSelection = <T>(initialItems: MultipleSelectItem<T>[]): [MultipleSelectItem<T>[], typeof handlers] => {
  const [state, dispatch] = useReducer<Reducer<MultipleSelectState<T>, Action>>(multipleSelectReducer, {
    items: initialItems.map((item, index) => ({ [item.key]: { ...item, index } })).reduce((acc, item) => ({ ...acc, ...item }), {}),
  });

  const handleSelect = useCallback((keys: string | string[]) => {
    dispatch({ type: 'SELECT', payload: keys });
  }, []);

  const handleDeselect = useCallback((keys: string | string[]) => {
    dispatch({ type: 'DESELECT', payload: keys });
  }, []);

  const handleToggle = useCallback((keys: string | string[]) => {
    dispatch({ type: 'TOGGLE', payload: keys });
  }, []);

  const handleSelectAll = useCallback(() => {
    dispatch({ type: 'SELECT_ALL' });
  }, []);

  const handleDeselectAll = useCallback(() => {
    dispatch({ type: 'DESELECT_ALL' });
  }, []);

  const handleToggleAll = useCallback(() => {
    dispatch({ type: 'TOGGLE_ALL' });
  }, []);

  const handlers = {
    handleSelect,
    handleDeselect,
    handleToggle,
    handleSelectAll,
    handleDeselectAll,
    handleToggleAll,
  };

  return [
    Object.keys(state.items)
      .map((key) => state.items[key])
      .sort((a, b) => a.index - b.index),
    handlers,
  ];
};
