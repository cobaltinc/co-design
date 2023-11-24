import { createStyles } from '@co-design/core';

interface BadgeStyles {
  size: 'small' | 'medium' | 'large' | number;
  contentLength: number;
}

export default createStyles((theme, { size, contentLength }: BadgeStyles) => {
  const badgeSizes = {
    small: theme.foundations.tokens.size['size-07'],
    medium: theme.foundations.tokens.size['size-08'],
    large: theme.foundations.tokens.size['size-09'],
  };

  const dotSizes = {
    small: theme.foundations.tokens.size['size-03'],
    medium: theme.foundations.tokens.size['size-04'],
    large: theme.foundations.tokens.size['size-05'],
  };

  return {
    container: {
      display: 'inline-block',
      position: 'relative',
      verticalAlign: 'middle',
      width: theme.fn.size({ size, sizes: badgeSizes }) + (contentLength - 1) * 16,
      height: theme.fn.size({ size, sizes: badgeSizes }),
    },
    badge: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: `1px solid ${theme.foundations.tokens.color.border['border-light']}`,
      borderRadius: theme.foundations.tokens.radius['radius-full'],
      backgroundColor: theme.foundations.tokens.color.bg['bg-critical'],
      padding: theme.foundations.tokens.size['size-02'],
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    dot: {
      padding: 0,
      width: theme.fn.size({ size, sizes: dotSizes }),
      height: theme.fn.size({ size, sizes: dotSizes }),
      border: `1px solid ${theme.foundations.tokens.color.border['border-light']}`,
      borderRadius: theme.foundations.tokens.radius['radius-full'],
    },
  };
});
