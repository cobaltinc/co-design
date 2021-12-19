import { CoColorPalette, CoRadius, CoSize, createStyles } from '@co-design/styles';
import { getFieldValue } from '../../utils';

export const sizes = {
  xsmall: 24,
  small: 28,
  medium: 32,
  large: 36,
  xlarge: 40,
};

const iconSizes = {
  xsmall: 10,
  small: 12,
  medium: 14,
  large: 16,
  xlarge: 18,
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

interface ChipStyles {
  radius: CoRadius | number;
  size: CoSize;
  color: CoColorPalette;
}

export default createStyles((theme, { radius, size, color }: ChipStyles, getRef) => {
  const label = getRef('label');
  const outline = getRef('outline');
  const filled = getRef('filled');
  const iconWrapper = getRef('iconWrapper');

  return {
    root: {},

    label: {
      ref: label,
      fontFamily: theme.fontFamily,
      boxSizing: 'border-box',
      color: theme.colorScheme === 'dark' ? theme.colorPalettes.dark[9] : theme.colors.black,
      display: 'inline-block',
      alignItems: 'center',
      userSelect: 'none',
      border: `1px solid ${theme.colorScheme === 'dark' ? theme.colorPalettes.dark[3] : theme.colorPalettes.dark[4]}`,
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
    },

    outline: {
      ref: outline,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colorPalettes.dark[7] : theme.colors.white,

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colorPalettes.dark[8] : theme.colorPalettes.dark[0],
      },
    },

    filled: {
      ref: filled,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colorPalettes.dark[5] : theme.colorPalettes.dark[1],
      borderColor: 'transparent',

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colorPalettes.dark[6] : theme.colorPalettes.dark[0],
      },
    },

    iconWrapper: {
      ref: iconWrapper,
      color: theme.colorPalettes[color][6],
      width: getFieldValue(size, iconSizes),
      maxWidth: getFieldValue(size, iconSizes),
      height: getFieldValue(size, iconSizes),
      marginRight: theme.spacing.spacing2,
      display: 'inline-block',
      verticalAlign: 'middle',
      overflow: 'hidden',
    },

    disabled: {
      backgroundColor: `${theme.colorScheme === 'dark' ? theme.colorPalettes.dark[5] : theme.colorPalettes.dark[1]} !important`,
      borderColor: `${theme.colorScheme === 'dark' ? theme.colorPalettes.dark[5] : theme.colorPalettes.dark[1]} !important`,
      color: theme.colorScheme === 'dark' ? theme.colorPalettes.dark[3] : theme.colorPalettes.dark[5],
      cursor: 'not-allowed',

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colorPalettes.dark[5] : theme.colorPalettes.dark[1],
      },

      [`& .${iconWrapper}`]: {
        color: theme.colorScheme === 'dark' ? theme.colorPalettes.dark[3] : theme.colorPalettes.dark[5],
      },
    },

    checked: {
      paddingLeft: getFieldValue(size, checkedPadding),
      paddingRight: getFieldValue(size, checkedPadding),

      [`&.${outline}`]: {
        border: `1px solid ${theme.colorPalettes[color][6]}`,
      },

      [`&.${filled}`]: {
        '&, &:hover': {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colorPalettes[color][6] : theme.colorPalettes[color][1],
        },
      },
    },

    checkIcon: {
      width: getFieldValue(size, iconSizes),
      height: getFieldValue(size, iconSizes) / 1.1,
      display: 'block',
    },

    input: {
      width: 0,
      height: 0,
      padding: 0,
      opacity: 0,
      margin: 0,

      // input is hidden by default, these styles add focus to label when user navigates with keyboard
      '&:focus': {
        outline: 'none',

        [`& + .${label}`]: {
          outline: 'none',
          boxShadow: `0 0 0 2px ${theme.colorScheme === 'dark' ? theme.colorPalettes.dark[9] : theme.colors.white}, 0 0 0 4px ${
            theme.colorPalettes[theme.primaryColor][5]
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
