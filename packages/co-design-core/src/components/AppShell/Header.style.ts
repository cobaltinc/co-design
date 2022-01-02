import { CoSpacing, CoZIndex, createStyles, defaultFontStyles } from '@co-design/styles';

export interface HeaderPosition {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

interface HeaderStyles {
  height: number | string;
  padding: CoSpacing | number;
  fixed: boolean;
  position: HeaderPosition;
  zIndex: CoZIndex | number;
}

export default createStyles((theme, { height, padding, fixed, position, zIndex }: HeaderStyles) => ({
  root: {
    ...defaultFontStyles(theme),
    ...position,
    zIndex: theme.fn.size({ size: zIndex, sizes: theme.zIndex }),
    height,
    maxHeight: height,
    position: fixed ? 'fixed' : 'static',
    boxSizing: 'border-box',
    padding: theme.fn.size({ size: padding, sizes: theme.spacing }),
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.darkBackground : theme.colors.lightBackground,
    borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.darkBorder : theme.colors.lightBorder}`,
  },
}));
