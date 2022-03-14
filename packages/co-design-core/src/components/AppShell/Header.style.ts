import { CoSpacing, CoZIndex, createStyles, defaultFontStyles } from '@co-design/styles';

interface HeaderStyles {
  height: number | string;
  padding: CoSpacing | number;
  fixed: boolean;
  zIndex: CoZIndex | number;
}

export default createStyles((theme, { height, padding, fixed, zIndex }: HeaderStyles) => ({
  root: {
    ...defaultFontStyles(theme),
    top: 0,
    left: 0,
    right: 0,
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
