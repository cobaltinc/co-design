import { createStyles } from '@co-design/styles';
import { getFieldValue } from '../../utils';

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

export default createStyles((theme, { overflow, size }: ModalStyles) => ({
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
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSizes.xlarge,
    marginRight: theme.spacing.spacing3,
    textOverflow: 'ellipsis',
    display: 'block',
    wordBreak: 'break-word',
  },

  modal: {
    position: 'relative',
    zIndex: 5,
    width: getFieldValue(size, sizes),
    outline: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.palettes.dark[7] : theme.colors.white,
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.spacing2,
    marginTop: -8,
    marginRight: -8,
  },

  body: {
    maxHeight: overflow === 'inside' ? 'calc(100vh - 185px)' : null,
    overflowY: overflow === 'inside' ? 'auto' : null,
    wordBreak: 'break-word',
  },
}));
