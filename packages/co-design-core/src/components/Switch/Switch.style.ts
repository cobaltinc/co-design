import { createStyles, CoSize, defaultFontStyles } from '@co-design/styles';
import { getFieldValue } from '../../utils';

interface SwitchStyles {
  size: CoSize;
  disabled: boolean;
}

export default createStyles((theme, { size, disabled }: SwitchStyles) => {
  const switchHeight = {
    xsmall: 16,
    small: 16,
    medium: 24,
    large: 24,
    xlarge: 24,
  };

  const switchWidth = {
    xsmall: 32,
    small: 32,
    medium: 48,
    large: 48,
    xlarge: 48,
  };

  const handleSizes = {
    xsmall: 12,
    small: 12,
    medium: 18,
    large: 18,
    xlarge: 18,
  };

  const handleSize = getFieldValue(size, handleSizes);

  const fontSizes = {
    xsmall: theme.foundations.typography.body.caption.fontSize,
    small: theme.foundations.typography.body.caption.fontSize,
    medium: theme.foundations.typography.body.body_02.fontSize,
    large: theme.foundations.typography.body.body_02.fontSize,
    xlarge: theme.foundations.typography.body.body_02.fontSize,
  };

  const svgSizes = {
    xsmall: theme.foundations.tokens.size.size_04,
    small: theme.foundations.tokens.size.size_04,
    medium: theme.foundations.tokens.size.size_06,
    large: theme.foundations.tokens.size.size_06,
    xlarge: theme.foundations.tokens.size.size_06,
  };

  return {
    root: {
      display: 'flex',
      alignItems: 'center',
    },

    input: {
      WebkitTapHighlightColor: 'transparent',
      position: 'relative',
      borderRadius: handleSize,
      backgroundColor: theme.foundations.tokens.color.bg.bg_base,
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.white,
        height: handleSize,
        width: handleSize,
        transition: `transform 150ms ease`,
        transform: `translateX(${size === 'xsmall' ? 1 : 2}px)`,
        padding: 2,
        '@media (prefers-reduced-motion)': {
          transitionDuration: '0ms',
        },
      },

      '&:checked': {
        backgroundColor: disabled ? theme.foundations.tokens.color.bg.bg_primary_light_active : theme.foundations.tokens.color.bg.bg_primary,

        '&::before': {
          transform: `translateX(${
            switchWidth[size] - handleSizes[size] - (size === 'xsmall' ? 3 : 4) // borderWidth: 2 + padding: 2 * 2
          }px)`,
          content: '""',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.19548 0.606964C7.36653 0.760906 7.3804 1.02436 7.22645 1.19541L3.47645 5.36207C3.39999 5.44704 3.29197 5.49685 3.1777 5.49986C3.06343 5.50286 2.95295 5.45879 2.87212 5.37796L0.788787 3.29463C0.626068 3.13191 0.626068 2.86809 0.788787 2.70538C0.951505 2.54266 1.21532 2.54266 1.37804 2.70538L3.15083 4.47817L6.60704 0.637935C6.76098 0.466889 7.02444 0.453023 7.19548 0.606964Z' fill='%235A69E8'/%3E%3C/svg%3E");`,
          backgroundSize: svgSizes[size],
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        },

        '&:not(:checked):hover': {
          backgroundColor: theme.foundations.tokens.color.bg.bg_primary_hover,
        },
      },
      '&:disabled': {
        cursor: 'not-allowed',
      },
      '&:not(:checked):disabled': {
        color: theme.foundations.tokens.color.text.text_disabled,
        backgroundColor: theme.foundations.tokens.color.bg.bg_base_light_active,
        '&::before': {
          backgroundColor: theme.foundations.tokens.color.bg.bg_base_light,
        },
      },

      '&:not(:disabled):not(:checked):hover': {
        backgroundColor: theme.foundations.tokens.color.bg.bg_base_hover,
      },

      '&:not(:disabled):focus-visible': {
        outline: `2px solid ${theme.foundations.tokens.color.border.border_dark}`,
      },
    },

    label: {
      WebkitTapHighlightColor: 'transparent',
      fontSize: fontSizes[size],
      ...defaultFontStyles(theme),
      paddingLeft: theme.foundations.tokens.size.size_04,
      color: disabled ? theme.foundations.tokens.color.text.text_disabled : theme.foundations.tokens.color.text.text_caption,
    },
  };
});
