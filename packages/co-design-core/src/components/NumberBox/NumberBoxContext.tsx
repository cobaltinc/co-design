import { createContext, ReactNode, useContext, useState } from 'react';

interface NumberBoxActions {
  increase: () => void;
  delete: (count: number) => void;
}

type INumberBoxContext = { isDecrease: boolean; currentCount: number; deletedCount: number; actions: NumberBoxActions };

const NumberBoxContext = createContext<INumberBoxContext>(undefined as unknown as INumberBoxContext);

export const useNumberBoxContext = () => {
  const context = useContext(NumberBoxContext);
  if (!context) {
    throw new Error('useMe must be used within a NumberBoxProvider');
  }
  return context;
};

interface Props {
  children: ReactNode;
}

export const NumberBoxProvider = ({ children }: Props) => {
  const [currentCount, setCurrentCount] = useState(0);
  const [deletedCount, setDeletedCount] = useState<number>();
  const [isDecrease, setIsDecrease] = useState<boolean>(false);

  const actions = {
    increase: () => {
      setCurrentCount((prev) => prev + 1);
      setDeletedCount(undefined);
      setIsDecrease(false);
    },
    delete: (count: number) => {
      setCurrentCount((prev) => prev - 1);
      setIsDecrease(true);
      setDeletedCount(count);
    },
  };

  return <NumberBoxContext.Provider value={{ isDecrease, currentCount, deletedCount, actions }}>{children}</NumberBoxContext.Provider>;
};
