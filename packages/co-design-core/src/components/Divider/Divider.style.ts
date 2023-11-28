import { createStyles, CoSpacing } from '@co-design/styles';
import { getFieldValue } from '../../utils';

interface DividerStyles {
  variant: string;
  margin: CoSpacing | number;
  strong: boolean;
}

export const sizes = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4,
  xl: 5,
};

export default createStyles((theme, { margin, variant, strong }: DividerStyles) => {
  const borderColor = strong ? theme.foundations.tokens.color.border.border_strong : theme.foundations.tokens.color.border.border_default;
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
      color: borderColor,

      '&::before': {
        content: '""',
        flex: 1,
        height: 1,
        borderTopWidth: 1,
        borderTopColor: borderColor,
        borderTopStyle: variant as any,
        marginRight: theme.spacing.small,
      },

      '&::after': {
        content: '""',
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: borderColor,
        borderTopStyle: variant as any,
        marginLeft: theme.spacing.small,
      },
    },

    horizontal: {
      border: 0,
      borderTopWidth: 1,
      borderTopColor: borderColor,
      borderTopStyle: variant as any,
      margin: `${getFieldValue(margin, theme.spacing)}px 0`,
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
      margin: `0 ${getFieldValue(margin, theme.spacing)}px`,
    },
  };
});
