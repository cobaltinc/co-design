import { createContext } from 'react';
import { Panel } from './PanelStack';

export interface PanelsContextProps<T extends Panel<object>> {
  panels: T[];
  pushPanel: (panel: T) => void;
  popPanel: () => void;
}

export const PanelsContext = createContext<PanelsContextProps<Panel<object>>>({
  panels: [],
  pushPanel: () => {},
  popPanel: () => {},
});
