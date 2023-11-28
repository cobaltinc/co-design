import { createStyles } from '@co-design/styles';

export default createStyles((theme) => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  page: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '32px',
    height: '32px',
    textAlign: 'center',
    fontSize: theme.foundations.font.body.body_02.fontSize,
    lineHeight: theme.foundations.font.body.body_02.lineHeight + 'px',
    color: theme.foundations.tokens.color.text.text_default,
    verticalAlign: 'middle',
    boxSizing: 'border-box',
    // TODO: spacing
    marginRight: '4px',
    cursor: 'pointer',
    borderRadius: theme.foundations.tokens.radius.radius_full,
    '&:last-of-type': {
      marginRight: '0px',
    },
    '&:hover': {
      backgroundColor: theme.foundations.tokens.color.bg.bg_base_light,
    },
  },
  active: {
    backgroundColor: theme.foundations.tokens.color.bg.bg_primary,
    color: theme.foundations.tokens.color.text.text_light,
    // color: 'red',
    '&:hover': {
      backgroundColor: theme.foundations.tokens.color.bg.bg_primary,
    },
  },
  arrow: {
    display: 'inline-block',
    width: '32px',
    height: '32px',
    verticalAlign: 'middle',
    '&:first-of-type': {
      marginRight: '4px',
    },
    '&:last-of-type': {
      marginLeft: '4px',
    },
  },
  disabled: {
    pointerEvents: 'none',
    cursor: 'not-allowed',
  },
  bullet: {
    fontSize: theme.foundations.font.body.body_02.fontSize,
    lineHeight: theme.foundations.font.body.body_02.lineHeight + 'px',
    color: theme.foundations.tokens.color.text.text_default,
    marginRight: '4px',
  },
  circle: {
    display: 'inline-block',
  },
}));
