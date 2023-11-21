import { CSSObject, CoColor, CoPalette, createStyles } from '@co-design/styles';
import { anatomy, parts } from './Abc.anatomy';
import type { AnatomyPartName } from '@co-design/anatomy';

interface AnchorStyles {
  color: CoPalette | CoColor | string;
  underlineOnHover: boolean;
}

type StyleKeys = Extract<AnatomyPartName<typeof anatomy>, 'root' | 'label'>;

export default createStyles<StyleKeys, AnchorStyles>((theme, { color, underlineOnHover }: AnchorStyles) => ({
  root: {
    margin: 0,
    padding: 0,
  },
  label: {
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

// as Record<AnatomyPartName<typeof anatomy>, CSSObject>
