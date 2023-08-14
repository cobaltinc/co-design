import { Children, isValidElement } from 'react';

export const convertReactNodeTo = <T>(parentName: string, childName: string, reactNode: React.ReactNode) => {
  return Children.toArray(reactNode).filter((element) => {
    if (isValidElement<T>(element) === false) {
      console.warn(`%c ${parentName}\n\n`, 'font-weight: bold; font-size: 16px;', `Only accepts ${childName} as it's children`);
      return false;
    }

    return true;
  });
};
