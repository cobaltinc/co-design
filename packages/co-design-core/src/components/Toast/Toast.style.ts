import { CoColor, CoPalette, CoRadius, createStyles } from '@co-design/styles';

interface NotificationStyles {
  color: CoPalette | CoColor | string;
  radius: CoRadius | number;
  closable: boolean;
}

export default createStyles((theme, { color, radius, closable }: NotificationStyles, getRef) => {
  const icon = getRef('icon');
  const _radius = theme.fn.size({ size: radius, sizes: theme.radius });
  const topBottom = Math.min(Math.max(_radius / 1.2, 4), 30);

  return {
    closeButton: {},

    icon: {
      ref: icon,
      boxSizing: 'border-box',
      marginRight: theme.spacing.medium,
      width: 28,
      height: 28,
      borderRadius: 28,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.colors.white,
    },

    withIcon: {
      paddingLeft: theme.spacing.small,

      '&::before': {
        display: 'none',
      },
    },

    root: {
      boxSizing: 'border-box',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing.large,
      paddingRight: theme.spacing.xsmall,
      paddingTop: theme.spacing.small,
      paddingBottom: theme.spacing.small,
      borderRadius: _radius,
      backgroundColor: theme.colorScheme === 'dark' ? theme.palettes.dark[8] : theme.colors.white,
      boxShadow: theme.shadows.large,
      border: `1px solid ${theme.colorScheme === 'dark' ? theme.palettes.darkBorder : theme.palettes.lightBorder}`,

      '&::before': {
        content: "''",
        display: 'block',
        position: 'absolute',
        width: 6,
        top: topBottom,
        bottom: topBottom,
        left: 8,
        borderRadius: _radius,
        backgroundColor:
          color in theme.palettes ? theme.palettes[color][theme.colorScheme === 'dark' ? 4 : 5] : color in theme.colors ? theme.colors[color] : color,
      },

      [`& .${icon}`]: {
        color: theme.colors.white,
      },
    },

    body: {
      flex: 1,
      maxWidth: !closable ? 'calc(100% - 40px)' : '100%', // space for close button and margin
      marginRight: 10,
    },

    spinner: {
      marginRight: theme.spacing.medium,
    },

    title: {
      lineHeight: 1.4,
      marginBottom: 2,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      color: theme.colorScheme === 'dark' ? theme.colors.white : theme.palettes.dark[9],
    },

    description: {
      color: theme.colorScheme === 'dark' ? theme.palettes.dark[3] : theme.palettes.dark[7],
      lineHeight: 1.4,
      overflow: 'hidden',
      textOverflow: 'ellipsis',

      '&:only-child': {
        color: theme.colorScheme === 'dark' ? theme.palettes.dark[0] : theme.colors.black,
      },
    },
  };
});
