import React from 'react';
import { createStyles, CoTheme, defaultFontStyles } from '@co-design/styles';

export const sizes = {
  xsmall: 180,
  small: 240,
  medium: 320,
  large: 360,
  xlarge: 500,
  full: '100%',
};

export type DrawerPosition = 'top' | 'bottom' | 'left' | 'right';

interface DrawerStyles {
  position: DrawerPosition;
  size: number | string;
}

interface GetPositionStyles {
  position: DrawerPosition;
  size: number | string;
  theme: CoTheme;
}

const getPositionStyles = ({ position, size, theme }: GetPositionStyles): Partial<Record<keyof React.CSSProperties, any>> => {
  switch (position) {
    case 'top':
      return { top: 0, left: 0, right: 0, height: theme.fn.size({ size, sizes }) };

    case 'bottom':
      return { bottom: 0, left: 0, right: 0, height: theme.fn.size({ size, sizes }) };

    case 'right':
      return { bottom: 0, top: 0, right: 0, width: theme.fn.size({ size, sizes }) };

    case 'left':
      return { bottom: 0, top: 0, left: 0, width: theme.fn.size({ size, sizes }) };

    default:
      return null;
  }
};

export default createStyles((theme, { position, size }: DrawerStyles, getRef) => {
  const noOverlay = getRef('noOverlay');

  return {
    closeButton: {},
    overlay: {},

    noOverlay: {
      ref: noOverlay,
    },

    root: {
      [`&:not(.${noOverlay})`]: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
    },

    drawer: {
      ...getPositionStyles({ position, size, theme }),
      maxWidth: '100%',
      maxHeight: '100vh',
      position: 'fixed',
      outline: 0,
    },

    title: {
      ...defaultFontStyles(theme),
      marginRight: theme.spacing.medium,
      fontSize: theme.fontSizes.xlarge,
      textOverflow: 'ellipsis',
      display: 'block',
      wordBreak: 'break-word',
    },

    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: theme.spacing.medium,
    },
  };
});
