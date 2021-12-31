import { CoRadius, CoShadows, CoSpacing, createStyles } from '@co-design/styles';
import { getFieldValue } from '../../utils';

interface PaperStyles {
  radius: CoRadius | number;
  shadow: CoShadows;
  padding: CoSpacing | number;
  withBorder: boolean;
}

export default createStyles((theme, { radius, shadow, padding, withBorder }: PaperStyles) => ({
  root: {
    WebkitTapHighlightColor: 'transparent',
    display: 'block',
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.palettes.dark[0] : theme.colors.black,
    backgroundColor: theme.colorScheme === 'dark' ? theme.palettes.dark[7] : theme.colors.white,
    boxSizing: 'border-box',
    borderRadius: getFieldValue(radius, theme.radius),
    boxShadow: theme.shadows[shadow] || shadow || 'none',
    padding: getFieldValue(padding, theme.spacing),
    border: withBorder ? `1px solid ${theme.colorScheme === 'dark' ? theme.palettes.dark[6] : theme.palettes.dark[2]}` : undefined,
  },
}));
