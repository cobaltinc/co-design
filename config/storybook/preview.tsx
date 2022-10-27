import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { CoProvider, ColorSchemeProvider } from '@co-design/primitive';

export const parameters = { layout: 'fullscreen', darkMode: { current: 'light' } };

function ThemeWrapper(props: any) {
  const colorScheme = useDarkMode() ? 'dark' : 'light';
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={() => {}}>
      <CoProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        {props.children}
      </CoProvider>
    </ColorSchemeProvider>
  );
}

export const decorators = [(renderStory: any) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];
