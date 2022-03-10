import { createStyles, CoPalette } from '@co-design/styles';

interface MarkStyles {
  color: CoPalette;
}

export default createStyles((theme, { color }: MarkStyles) => ({
  root: {
    backgroundColor: theme.palettes[color][theme.colorScheme === 'dark' ? 4 : 2],
    color: theme.colorScheme === 'dark' ? theme.palettes.gray[9] : 'inherit',
  },
}));
