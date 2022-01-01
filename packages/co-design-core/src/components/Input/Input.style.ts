import { CoRadius, CoSize, createStyles, defaultFontStyles } from '@co-design/styles';
import { CO_HEIGHTS } from '../../constants';
import { getFieldValue } from '../../utils';

interface InputStyles {
  radius: CoRadius | number;
  size: CoSize;
  multiline: boolean;
  invalid: boolean;
}

export default createStyles((theme, { size, multiline, radius, invalid }: InputStyles) => {
  const invalidColor = theme.palettes.red[theme.colorScheme === 'dark' ? 5 : 6];
  const sizeStyles = {
    minHeight: getFieldValue(size, CO_HEIGHTS),
    paddingLeft: getFieldValue(size, CO_HEIGHTS) / 3,
    paddingRight: getFieldValue(size, CO_HEIGHTS) / 3,
    borderRadius: getFieldValue(radius, theme.radius),
  };

  return {
    wrapper: {
      position: 'relative',
    },

    input: {
      ...defaultFontStyles(theme),
      height: multiline ? 'auto' : getFieldValue(size, CO_HEIGHTS),
      WebkitTapHighlightColor: 'transparent',
      lineHeight: multiline ? theme.lineHeight : `${getFieldValue(size, CO_HEIGHTS) - 2}px`,
      appearance: 'none',
      resize: 'none',
      boxSizing: 'border-box',
      fontSize: getFieldValue(size, theme.fontSizes),
      width: '100%',
      color: theme.colorScheme === 'dark' ? theme.palettes.dark[1] : theme.colors.black,
      display: 'block',
      textAlign: 'left',
      minHeight: getFieldValue(size, CO_HEIGHTS),
      paddingLeft: getFieldValue(size, CO_HEIGHTS) / 3,
      paddingRight: getFieldValue(size, CO_HEIGHTS) / 3,
      borderRadius: getFieldValue(radius, theme.radius),
      border: `1px solid ${theme.colorScheme === 'dark' ? theme.palettes.dark[7] : theme.palettes.dark[3]}`,
      backgroundColor: theme.colorScheme === 'dark' ? theme.palettes.dark[9] : theme.colors.white,
      transition: 'border-color 100ms ease',

      '&:focus, &:focus-within': {
        outline: 'none',
        borderWidth: 2,
        borderColor: theme.palettes[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
      },

      '&:disabled': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.palettes.dark[8] : theme.palettes.dark[1],
        color: theme.palettes.dark[7],
        opacity: 0.6,
        cursor: 'not-allowed',

        '&::placeholder': {
          color: theme.palettes.dark[7],
        },
      },

      '&::placeholder': {
        opacity: 1,
        userSelect: 'none',
        color: theme.colorScheme === 'dark' ? theme.palettes.dark[5] : theme.palettes.dark[5],
      },

      '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration':
        {
          appearance: 'none',
        },

      '&[type=number]': {
        MozAppearance: 'textfield',
      },
    },

    withIcon: {
      paddingLeft: `${getFieldValue(size, CO_HEIGHTS)}px !important`,
    },

    invalid: {
      color: `${invalidColor} !important`,
      borderColor: `${invalidColor} !important`,

      '&::placeholder': {
        opacity: 1,
        color: `${invalidColor} !important`,
      },

      '&:focus, &:focus-within': {
        borderWidth: 2,
      },
    },

    disabled: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.palettes.dark[8] : theme.palettes.dark[1],
      color: theme.palettes.dark[7],
      opacity: 0.6,
      cursor: 'not-allowed',

      '&::placeholder': {
        color: theme.palettes.dark[7],
      },
    },

    icon: {
      pointerEvents: 'none',
      position: 'absolute',
      zIndex: 1,
      left: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: getFieldValue(size, CO_HEIGHTS),
      color: invalid
        ? theme.palettes.red[theme.colorScheme === 'dark' ? 6 : 7]
        : theme.colorScheme === 'dark'
        ? theme.palettes.dark[2]
        : theme.palettes.dark[5],

      svg: {
        width: '50%',
        height: '50%',
      },
    },

    rightSection: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
});
