import { CoSpacing, createStyles } from '@co-design/styles';
import { getFieldValue } from '../../utils';

interface BreadcrumbsStylesProps {
  spacing: CoSpacing | number;
}

export default createStyles((theme, { spacing }: BreadcrumbsStylesProps, getRef) => {
  const separator = getRef('separator');

  return {
    root: {
      display: 'flex',
      alignItems: 'center',
    },

    breadcrumb: {
      lineHeight: 1,
      whiteSpace: 'nowrap',
      WebkitTapHighlightColor: 'transparent',
      cursor: 'pointer',
      '&:disabled': {
        cursor: 'not-allowed',
        color: theme.foundations?.tokens?.color?.text?.text_disabled,

        [`.${separator}`]: {
          color: theme.foundations?.tokens?.color?.icon?.icon_disabled,
        },
      },
      '&:not(:disabled):hover': {
        color: theme.foundations?.tokens?.color?.text?.text_primary,
      },
      '&:nth-last-of-type(1)': {
        fontWeight: theme.fontWeights.semi_bold,
        color: theme.foundations?.tokens?.color?.text?.text_default,
      },
    },

    separator: {
      ref: separator,
      marginRight: spacing !== undefined ? getFieldValue(spacing, theme.spacing) : theme.foundations.tokens.size.size_02,
      color: theme.foundations?.tokens?.color?.icon?.icon_default,
      lineHeight: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
});
