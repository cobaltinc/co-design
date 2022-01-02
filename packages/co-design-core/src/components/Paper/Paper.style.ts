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
    color: theme.colorScheme === 'dark' ? theme.palettes.dark[0] : theme.palettes.dark[9],
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.darkBackground : theme.colors.lightBackground,
    boxSizing: 'border-box',
    borderRadius: getFieldValue(radius, theme.radius),
    boxShadow: theme.colorScheme === 'dark' ? theme.shadows[shadow].replaceAll(/0, 0, 0/gi, '255, 255, 255') : theme.shadows[shadow] || 'none',
    padding: getFieldValue(padding, theme.spacing),
    border: withBorder ? `1px solid ${theme.colorScheme === 'dark' ? theme.palettes.dark[6] : theme.palettes.dark[2]}` : undefined,
  },
}));
