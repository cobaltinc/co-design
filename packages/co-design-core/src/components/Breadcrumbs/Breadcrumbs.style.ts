import { createStyles } from '@co-design/styles';

export default createStyles((theme) => ({
  root: {
    display: 'flex',
  },

  breadcrumb: {
    lineHeight: 1,
    whiteSpace: 'nowrap',
    WebkitTapHighlightColor: 'transparent',
  },

  separator: {
    marginLeft: theme.spacing.spacing2,
    marginRight: theme.spacing.spacing2,
    color: theme.colorScheme === 'dark' ? theme.colorPalettes.dark[2] : theme.colorPalettes.dark[7],
    lineHeight: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
