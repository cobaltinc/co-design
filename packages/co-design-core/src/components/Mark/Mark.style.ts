import { createStyles, CoColorPalette } from '@co-design/styles';

interface MarkStyles {
  color: CoColorPalette;
}

export default createStyles((theme, { color }: MarkStyles) => ({
  root: {
    backgroundColor: theme.colorPalettes[color][theme.colorScheme === 'dark' ? 4 : 2],
    color: theme.colorScheme === 'dark' ? theme.colorPalettes.dark[9] : 'inherit',
  },
}));
