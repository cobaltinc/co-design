export type CoZIndex = 'default' | 'sticky' | 'deepdive' | 'dropdown' | 'overlay' | 'modal' | 'toast';

export const DEFAULT_Z_INDEX: Record<CoZIndex, number> = {
  deepdive: -99999,
  default: 1,
  sticky: 100,
  dropdown: 1000,
  overlay: 2000,
  modal: 3000,
  toast: 10000,
};
