import { MultipleSelectItem } from './types';
import { useMultipleSelection } from './useMultipleSelection';

// https://github.com/downshift-js
export const useCheckboxes = <T>(initialItems: MultipleSelectItem<T>[]): [MultipleSelectItem<T>[], typeof handlers] => {
  const [items] = useMultipleSelection(initialItems);

  const handlers = {};

  return [items, handlers];
};
