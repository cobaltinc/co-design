import React, { useCallback } from 'react';
import { PanelsContext } from './context';
import { Panel } from './PanelStack';

export interface PanelsProviderProps<T extends Panel<object>> {
  children: React.ReactNode;
  panels: T[];
  onPop?: (panel: T) => void;
  onPush?: (panel: T) => void;
}

export const PanelsProvider = <T extends Panel<object>>({ children, panels, onPop, onPush }: PanelsProviderProps<T>) => {
  const pushPanel = useCallback(
    (panel: T) => {
      onPush?.(panel);
    },
    [onPush],
  );

  const popPanel = useCallback(() => {
    onPop?.(panels[panels.length - 1]);
  }, [panels, onPop]);

  return (
    <PanelsContext.Provider
      value={{
        panels,
        pushPanel,
        popPanel,
      }}
    >
      {children}
    </PanelsContext.Provider>
  );
};
