import { ColorScheme, createStyles, defaultFontStyles } from '@co-design/styles';

interface TooltipStyles {
  colorScheme: ColorScheme;
}

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

export default createStyles((theme, { colorScheme }: TooltipStyles) => ({
  root: {
    display: 'inline-block',
  },

  balloon: {
    position: 'fixed',
    display: 'inline-block',
  },

  arrow: {
    position: 'absolute',
    width: 12,
    height: 12,
    backgroundColor: colorScheme === 'dark' ? theme.colors.white : theme.palettes.gray[9],
    userSelect: 'none',
    pointerEvents: 'none',
    // content 와 별개로 arrow shadow 지정 필요
    boxShadow: '-2px -2px 3px -1px rgba(0, 0, 0, 0.1)',

    '&[class^="top"]': {
      top: -18,
      transform: 'translate(-50%) rotate(-135deg)',
    },

    '&.top-left': {
      marginLeft: 12,
    },

    '&.top-right': {
      marginLeft: -12,
    },

    '&[class^="bottom"]': {
      bottom: -18,
      transform: 'translate(-50%) rotate(45deg)',
    },

    '&.bottom-left': {
      marginLeft: 12,
    },

    '&.bottom-right': {
      marginLeft: -12,
    },

    '&[class^="right"]': {
      right: -18,
      transform: 'translateY(-50%) rotate(-45deg)',
    },

    '&.right-top': {
      marginTop: 12,
    },

    '&.right-bottom': {
      marginTop: -12,
    },

    '&[class^="left"]': {
      left: -18,
      transform: 'translateY(-50%) rotate(135deg)',
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
    padding: theme.spacing.small,
    borderRadius: theme.radius.medium,
    backgroundColor: colorScheme === 'dark' ? theme.colors.white : theme.palettes.gray[9],
    ...defaultFontStyles(theme),
    fontSize: theme.fontSizes.small,
    color: colorScheme === 'dark' ? theme.palettes.gray[9] : theme.colors.white,

    // TODO: @co-design/styles 의 shadow token 재정립
    boxShadow: '0px 0px 4px rgba(0,0,0,0.12), 0px 4px 5px rgba(0,0,0,0.1)',

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
  title: {
    fontWeight: 700,
  },
  description: {
    color: colorScheme === 'dark' ? theme.palettes.gray[6] : theme.palettes.gray[3],
  },
}));
