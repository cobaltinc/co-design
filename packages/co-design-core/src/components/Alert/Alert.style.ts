import { createStyles } from '@co-design/styles';

export default createStyles((theme) => {
  const borderWidth = 1;

  return {
    root: {
      position: 'relative',
      WebkitTapHighlightColor: 'transparent',
      textDecoration: 'none',
      color: theme.foundations.tokens.color.text.text_default,
      borderRadius: theme.foundations.tokens.radius.radius_01,
      minHeight: theme.foundations.tokens.size.size_14,
      borderWidth,
      borderStyle: 'solid',
      padding: `${theme.foundations.tokens.size.size_06 - borderWidth}px ${theme.foundations.tokens.size.size_07 - borderWidth}px}`,
    },

    message: {
      flex: 1,
    },

    title: {},

    content: {},

    icon: {
      alignSelf: 'flex-start',
    },

    close: {
      alignSelf: 'flex-start',
      fill: theme.foundations.tokens.color.icon.icon_default,
      cursor: 'pointer',
    },

    base: {
      backgroundColor: theme.foundations.tokens.color.bg.bg_base_light,
      borderColor: theme.foundations.tokens.color.border.border_default,
    },

    info: {
      backgroundColor: theme.foundations.tokens.color.bg.bg_primary_light,
      borderColor: theme.foundations.tokens.color.border.border_primary_light,
    },

    success: {
      backgroundColor: theme.foundations.tokens.color.bg.bg_success_light,
      borderColor: theme.foundations.tokens.color.border.border_success_light,
    },

    warning: {
      backgroundColor: theme.foundations.tokens.color.bg.bg_warning_light,
      borderColor: theme.foundations.tokens.color.border.border_warning_light,
    },

    critical: {
      backgroundColor: theme.foundations.tokens.color.bg.bg_critical_light,
      borderColor: theme.foundations.tokens.color.border.border_critical_light,
    },
  };
});
