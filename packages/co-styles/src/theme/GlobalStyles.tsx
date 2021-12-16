import React from 'react';
import { Global } from '../tss/Global';

export function GlobalStyles() {
  return (
    <Global
      styles={(theme) => ({
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },

        body: {
          fontFamily: theme.fontFamily,
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.darkBackground : theme.colors.lightBackground,
          color: theme.colorScheme === 'dark' ? theme.colorPalettes.dark[0] : theme.colorPalettes.dark[9],
          lineHeight: theme.lineHeight,
          fontSizes: theme.fontSizes.medium,
        } as any,
      })}
    />
  );
}
