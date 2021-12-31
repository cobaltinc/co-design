import { createStyles, CoSize, CoPalette } from '@co-design/styles';
import { getFieldValue } from '../../utils';

interface SwitchStyles {
  color: CoPalette;
  size: CoSize;
}

const switchHeight = {
  xsmall: 16,
  small: 20,
  medium: 24,
  large: 30,
  xlarge: 36,
};

const switchWidth = {
  xsmall: 30,
  small: 38,
  medium: 44,
  large: 56,
  xlarge: 68,
};

const handleSizes = {
  xsmall: 12,
  small: 14,
  medium: 18,
  large: 22,
  xlarge: 28,
};

export const sizes = Object.keys(switchHeight).reduce((acc, size) => {
  acc[size] = { width: switchWidth[size], height: switchHeight[size] };
  return acc;
}, {} as Record<CoSize, { width: number; height: number }>);

export default createStyles((theme, { size, color }: SwitchStyles) => {
  const handleSize = getFieldValue(size, handleSizes);

  return {
    root: {
      display: 'flex',
      alignItems: 'center',
    },

    input: {
      WebkitTapHighlightColor: 'transparent',
      position: 'relative',
      borderRadius: handleSize,
      backgroundColor: theme.colorScheme === 'dark' ? theme.palettes.dark[7] : theme.palettes.dark[3],
      border: `1px solid ${theme.colorScheme === 'dark' ? theme.palettes.dark[6] : theme.palettes.dark[4]}`,
      height: switchHeight[size],
      width: switchWidth[size],
      minWidth: switchWidth[size],
      margin: 0,
      transitionProperty: 'background-color, border-color',
      transitionTimingFunction: 'ease',
      transitionDuration: '150ms',
      boxSizing: 'border-box',
      appearance: 'none',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',

      '&::before': {
        borderRadius: handleSize,
        boxSizing: 'border-box',
        content: "''",
        display: 'block',
        backgroundColor: theme.colors.white,
        height: handleSize,
        width: handleSize,
        border: `1px solid ${theme.palettes.dark[3]}`,
        transition: `transform 150ms ease`,
        transform: `translateX(${size === 'xsmall' ? 1 : 2}px)`,

        '@media (prefers-reduced-motion)': {
          transitionDuration: '0ms',
        },
      },

      '&:checked': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.palettes[color][4] : theme.palettes[color][6],
        borderColor: theme.colorScheme === 'dark' ? theme.palettes[color][4] : theme.palettes[color][6],

        '&::before': {
          transform: `translateX(${
            switchWidth[size] - handleSizes[size] - (size === 'xsmall' ? 3 : 4) // borderWidth: 2 + padding: 2 * 2
          }px)`,
          borderColor: theme.colors.white,
        },
      },

      '&:disabled': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.palettes.dark[4] : theme.palettes.dark[2],
        borderColor: theme.colorScheme === 'dark' ? theme.palettes.dark[4] : theme.palettes.dark[2],
        cursor: 'not-allowed',

        '&::before': {
          borderColor: theme.colorScheme === 'dark' ? theme.palettes.dark[4] : theme.palettes.dark[2],
          backgroundColor: theme.colorScheme === 'dark' ? theme.palettes.dark[3] : theme.palettes.dark[0],
        },
      },
    },

    label: {
      WebkitTapHighlightColor: 'transparent',
      fontSize: theme.fontSizes[size],
      fontFamily: theme.fontFamily,
      paddingLeft: theme.spacing.spacing2,
      color: theme.colorScheme === 'dark' ? theme.colors.white : theme.palettes.dark[9],
    },
  };
});
