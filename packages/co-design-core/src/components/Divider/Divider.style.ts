import { createStyles, CoSpacing } from '@co-design/styles';

interface DividerStyles {
  variant: string;
  margin: CoSpacing | number;
}

export const sizes = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5,
};

export default createStyles((theme, { margin, variant }: DividerStyles) => {
  const borderColor = theme.colorScheme === 'light' ? theme.colors.lightBorder : theme.colors.darkBorder;

  return {
    withLabel: {
      borderTop: '0 !important',
    },

    left: {
      '&::before': {
        display: 'none',
      },
    },

    right: {
      '&::after': {
        display: 'none',
      },
    },

    label: {
      display: 'flex',
      alignItems: 'center',
      color: theme.colors.border,

      '&::before': {
        content: '""',
        flex: 1,
        height: 1,
        // borderTop: theme.colorScheme === 'light' ? theme.colors.lightBorder : theme.colors.darkBorder,
        marginRight: theme.spacing.spacing2,
      },

      '&::after': {
        content: '""',
        flex: 1,
        // borderTop: theme.colors.lightBorder,
        marginLeft: theme.spacing.spacing2,
      },
    },

    horizontal: {
      border: 0,
      borderTopWidth: 1,
      borderTopColor: borderColor,
      borderTopStyle: variant as any,
      margin: `${margin in theme.spacing ? theme.spacing[margin] : margin}px 0`,
    },

    vertical: {
      display: 'inline-block',
      verticalAlign: 'middle',
      height: theme.fontSizes.medium,
      border: 0,
      alignSelf: 'stretch',
      borderLeftWidth: 1,
      borderLeftColor: borderColor,
      borderLeftStyle: variant as any,
      margin: `0 ${margin in theme.spacing ? theme.spacing[margin] : margin}px`,
    },
  };
});
