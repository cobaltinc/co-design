import { useMediaQuery } from '../useMediaQuery';

export const useColorScheme = () => {
  return useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';
};
