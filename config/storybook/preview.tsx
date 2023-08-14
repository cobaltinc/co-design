import React from 'react';
import type { Preview } from '@storybook/react';
import { CoProvider, ColorSchemeProvider } from '@co-design/styles';
import { useDarkMode } from 'storybook-dark-mode';

const ThemeWrapper = (props: any) => {
  const colorScheme = useDarkMode() ? 'dark' : 'light';

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={() => {}}>
      <CoProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        {props.children}
      </CoProvider>
    </ColorSchemeProvider>
  );
};

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    darkMode: {
      current: 'dark',
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [(renderStory) => <ThemeWrapper>{renderStory()}</ThemeWrapper>],
};

export default preview;
