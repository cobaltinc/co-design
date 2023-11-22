import { createStyles, defaultFontStyles } from '@co-design/styles';
import { getBoxShadow, getFieldValue } from '../../utils';

export const sizes = {
  xsmall: 300,
  small: 440,
  medium: 600,
  large: 860,
  xlarge: 1020,
  full: '100%',
};

interface ModalStyles {
  overflow: 'outside' | 'inside';
  size: string | number;
}

export default createStyles((theme, { overflow, size }: ModalStyles) => {
  const borderRadius = theme.foundations.tokens.radius['radius-01'];

  return {
    root: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },

    inner: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 4,
      overflowY: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    title: {
      ...defaultFontStyles(theme),
      fontSize: theme.fontSizes.xlarge,
      marginRight: theme.spacing.medium,
      textOverflow: 'ellipsis',
      display: 'block',
      wordBreak: 'break-word',
    },

    modal: {
      position: 'relative',
      zIndex: 5,
      width: getFieldValue(size, sizes),
      outline: 0,
      backgroundColor: theme.colorScheme === 'dark' ? theme.palettes.gray[6] : theme.colors.white,
    },

    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: `${theme.foundations.tokens.size['size-06']}px ${theme.foundations.tokens.size['size-08']}px`,
      backgroundColor: theme.foundations.tokens.color.bg['bg-03'],
      borderRadius: `${borderRadius}px ${borderRadius}px 0 0`,
      boxShadow: getBoxShadow(theme.foundations.effect['border-top']),
    },

    body: {
      maxHeight: overflow === 'inside' ? 'calc(100vh - 185px)' : null,
      overflowY: overflow === 'inside' ? 'auto' : null,
      wordBreak: 'break-word',
      padding: theme.foundations.tokens.size['size-08'],
    },

    footer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      // TODO: use spacing
      gap: 16,
      padding: `${theme.foundations.tokens.size['size-06']}px ${theme.foundations.tokens.size['size-08']}px`,
      backgroundColor: theme.foundations.tokens.color.bg['bg-03'],
      borderRadius: `${borderRadius}px ${borderRadius}px 0 0`,
      boxShadow: getBoxShadow(theme.foundations.effect['border-bottom']),
    },
  };
});
