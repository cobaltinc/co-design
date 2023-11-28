import { ColorScheme, createStyles, defaultFontStyles } from '@co-design/styles';
import { getBoxShadow } from '../../utils';

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
    width: 8,
    height: 8,
    backgroundColor: colorScheme === 'dark' ? theme.foundations.tokens.color.bg.bg_surface_01 : theme.foundations.tokens.color.specialty.tooltip_bg,
    userSelect: 'none',
    pointerEvents: 'none',
    borderRadius: '1px',
    '&[class^="top"]': {
      top: -17,
      transform: 'translate(-50%) rotate(-135deg)',
    },

    '&.top-left': {
      marginLeft: 12,
    },

    '&.top-right': {
      marginLeft: -12,
    },

    '&[class^="bottom"]': {
      bottom: -17,
      transform: 'translate(-50%) rotate(45deg)',
    },

    '&.bottom-left': {
      marginLeft: 12,
    },

    '&.bottom-right': {
      marginLeft: -12,
    },

    '&[class^="right"]': {
      right: -17,
      transform: 'translateY(-50%) rotate(-45deg)',
    },

    '&.right-top': {
      marginTop: 12,
    },

    '&.right-bottom': {
      marginTop: -12,
    },

    '&[class^="left"]': {
      left: -17,
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
    display: 'flex',
    flexDirection: 'column',
    // TODO: spacing
    gap: '12px',
    position: 'absolute',
    // TODO: spacing
    padding: '12px',
    borderRadius: theme.foundations.tokens.radius.radius_01,
    backgroundColor: colorScheme === 'dark' ? theme.foundations.tokens.color.bg.bg_surface_01 : theme.foundations.tokens.color.specialty.tooltip_bg,
    ...defaultFontStyles(theme),
    fontSize: theme.foundations.font.body.caption.fontSize,
    lineHeight: theme.foundations.font.body.caption.lineHeight + 'px',
    color: colorScheme === 'dark' ? theme.foundations.tokens.color.text.text_default : theme.foundations.tokens.color.text.text_light,
    boxShadow: `${getBoxShadow(theme.foundations.effect.tooltip[0])}, ${getBoxShadow(theme.foundations.effect.tooltip[1])}`,
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
    fontWeight: theme.foundations.font.heading.heading_09.fontWeight,
    fontSize: theme.foundations.font.heading.heading_09.fontSize,
    lineHeight: theme.foundations.font.heading.heading_09.lineHeight + 'px',
    color: colorScheme === 'dark' ? theme.foundations.tokens.color.text.text_default : theme.foundations.tokens.color.text.text_light,
  },
  description: {
    color: colorScheme === 'dark' ? theme.foundations.tokens.color.text.text_caption : theme.foundations.tokens.color.text.text_inverse_caption,
  },
}));
