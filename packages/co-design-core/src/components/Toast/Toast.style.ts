import { createStyles, keyframes } from '@co-design/styles';

interface ToastStylesParams {
  duration: number;
}

const toastAnimation = keyframes({
  from: { marginTop: '78px' },
  to: { marginTop: '0' },
});

const progressAnimation = keyframes({
  from: { width: '100%' },
  to: { width: '0' },
});

export default createStyles((theme, { duration }: ToastStylesParams) => {
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
      maxWidth: '450px',
      width: '100%',
      height: '70px',
      padding: '0 20px',
      alignItems: 'center',
      fontSize: theme.fontSizes.small,
      color: '#212b36',
      borderRadius: '5px',
      border: '1px solid #cfd8eb',
      backgroundColor: 'white',
      boxShadow: '0px 1px 3px rgba(63, 63, 68, 0.15), 0px 0px 0px rgba(63, 63, 68, 0.05)',
      boxSizing: 'border-box',
      overflow: 'hidden',
    },
    progress: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '4px',
      backgroundColor: '#5c6ac4', // TODO: before $indigo
      animation: `${progressAnimation} ${duration}ms linear forwards`,
    },
    icon: {
      verticalAlign: 'middle',
    },
    close: {
      cursor: 'pointer',
      position: 'absolute',
      right: '8px',
      top: '8px',
    },
    message: {
      marginTop: '-2px',
      marginLeft: '14px',
      verticalAlign: 'middle',
    },
    error: {
      backgroundColor: '#de3618', // TODO: before $red
    },
    warning: {
      backgroundColor: '#ffca28', // TODO: before $amber
    },
  };
});
