import React from 'react';
import { Global } from '../tss';

export function GlobalStyles() {
  return (
    <Global
      styles={(theme) => ({
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },

        body: {
          fontFamily: theme.fontFamily,
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.white,
          color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.black,
          lineHeight: theme.lineHeight,
          fontSizes: theme.fontSizes.medium,
        } as any,
      })}
    />
  );
}
