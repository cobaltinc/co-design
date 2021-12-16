import { CoColorPalette, createStyles } from '@co/styles';

interface TagStyles {
  color: CoColorPalette;
  fullWidth: boolean;
  strong: boolean;
}

export default createStyles((theme, { color, fullWidth, strong }: TagStyles) => ({
  root: {
    display: fullWidth ? 'flex' : 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.spacing1,
    fontWeight: strong ? 'bold' : 'normal',
    fontSize: theme.fontSizes.tiny,
    color: theme.colorPalettes[color][theme.colorScheme === 'light' ? 6 : 4],
    borderRadius: theme.radius.large,
    backgroundColor: theme.colorPalettes[color][theme.colorScheme === 'light' ? 2 : 8],
    boxSizing: 'border-box',
  },
}));
