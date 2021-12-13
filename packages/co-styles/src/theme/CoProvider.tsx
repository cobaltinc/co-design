import React, { createContext, useContext } from 'react';
import type { Options as EmotionCacheOptions } from '@emotion/cache';
import { DEFAULT_THEME } from './default-theme';
import type { MantineThemeOverride, MantineTheme } from './types';
import type { CSSObject } from '../tss';
import { mergeTheme } from './utils/merge-theme/merge-theme';
import { NormalizeCSS } from './NormalizeCSS';
import { GlobalStyles } from './GlobalStyles';

type ProviderStyles = Record<string, Record<string, CSSObject> | ((theme: MantineTheme) => Record<string, CSSObject>)>;

interface CoThemeContextType {
  theme: MantineTheme;
  styles: ProviderStyles;
  emotionOptions: EmotionCacheOptions;
}

const CoThemeContext = createContext<CoThemeContextType>({
  theme: DEFAULT_THEME,
  styles: {},
  emotionOptions: { key: 'co', prepend: true },
});

export function useCoTheme() {
  return useContext(CoThemeContext)?.theme || DEFAULT_THEME;
}

export function useCoThemeStyles() {
  return useContext(CoThemeContext)?.styles || {};
}

export function useCoEmotionOptions(): EmotionCacheOptions {
  return useContext(CoThemeContext)?.emotionOptions || { key: 'co', prepend: true };
}

interface CoProviderProps {
  theme?: MantineThemeOverride;
  styles?: ProviderStyles;
  emotionOptions?: EmotionCacheOptions;
  withNormalizeCSS?: boolean;
  withGlobalStyles?: boolean;
  children: React.ReactNode;
}

export const CoProvider = ({ theme, styles = {}, emotionOptions, withNormalizeCSS = false, withGlobalStyles = false, children }: CoProviderProps) => {
  return (
    <CoThemeContext.Provider value={{ theme: mergeTheme(DEFAULT_THEME, theme), styles, emotionOptions }}>
      {withNormalizeCSS && <NormalizeCSS />}
      {withGlobalStyles && <GlobalStyles />}
      {children}
    </CoThemeContext.Provider>
  );
};

CoProvider.displayName = '@co/styles/CoProvider';
