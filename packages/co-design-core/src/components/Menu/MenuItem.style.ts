import { CoColor, CoPalette, CoSpacing, createStyles, defaultFontStyles } from '@co-design/styles';

interface MenuItemStyles {
  color: CoPalette | CoColor | string;
  padding: CoSpacing | number;
}

export default createStyles((theme, { color, padding }: MenuItemStyles) => ({
  item: {
    ...defaultFontStyles(theme),
    WebkitTapHighlightColor: 'transparent',
    fontSize: theme.fontSizes.medium,
    border: 0,
    backgroundColor: 'transparent',
    outline: 0,
    width: '100%',
    textAlign: 'left',
    display: 'block',
    textDecoration: 'none',
    boxSizing: 'border-box',
    padding: `${theme.fn.spacing(1.5)}px ${theme.fn.size({ size: padding, sizes: theme.spacing })}px`,
    cursor: 'pointer',
    color:
      color in theme.palettes
        ? theme.palettes[color][theme.colorScheme === 'dark' ? 3 : 7]
        : color in theme.colors
        ? theme.colors[color]
        : theme.colorScheme === 'dark'
        ? theme.palettes.dark[3]
        : theme.palettes.dark[7],

    '&:disabled': {
      color: theme.colorScheme === 'dark' ? theme.palettes.dark[3] : theme.palettes.dark[5],
      pointerEvents: 'none',
    },
  },

  itemHovered: {
    backgroundColor: color
      ? theme.fn.rgba(
          color in theme.palettes
            ? theme.palettes[color][theme.colorScheme === 'dark' ? 8 : 2]
            : color in theme.colors
            ? theme.colors[color]
            : theme.colorScheme === 'dark'
            ? theme.palettes.dark[8]
            : theme.palettes.dark[2],
          theme.colorScheme === 'dark' ? 0.35 : 1,
        )
      : theme.colorScheme === 'dark'
      ? theme.fn.rgba(theme.palettes.dark[8], 0.35)
      : theme.palettes.dark[2],
  },

  itemInner: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },

  itemBody: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },

  itemIcon: {
    position: 'relative',
    marginRight: theme.spacing.small,
    width: 20,
    height: 20,

    '& *': {
      display: 'block',
      width: '100%',
      height: '100%',
    },
  },

  itemLabel: {
    ...defaultFontStyles(theme),
    display: 'inline',
    lineHeight: 1,
  },
}));
