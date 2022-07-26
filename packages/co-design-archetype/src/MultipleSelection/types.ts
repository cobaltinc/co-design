export interface MultipleSelectItem<T> {
  key: string;
  value: T;
  label?: string;
  disabled?: boolean;
  selected?: boolean;
  children?: MultipleSelectItem<T>[];
}
