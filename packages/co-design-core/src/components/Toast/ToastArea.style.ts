import { createStyles } from '@co-design/styles';

export default createStyles(() => ({
  root: {
    position: 'fixed',
    top: '24px',
    right: '24px',
    maxWidth: '450px',
    width: '95%',
    zIndex: '2000',
    '@media (max-width: 500px)': {
      right: '2.5%',
    },
  },
}));
