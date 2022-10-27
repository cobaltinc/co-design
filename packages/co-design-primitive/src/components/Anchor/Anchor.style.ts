import { CoColor, CoPalette, createStyles } from '@co-design/styles';

interface AnchorStyles {
  color: CoPalette | CoColor | string;
  underlineOnHover: boolean;
}

export default createStyles((theme, { color, underlineOnHover }: AnchorStyles) => ({
  root: {
    color: color in theme.palettes ? theme.palettes[color][6] : color in theme.colors ? theme.colors[color] : color,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    padding: 0,
    border: 0,

    '&:hover': {
      textDecoration: underlineOnHover ? 'underline' : undefined,
    },
  },
}));
