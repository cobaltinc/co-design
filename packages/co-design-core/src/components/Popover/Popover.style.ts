import { CoSpacing, createStyles, defaultFontStyles } from '@co-design/styles';
import { getFieldValue } from '../../utils';

export type PopoverPlacement =
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

export type PopoverTrigger = 'hover' | 'click' | 'focus';

interface PopoverStyles {
  contentPadding: CoSpacing | number;
}

export default createStyles((theme, { contentPadding }: PopoverStyles) => ({
  root: {
    display: 'inline-block',
  },

  balloon: {
    position: 'fixed',
    display: 'inline-block',

    '&.top': {
      transform: 'translate(-50%, -100%)',
    },

    '&.top-left': {
      transform: 'translate(0, -100%)',
    },

    '&.top-right': {
      transform: 'translate(-100%, -100%)',
    },

    '&.bottom': {
      transform: 'translate(-50%)',
    },

    '&.bottom-right': {
      transform: 'translate(-100%)',
    },

    '&.right': {
      transform: 'translateY(-50%)',
    },

    '&.right-bottom': {
      transform: 'translateY(-100%)',
    },

    '&.left': {
      transform: 'translate(-100%, -50%)',
    },

    '&.left-top': {
      transform: 'translate(-100%, 0)',
    },

    '&.left-bottom': {
      transform: 'translate(-100%, -100%)',
    },
  },

  arrow: {
    position: 'absolute',
    width: 12,
    height: 12,
    backgroundColor: theme.colorScheme === 'dark' ? theme.palettes.gray[9] : theme.palettes.gray[0],
    userSelect: 'none',
    pointerEvents: 'none',
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.palettes.gray[8] : theme.palettes.gray[3]}`,
    borderLeft: `1px solid ${theme.colorScheme === 'dark' ? theme.palettes.gray[8] : theme.palettes.gray[3]}`,

    '&[class^="top"]': {
      bottom: 7,
      transform: 'rotate(-135deg)',
    },

    '&.top': {
      left: '50%',
      transform: 'translate(-50%) rotate(-135deg)',
    },

    '&.top-left': {
      left: 6,
    },

    '&.top-right': {
      right: 6,
    },

    '&[class^="bottom"]': {
      top: 7,
      transform: 'rotate(45deg)',
    },

    '&.bottom': {
      left: '50%',
      transform: 'translate(-50%) rotate(45deg)',
    },

    '&.bottom-left': {
      left: 6,
    },

    '&.bottom-right': {
      right: 6,
    },

    '&[class^="right"]': {
      left: 7,
      transform: 'rotate(-45deg)',
    },

    '&.right': {
      top: '50%',
      transform: 'translateY(-50%) rotate(-45deg)',
    },

    '&.right-top': {
      top: 6,
    },

    '&.right-bottom': {
      bottom: 6,
    },

    '&[class^="left"]': {
      right: 7,
      transform: 'rotate(135deg)',
    },

    '&.left': {
      top: '50%',
      transform: 'translateY(-50%) rotate(135deg)',
    },

    '&.left-top': {
      top: 6,
    },

    '&.left-bottom': {
      bottom: 6,
    },
  },

  content: {
    position: 'relative',
    padding: getFieldValue(contentPadding, theme.spacing),
    borderRadius: theme.radius.medium,
    backgroundColor: theme.colorScheme === 'dark' ? theme.palettes.gray[9] : theme.palettes.gray[0],
    ...defaultFontStyles(theme),
    fontSize: theme.fontSizes.small,
    color: theme.colorScheme === 'dark' ? theme.palettes.gray[0] : theme.palettes.gray[9],
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.palettes.gray[8] : theme.palettes.gray[3]}`,
    boxShadow: theme.shadows.small,

    '&[class^="top"]': {
      bottom: 0,
      marginBottom: 12,
    },

    '&[class^="bottom"]': {
      marginTop: 12,
    },

    '&[class^="right"]': {
      marginLeft: 12,
    },

    '&[class^="left"]': {
      right: 0,
      marginRight: 12,
    },
  },
}));
