import { CoPalette, createStyles } from '@co-design/styles';

interface TagStyles {
  color: CoPalette;
  fullWidth: boolean;
  strong: boolean;
}

export default createStyles((theme, { color, fullWidth, strong }: TagStyles) => ({
  root: {
    display: fullWidth ? 'flex' : 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${theme.spacing.xsmall}px ${theme.spacing.small}px`,
    fontWeight: strong ? 'bold' : 'normal',
    fontSize: theme.fontSizes.tiny,
    color: theme.palettes[color][theme.colorScheme === 'light' ? 5 : 3],
    borderRadius: theme.radius.large,
    backgroundColor: theme.palettes[color][theme.colorScheme === 'light' ? 1 : 7],
    boxSizing: 'border-box',
  },
}));
