import { createStyles, CoSize, CoSpacing } from '@co-design/styles';

interface MenuStyles {
  padding: CoSpacing | number;
}

export default createStyles((theme, { padding }: MenuStyles) => ({
  root: {
    position: 'relative',
  },

  divider: {},

  label: {
    color: theme.colorScheme === 'dark' ? theme.palettes.gray[4] : theme.palettes.gray[5],
    fontSize: theme.fontSizes.small,
    paddingLeft: theme.fn.size({ size: padding, sizes: theme.spacing }),
    paddingRight: theme.fn.size({ size: padding, sizes: theme.spacing }),
    paddingBottom: theme.spacing.xsmall / 2,
    paddingTop: 12,
    cursor: 'default',
  },
}));
