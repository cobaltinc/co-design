import { createStyles, CoPalette, CoRadius, CoSize } from '@co-design/styles';

export interface ProgressStylesParams {
  color: CoPalette;
  radius: CoRadius | number;
  size: CoSize | number;
  labelPosition: 'top' | 'side';
}

export default createStyles((theme, { color, radius, size, labelPosition }: ProgressStylesParams) => {
  const heights = {
    small: theme.foundations.tokens.size['size-02'],
    medium: theme.foundations.tokens.size['size-03'],
    large: theme.foundations.tokens.size['size-04'],
    xlarge: theme.foundations.tokens.size['size-05'],
  };

  const fontSizes = {
    small: theme.foundations.typography.body.caption.fontSize,
    medium: theme.foundations.typography.body.caption.fontSize,
    large: theme.foundations.typography.body['body-02'].fontSize,
    xlarge: theme.foundations.typography.body['body-02'].fontSize,
  };

  return {
    root: {
      ...(labelPosition === 'side'
        ? {
            flex: 1,
          }
        : {}),
      position: 'relative',
      height: theme.fn.size({ size, sizes: heights }),
      backgroundColor: theme.foundations.tokens.color.bg['bg-base-light'],
      borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
      overflow: 'hidden',
    },

    bar: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color || theme.foundations.tokens.color.bg['bg-primary'],
      transition: 'width 100ms linear',

      '&:first-of-type': {
        borderTopLeftRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
        borderBottomLeftRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
      },

      '@media (prefers-reduced-motion)': {
        transitionDuration: '0ms',
      },
    },

    label: {
      color: theme.foundations.tokens.color.text['text-default'],
      fontSize: theme.fn.size({ size, sizes: fontSizes }),
      userSelect: 'none',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    },

    percent: {
      color: theme.foundations.tokens.color.text['text-caption'],
      fontSize: theme.fn.size({ size, sizes: fontSizes }),
    },
  };
});
