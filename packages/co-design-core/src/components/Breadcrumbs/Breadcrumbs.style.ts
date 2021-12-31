import { CoSpacing, createStyles } from '@co-design/styles';
import { getFieldValue } from '../../utils';

interface BreadcrumbsStylesProps {
  spacing: CoSpacing | number;
}

export default createStyles((theme, { spacing }: BreadcrumbsStylesProps) => ({
  root: {
    display: 'flex',
  },

  breadcrumb: {
    lineHeight: 1,
    whiteSpace: 'nowrap',
    WebkitTapHighlightColor: 'transparent',
  },

  separator: {
    marginLeft: getFieldValue(spacing, theme.spacing),
    marginRight: getFieldValue(spacing, theme.spacing),
    color: theme.colorScheme === 'dark' ? theme.palettes.dark[2] : theme.palettes.dark[7],
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
