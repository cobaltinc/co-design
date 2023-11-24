import { createStyles } from '@co-design/core';

export default createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    display: 'inline-flex',
    borderRadius: theme.foundations.tokens.radius['radius-full'],
    backgroundColor: theme.foundations.tokens.color.specialty['image-on-bg'],
  },
  title: {
    display: 'inherit',
    alignItems: 'center',
    padding: '4px 6px',
    borderRadius: theme.foundations.tokens.radius['radius-full'],
    color: theme.foundations.tokens.color.text['text-light'],
    backgroundColor: theme.foundations.tokens.color.bg['bg-critical'],
    boxSizing: 'border-box',
  },
  message: {
    display: 'inherit',
    alignItems: 'center',
    borderRadius: '8px',
    padding: '6px',
    boxSizing: 'border-box',
  },
}));
