import { createStyles, keyframes } from '@co-design/styles';

interface ToastStylesParams {
  duration: number;
  type: 'base' | 'primary' | 'success' | 'warning' | 'critical' | 'error'; // error will be deprecated;
}

const toastAnimation = keyframes({
  from: { marginTop: '78px' },
  to: { marginTop: '0' },
});

const progressAnimation = keyframes({
  from: { width: '100%' },
  to: { width: '0' },
});

export default createStyles((theme, { duration, type }: ToastStylesParams) => {
  const getColorByType = (type) => {
    switch (type) {
      case 'base':
        return {
          background: theme.foundations.tokens.color.bg.bg_secondary,
          progress: theme.foundations.tokens.color.bg.bg_secondary_hover,
        };
      case 'primary':
        return {
          background: theme.foundations.tokens.color.bg.bg_primary,
          progress: theme.foundations.tokens.color.bg.bg_primary_hover,
        };
      case 'success':
        return {
          background: theme.foundations.tokens.color.bg.bg_success,
          progress: theme.foundations.tokens.color.bg.bg_success_hover,
        };
      case 'error':
      case 'critical':
        return {
          background: theme.foundations.tokens.color.bg.bg_critical,
          progress: theme.foundations.tokens.color.bg.bg_critical_hover,
        };
      case 'warning':
        return {
          background: theme.foundations.tokens.color.bg.bg_warning,
          progress: theme.foundations.tokens.color.bg.bg_warning_hover,
        };
      default:
        return {
          background: theme.foundations.tokens.color.bg.bg_secondary,
          progress: theme.foundations.tokens.color.bg.bg_secondary_hover,
        };
    }
  };

  return {
    container: {
      transform: 'translate3d(0, -0, -0) scale(1)',
      transition: 'all 400ms ease', // duration slow
      opacity: 0,
      '&:first-of-type': {
        animation: `${toastAnimation} 400ms ease-out forwards`,
      },
      '&:not(:first-of-type)': {
        marginTop: '8px',
      },
    },
    active: {
      opacity: 1,
    },
    toast: {
      position: 'relative',
      display: 'flex',
      maxWidth: '320px',
      width: '100%',
      minHeight: theme.foundations.tokens.size.size_14,
      padding: `${theme.foundations.tokens.size.size_07 - 2}px ${theme.foundations.tokens.size.size_07}px`,
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: theme.foundations.typography.body.body_02.fontSize,
      lineHeight: theme.foundations.typography.body.body_02.lineHeight + 'px',
      color: theme.foundations.tokens.color.text.text_light,
      borderRadius: theme.foundations.tokens.radius.radius_01,
      backgroundColor: getColorByType(type).background,
      boxShadow: '0px 1px 3px rgba(63, 63, 68, 0.15), 0px 0px 0px rgba(63, 63, 68, 0.05)',
      boxSizing: 'border-box',
      overflow: 'hidden',
    },
    progress: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '100%',
      height: '4px',
      backgroundColor: getColorByType(type).progress,
      animation: `${progressAnimation} ${duration}ms linear forwards`,
    },
    icon: {
      verticalAlign: 'middle',
    },
    closeWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: theme.foundations.tokens.size.size_08,
      height: theme.foundations.tokens.size.size_08,
    },
    close: {
      cursor: 'pointer',
    },
    message: {
      flex: 1,
      marginLeft: theme.foundations.tokens.size.size_04,
      verticalAlign: 'middle',
    },
  };
});
