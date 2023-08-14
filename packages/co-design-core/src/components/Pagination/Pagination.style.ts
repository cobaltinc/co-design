import { createStyles } from '@co-design/styles';

export default createStyles((theme) => ({
  root: {
    display: 'inline-flex',
    alignItems: 'center',
  },
  page: {
    display: 'inline-block',
    minWidth: '32px',
    height: '32px',
    padding: '7px 11.5px',
    textAlign: 'center',
    fontSize: '14px',
    lineHeight: '20px',
    verticalAlign: 'middle',
    color: '#171b24',
    boxSizing: 'border-box',
    marginRight: '8px',
    cursor: 'pointer',
    '@media (max-width: 500px)': {
      minWidth: '24px',
      height: '24px',
      padding: '2px 4px',
    },
    '&:last-of-type': {
      marginRight: '0px',
    },
    '&:hover': {
      backgroundColor: 'rgba(35, 40, 48, 0.12)',
    },
  },
  active: {
    backgroundColor: theme.palettes.gray[9],
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palettes.gray[9],
    },
  },
  arrow: {
    display: 'inline-block',
    width: '32px',
    height: '32px',
    verticalAlign: 'middle',
    '&:first-of-type': {
      marginRight: '8px',
    },
    '&:last-of-type': {
      marginLeft: '8px',
    },
  },
  disabled: {
    pointerEvents: 'none',
    cursor: 'not-allowed',
  },
  bullet: {
    marginRight: '4px',
    '@media (max-width: 500px)': {
      width: '24px',
      height: '24px',
    },
  },
  circle: {
    display: 'inline-block',
    width: '3px',
    height: '3px',
    borderRadius: '50%',
    marginRight: '4px',
    backgroundColor: '#171b24',
    '&:last-of-type': {
      marginRight: '0px',
    },
  },
}));
