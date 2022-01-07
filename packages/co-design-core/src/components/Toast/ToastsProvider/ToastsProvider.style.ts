import { createStyles } from '@co-design/styles';

export default createStyles((theme) => ({
  toasts: {
    width: `calc(100% - ${theme.spacing.medium * 2}px)`,
    boxSizing: 'border-box',
    position: 'fixed',
    zIndex: 1000,
  },

  toast: {
    '&:not(:first-of-type)': {
      marginTop: theme.spacing.small,
    },
  },
}));
