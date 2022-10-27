import { createStyles, CoPalette } from '@co-design/styles';

interface MarkStyles {
  color: CoPalette;
}

export default createStyles((theme, { color }: MarkStyles) => ({
  root: {
    backgroundColor: theme.palettes[color][theme.colorScheme === 'dark' ? 3 : 1],
    color: theme.colorScheme === 'dark' ? theme.palettes.gray[9] : 'inherit',
  },
}));
