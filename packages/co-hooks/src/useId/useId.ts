import { useEffect, useState } from 'react';

let globalId = 0;
export const useId = (idOverride?: string): string | undefined => {
  const [defaultId, setDefaultId] = useState(idOverride);
  const id = idOverride || defaultId;

  useEffect(() => {
    if (defaultId == null) {
      globalId += 1;
      setDefaultId(`co-${globalId}`);
    }
  }, [defaultId]);

  return id;
};
