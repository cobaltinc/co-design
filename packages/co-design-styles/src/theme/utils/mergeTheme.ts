import { CoThemeOverride, CoTheme } from '../types';

export function mergeTheme(currentTheme: CoTheme, themeOverride?: CoThemeOverride): CoTheme {
  if (!themeOverride) {
    return currentTheme;
  }

  return Object.keys(currentTheme).reduce((acc, key) => {
    if (key === 'headings' && themeOverride.headings) {
      const sizes = themeOverride.headings
        ? Object.keys(currentTheme.headings).reduce((headingsAcc, h) => {
            headingsAcc[h] = {
              ...currentTheme.headings[h],
              ...themeOverride.headings[h],
            };
            return headingsAcc;
          }, {} as CoTheme['headings'])
        : currentTheme.headings;
      return {
        ...acc,
        headings: {
          ...currentTheme.headings,
          ...themeOverride.headings,
          ...sizes,
        },
      };
    }

    acc[key] = typeof themeOverride[key] === 'object' ? { ...currentTheme[key], ...themeOverride[key] } : themeOverride[key] || currentTheme[key];
    return acc;
  }, {} as CoTheme);
}
