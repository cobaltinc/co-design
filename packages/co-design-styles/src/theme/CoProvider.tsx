import React, { createContext, useContext } from 'react';
import type { Options as EmotionCacheOptions } from '@emotion/cache';
import { DEFAULT_THEME } from './defaultTheme';
import type { CoThemeOverride, CoTheme } from './types';
import type { CSSObject } from '../tss';
import { mergeTheme } from './utils/mergeTheme';
import { NormalizeCSS } from './NormalizeCSS';
import { Global } from '../tss/Global';

type ProviderStyles = Record<string, Record<string, CSSObject> | ((theme: CoTheme) => Record<string, CSSObject>)>;

interface CoThemeContextType {
  theme: CoTheme;
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
  theme?: CoThemeOverride;
  styles?: ProviderStyles;
  emotionOptions?: EmotionCacheOptions;
  withNormalizeCSS?: boolean;
  withGlobalStyles?: boolean;
  children: React.ReactNode;
}

const GlobalStyles = () => {
  return (
    <Global
      styles={(theme) => ({
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },

        body: {
          fontFamily: theme.fontFamily,
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.darkBackground : theme.colors.lightBackground,
          color: theme.colorScheme === 'dark' ? theme.palettes.gray[0] : theme.palettes.gray[9],
          lineHeight: theme.lineHeight,
          fontSizes: theme.fontSizes.medium,
        } as any,
      })}
    />
  );
};

export const CoProvider = ({ theme, styles = {}, emotionOptions, withNormalizeCSS = false, withGlobalStyles = false, children }: CoProviderProps) => {
  return (
    <CoThemeContext.Provider value={{ theme: mergeTheme(DEFAULT_THEME, theme), styles, emotionOptions }}>
      {withNormalizeCSS && <NormalizeCSS />}
      {withGlobalStyles && <GlobalStyles />}
      {children}
    </CoThemeContext.Provider>
  );
};

CoProvider.displayName = '@co-design/styles/CoProvider';
