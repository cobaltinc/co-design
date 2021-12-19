import { createStyles, CoSpacing } from '@co-design/styles';
import { getFieldValue } from '../../utils';

interface AvatarsGroupStyles {
  spacing: CoSpacing | number;
}

export default createStyles((theme, { spacing }: AvatarsGroupStyles) => ({
  root: {
    display: 'flex',
    paddingLeft: getFieldValue(spacing, theme.spacing) / 2,
  },

  child: {
    marginLeft: -getFieldValue(spacing, theme.spacing) / 2,
    background: `${theme.colorScheme === 'dark' ? theme.colorPalettes.dark[9] : theme.colors.white}`,
    border: `2px solid ${theme.colorScheme === 'dark' ? theme.colorPalettes.dark[9] : theme.colors.white}`,
  },

  truncated: {
    fontFamily: theme.fontFamily,
    lineHeight: 1,
    color: theme.colorScheme === 'dark' ? theme.colorPalettes.dark[0] : theme.colorPalettes.dark[9],
    width: '100%',
    height: '100%',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colorPalettes.dark[7] : theme.colorPalettes.dark[3],
  },
}));
