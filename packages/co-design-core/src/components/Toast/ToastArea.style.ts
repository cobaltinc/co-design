import { DEFAULT_Z_INDEX, createStyles } from '@co-design/styles';

export default createStyles(() => ({
  root: {
    position: 'fixed',
    top: '24px',
    right: '24px',
    maxWidth: '320px',
    width: '95%',
    zIndex: DEFAULT_Z_INDEX.toast,
    '@media (max-width: 500px)': {
      right: '2.5%',
    },
  },
}));
