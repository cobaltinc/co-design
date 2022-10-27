import { createStyles } from '@co-design/styles';

export default createStyles((theme) => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.gray[6] : theme.colors.white,
  },
}));
