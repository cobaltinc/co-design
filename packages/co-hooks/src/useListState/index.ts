import { useCallback, useState } from 'react';

const copy = <T>(list: T[]) => [...list];

export const useListState = <T>(initialValue: T[] = []) => {
  const [state, setState] = useState(initialValue);

  const append = useCallback((...items: T[]) => setState((old) => [...old, ...items]), []);

  const prepend = useCallback((...items: T[]) => setState((old) => [...items, ...old]), []);

  const insert = useCallback((index: number, ...items: T[]) => setState((old) => [...old.slice(0, index), ...items, ...old.slice(index)]), []);

  const remove = useCallback((...indices: number[]) => setState((old) => old.filter((_, index) => !indices.includes(index))), []);

  const pop = useCallback(() => {
    const current = [...state];
    const returnValue = current.pop();
    setState(current);
    return returnValue;
  }, [state]);

  const shift = useCallback(() => {
    const current = [...state];
    const returnValue = current.shift();
    setState(current);
    return returnValue;
  }, [state]);

  const reorder = useCallback((from: number, to: number) => {
    setState((old) => {
      const cloned = [...old];
      const item = old[from];

      cloned.splice(from, 1);
      cloned.splice(to, 0, item);

      return cloned;
    });
  }, []);

  const setItem = useCallback((index: number, item: T) => {
    setState((old) => {
      const current = [...old];
      current[index] = item;
      return current;
    });
  }, []);

  const handlers = {
    append,
    prepend,
    insert,
    remove,
    pop,
    shift,
    reorder,
    setItem,
  };

  return [state, handlers];
};
