import { CoPalette, CoRadius, CoSize, createStyles, defaultFontStyles } from '@co-design/styles';
import { getFieldValue } from '../../utils';

export const sizes = {
  xsmall: 24,
  small: 28,
  medium: 32,
  large: 36,
  xlarge: 40,
};

const checkIconSizes = {
  xsmall: 10,
  small: 12,
  medium: 14,
  large: 16,
  xlarge: 18,
};

const closeIconSizes = {
  xsmall: 14,
  small: 16,
  medium: 18,
  large: 20,
  xlarge: 22,
};

const padding = {
  xsmall: 16,
  small: 20,
  medium: 24,
  large: 28,
  xlarge: 32,
};

const checkedPadding = {
  xsmall: 7.5,
  small: 10,
  medium: 11.5,
  large: 13,
  xlarge: 15,
};

const deletablePadding = {
  xsmall: 7.5,
  small: 10,
  medium: 11.5,
  large: 13,
  xlarge: 15,
};

interface ChipStyles {
  radius: CoRadius | number;
  size: CoSize;
  color: CoPalette;
}

export default createStyles((theme, { radius, size, color }: ChipStyles, getRef) => {
  const label = getRef('label');
  const iconWrapper = getRef('iconWrapper');

  return {
    root: {},

    label: {
      ref: label,
      ...defaultFontStyles(theme),
      boxSizing: 'border-box',
      color: theme.colorScheme === 'dark' ? theme.colors.white : theme.colors.black,
      display: 'inline-block',
      alignItems: 'center',
      userSelect: 'none',
      border: `1px solid ${theme.colorScheme === 'dark' ? theme.palettes.gray[2] : theme.palettes.gray[3]}`,
      borderRadius: getFieldValue(radius, theme.radius),
      height: getFieldValue(size, sizes),
      fontSize: getFieldValue(size, theme.fontSizes),
      lineHeight: `${getFieldValue(size, sizes) - 2}px`,
      paddingLeft: getFieldValue(size, padding),
      paddingRight: getFieldValue(size, padding),
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      transition: 'background-color 100ms ease',
      WebkitTapHighlightColor: 'transparent',
      backgroundColor: theme.colorScheme === 'dark' ? theme.palettes.gray[8] : theme.colors.white,

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.palettes.gray[8] : theme.palettes.gray[0],
      },
    },

    checkWrapper: {
      display: 'inline-block',
      verticalAlign: 'middle',
      ref: iconWrapper,
      color: theme.palettes[color][theme.colorScheme === 'dark' ? 3 : 5],
      width: getFieldValue(size, checkIconSizes),
      maxWidth: getFieldValue(size, checkIconSizes),
      height: getFieldValue(size, checkIconSizes),
      marginRight: theme.spacing.small,
      overflow: 'hidden',
    },

    closeWrapper: {
      display: 'inline-block',
      verticalAlign: 'middle',
      ref: iconWrapper,
      width: getFieldValue(size, closeIconSizes),
      maxWidth: getFieldValue(size, closeIconSizes),
      height: getFieldValue(size, closeIconSizes),
      marginLeft: theme.spacing.small,
      overflow: 'hidden',
    },

    disabled: {
      backgroundColor: `${theme.colorScheme === 'dark' ? theme.palettes.gray[4] : theme.palettes.gray[0]} !important`,
      borderColor: `${theme.colorScheme === 'dark' ? theme.palettes.gray[4] : theme.palettes.gray[0]} !important`,
      color: theme.colorScheme === 'dark' ? theme.palettes.gray[2] : theme.palettes.gray[4],
      cursor: 'not-allowed',

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.palettes.gray[4] : theme.palettes.gray[0],
      },

      [`& .${iconWrapper}`]: {
        color: theme.colorScheme === 'dark' ? theme.palettes.gray[2] : theme.palettes.gray[4],
      },
    },

    checked: {
      paddingLeft: getFieldValue(size, checkedPadding),
      paddingRight: getFieldValue(size, checkedPadding),
      border: `1px solid ${theme.palettes[color][theme.colorScheme === 'dark' ? 3 : 5]}`,
      color: theme.palettes[color][theme.colorScheme === 'dark' ? 3 : 5],
    },

    deletable: {
      paddingLeft: getFieldValue(size, deletablePadding),
      paddingRight: getFieldValue(size, deletablePadding),
    },

    checkIcon: {
      width: getFieldValue(size, checkIconSizes),
      height: getFieldValue(size, checkIconSizes) / 1.1,
      display: 'block',
    },

    deleteIcon: {
      width: getFieldValue(size, closeIconSizes),
      height: getFieldValue(size, closeIconSizes) / 1.1,
      display: 'block',
    },

    input: {
      width: 0,
      height: 0,
      padding: 0,
      opacity: 0,
      margin: 0,

      '&:focus': {
        outline: 'none',

        [`& + .${label}`]: {
          outline: 'none',
          boxShadow: `0 0 0 3px ${theme.colorScheme === 'dark' ? theme.palettes.gray[9] : theme.colors.white}, 0 0 0 4px ${
            theme.palettes[theme.primaryColor][5]
          }`,
        },

        '&:focus:not(:focus-visible)': {
          [`& + .${label}`]: {
            boxShadow: 'none',
          },
        },
      },
    },
  };
});
