import { CoRadius, CoSize, createStyles, defaultFontStyles } from '@co-design/styles';
import { CO_HEIGHTS } from '../../constants';
import { getFieldValue } from '../../utils';

interface InputStyles {
  radius: CoRadius | number;
  size: CoSize;
  multiline: boolean;
  invalid: boolean;
  isLeftSectionExist: boolean;
  leftSectionWidth: number;
}

const FONT_SIZES = {
  xsmall: 12,
  small: 14,
  medium: 14,
  large: 14,
  xlarge: 16,
};

export default createStyles((theme, { size, multiline, radius, invalid, isLeftSectionExist, leftSectionWidth }: InputStyles) => {
  const invalidColor = theme.palettes.red[theme.colorScheme === 'dark' ? 5 : 6];

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
      fontSize: getFieldValue(size, FONT_SIZES),
      width: '100%',
      color: theme.colorScheme === 'dark' ? theme.palettes.gray[0] : theme.palettes.gray[9],
      display: 'block',
      textAlign: 'left',
      minHeight: getFieldValue(size, CO_HEIGHTS),
      paddingLeft: getFieldValue(size, CO_HEIGHTS) / 3,
      paddingRight: getFieldValue(size, CO_HEIGHTS) / 3,
      borderRadius: getFieldValue(radius, theme.radius),
      border: `1px solid ${theme.colorScheme === 'dark' ? theme.palettes.gray[6] : theme.palettes.gray[2]}`,
      backgroundColor: theme.colorScheme === 'dark' ? theme.palettes.gray[8] : theme.colors.white,
      // transition: 'border-color 100ms ease',

      '&:focus, &:focus-within': {
        outline: `1px solid ${theme.palettes[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 5]}`,
        borderColor: theme.palettes[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 5],
      },

      '&:disabled': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.palettes.gray[7] : theme.palettes.gray[0],
        color: theme.palettes.gray[6],
        opacity: 0.6,
        cursor: 'not-allowed',

        '&::placeholder': {
          color: theme.palettes.gray[6],
        },
      },

      '&::placeholder': {
        opacity: 1,
        userSelect: 'none',
        color: theme.colorScheme === 'dark' ? theme.palettes.gray[4] : theme.palettes.gray[4],
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
      paddingLeft: `${getFieldValue(size, CO_HEIGHTS) + (isLeftSectionExist ? leftSectionWidth : 0)}px !important`,
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
      backgroundColor: theme.colorScheme === 'dark' ? theme.palettes.gray[7] : theme.palettes.gray[0],
      color: theme.palettes.gray[6],
      opacity: 0.6,
      cursor: 'not-allowed',

      '&::placeholder': {
        color: theme.palettes.gray[6],
      },
    },

    icon: {
      pointerEvents: 'none',
      position: 'absolute',
      zIndex: 1,
      left: isLeftSectionExist ? leftSectionWidth : 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: getFieldValue(size, CO_HEIGHTS),
      color: invalid
        ? theme.palettes.red[theme.colorScheme === 'dark' ? 5 : 6]
        : theme.colorScheme === 'dark'
        ? theme.palettes.gray[1]
        : theme.palettes.gray[4],

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

    leftSection: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
});
