import { ColorScheme, createStyles } from '@co-design/styles';

export type TooltipPlacement =
  | 'top-left'
  | 'top'
  | 'top-right'
  | 'left-top'
  | 'left'
  | 'left-bottom'
  | 'right-top'
  | 'right'
  | 'right-bottom'
  | 'bottom-left'
  | 'bottom'
  | 'bottom-right';

export type TooltipTrigger = 'hover' | 'click' | 'focus';

export default createStyles((theme) => ({
  root: {
    display: 'inline-block',
  },

  balloon: {
    position: 'fixed',
    display: 'inline-block',
  },

  arrow: {
    content: '""',
    position: 'absolute',
    display: 'inline-block',
    userSelect: 'none',
    pointerEvents: 'none',
    color: theme.colorScheme === 'dark' ? theme.colorPalettes.dark[0] : theme.colorPalettes.dark[9],
    boxShadow: theme.shadows.large,

    '&[class^="top"]': {
      top: -12,
      transform: 'translate(-50%) rotate(180deg)',
    },

    '&.top-left': {
      marginLeft: 12,
    },

    '&.top-right': {
      marginLeft: -12,
    },

    '&[class^="bottom"]': {
      bottom: -12,
      transform: 'translate(-50%)',
    },

    '&.bottom-left': {
      marginLeft: 12,
    },

    '&.bottom-right': {
      marginLeft: -12,
    },

    '&[class^="right"]': {
      right: -18,
      transform: 'translateY(-50%) rotate(-90deg)',
    },

    '&.right-top': {
      marginTop: 12,
    },

    '&.right-bottom': {
      marginTop: -12,
    },

    '&[class^="left"]': {
      left: -18,
      transform: 'translateY(-50%) rotate(90deg)',
    },

    '&.left-top': {
      marginTop: 12,
    },

    '&.left-bottom': {
      marginTop: -12,
    },
  },

  content: {
    position: 'absolute',
    padding: '4px 8px',
    borderRadius: 4,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colorPalettes.dark[0] : theme.colorPalettes.dark[9],
    fontFamily: theme.fontFamily,
    fontSize: theme.fontSizes.small,
    color: theme.colorScheme === 'dark' ? theme.colorPalettes.dark[9] : theme.colorPalettes.dark[0],
    boxShadow: theme.shadows.large,

    '&[class^="top"]': {
      bottom: 0,
      marginBottom: 12,
    },

    '&.top': {
      transform: 'translate(-50%)',
    },

    '&.top-right': {
      transform: 'translate(-100%)',
    },

    '&[class^="bottom"]': {
      marginTop: 12,
    },

    '&.bottom': {
      transform: 'translate(-50%)',
    },

    '&.bottom-right': {
      transform: 'translate(-100%)',
    },

    '&[class^="right"]': {
      marginLeft: 12,
    },

    '&.right': {
      transform: 'translateY(-50%)',
    },

    '&.right-bottom': {
      transform: 'translateY(-100%)',
    },

    '&[class^="left"]': {
      right: 0,
      marginRight: 12,
    },

    '&.left': {
      transform: 'translateY(-50%)',
    },

    '&.left-bottom': {
      transform: 'translateY(-100%)',
    },
  },
}));
