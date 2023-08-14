import { createStyles } from '@co-design/styles';

export default createStyles((theme) => ({
  wrapper: {
    cursor: 'pointer',
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    userSelect: 'none',
    verticalAlign: 'middle',
    zIndex: 0,
    '&:hover': {
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '-4px',
        right: '-4px',
        bottom: '-4px',
        left: '-4px',
        borderRadius: '4px',
        zIndex: -1,
      },
    },
    '&:active': {
      '&::before': {
        content: '""',
        position: 'absolute',
        top: '-4px',
        right: '-4px',
        bottom: '-4px',
        left: '-4px',
        borderRadius: '4px',
        zIndex: -1,
      },
    },
  },
  input: {
    position: 'absolute',
    width: '0px',
    height: '0px',
    opacity: 0,
  },
  radiomark: {
    display: 'inline-block',
    width: '20px',
    height: '20px',
    verticalAlign: 'middle',
  },
  text: {
    paddingLeft: '8px',
    fontSize: '14px',
    lineHeight: '20px',
    color: '#030D2B', // Dark900
    verticalAlign: 'middle',
  },
  disabled: {
    cursor: 'not-allowed',
  },
  block: {
    display: 'flex',
  },
}));
