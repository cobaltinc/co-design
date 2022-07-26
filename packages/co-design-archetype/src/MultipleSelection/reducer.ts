import { MultipleSelectItem } from './types';

interface ManagedSelectItem<T> {
  [key: string]: MultipleSelectItem<T> & { index: number; order?: number };
}

export interface MultipleSelectState<T> {
  items: ManagedSelectItem<T>;
}

interface SelectAction {
  type: 'SELECT';
  payload: string | string[];
}

interface DeselectAction {
  type: 'DESELECT';
  payload: string | string[];
}

interface ToggleAction {
  type: 'TOGGLE';
  payload: string | string[];
}

interface SelectAllAction {
  type: 'SELECT_ALL';
}

interface DeselectAllAction {
  type: 'DESELECT_ALL';
}

interface ToggleAllAction {
  type: 'TOGGLE_ALL';
}

export type Action = SelectAction | DeselectAction | ToggleAction | SelectAllAction | DeselectAllAction | ToggleAllAction;

export const multipleSelectReducer = <T>(state: MultipleSelectState<T>, action: Action): MultipleSelectState<T> => {
  switch (action.type) {
    case 'SELECT': {
      const keys = Array.isArray(action.payload) ? action.payload : [action.payload];

      const newItems = { ...state.items };
      for (const key of keys) {
        if (newItems[key].disabled) continue;
        newItems[key].selected = true;
      }

      return { items: newItems };
    }
    case 'DESELECT': {
      const keys = Array.isArray(action.payload) ? action.payload : [action.payload];

      const newItems = { ...state.items };
      for (const key of keys) {
        if (newItems[key].disabled) continue;
        newItems[key].selected = false;
      }

      return { items: newItems };
    }
    case 'TOGGLE': {
      const keys = Array.isArray(action.payload) ? action.payload : [action.payload];

      const newItems = { ...state.items };
      for (const key of keys) {
        if (newItems[key].disabled) continue;
        console.log(key, newItems[key].selected);
        newItems[key].selected = !newItems[key].selected;
        console.log(key, newItems[key].selected);
      }

      return { items: newItems };
    }
    case 'SELECT_ALL': {
      const newItems = { ...state.items };
      for (const key of Object.keys(state.items)) {
        if (newItems[key].disabled) continue;
        newItems[key].selected = true;
      }

      return { items: newItems };
    }
    case 'DESELECT_ALL': {
      const newItems = { ...state.items };
      for (const key of Object.keys(state.items)) {
        if (newItems[key].disabled) continue;
        newItems[key].selected = false;
      }

      return { items: newItems };
    }
    case 'TOGGLE_ALL': {
      const newItems = { ...state.items };
      for (const key of Object.keys(state.items)) {
        if (newItems[key].disabled) continue;
        newItems[key].selected = !newItems[key].selected;
      }

      return { items: newItems };
    }
    default: {
      return state;
    }
  }
};
