import { CoRadius, CoSize, createStyles, defaultFontStyles } from '@co-design/styles';
import { CO_HEIGHTS } from '../../constants';
import { getFieldValue } from '../../utils';

interface InputStyles {
  radius: CoRadius | number;
  size: CoSize;
  multiline: boolean;
  invalid: boolean;
  disabled: boolean;
  flexible: boolean;
  isLeftSectionExist: boolean;
  leftSectionWidth: number;
  isRightSectionExist: boolean;
  rightSectionWidth: number;
}

export default createStyles(
  (
    theme,
    {
      size,
      multiline,
      radius,
      invalid,
      disabled,
      flexible,
      isLeftSectionExist,
      leftSectionWidth,
      isRightSectionExist,
      rightSectionWidth,
    }: InputStyles,
    getRef,
  ) => {
    const helperText = getRef('helperText');
    const invalidColor = theme.foundations.tokens.color.border.border_critical;

    const labelMarginBottom = {
      xsmall: 12,
      small: 12,
      medium: 13,
      large: 14,
      xlarge: 15,
    };

    const paddingY = {
      xsmall: theme.foundations.tokens.size.size_03,
      small: theme.foundations.tokens.size.size_03,
      medium: theme.foundations.tokens.size.size_04,
      large: theme.foundations.tokens.size.size_06,
      xlarge: theme.foundations.tokens.size.size_06,
    };

    const paddingX = theme.foundations.tokens.size.size_06;

    const inputHeights = {
      xsmall: 28,
      small: 32,
      medium: 36,
      large: 48,
      xlarge: 56,
    };

    return {
      root: {},
      wrapper: {
        position: 'relative',
      },
      labelWrapper: {
        marginBottom: multiline ? theme.foundations.tokens.size.size_04 : labelMarginBottom[size],
      },
      labelText: {
        color: disabled ? theme.foundations.tokens.color.text.text_disabled : theme.foundations.tokens.color.text.text_default,
      },
      input: {
        ...defaultFontStyles(theme),
        height: multiline ? 'auto' : theme.fn.size({ size, sizes: inputHeights }),
        WebkitTapHighlightColor: 'transparent',
        lineHeight: theme.foundations.typography.body.body_02.lineHeight + 'px',
        appearance: 'none',
        boxSizing: 'border-box',
        fontSize: theme.foundations.typography.body.body_02.fontSize,
        width: '100%',
        color: theme.foundations.tokens.color.text.text_default,
        display: 'block',
        textAlign: 'left',
        minHeight: theme.foundations.tokens.size.size_08 + paddingY[size] * 2,
        padding: `${paddingY[size]}px ${paddingX}px`,
        borderRadius: radius || theme.foundations.tokens.radius.radius_01,
        border: `1px solid ${theme.foundations.tokens.color.border.border_default}`,
        backgroundColor: theme.foundations.tokens.color.bg.bg_surface_01,
        // transition: 'border-color 100ms ease',

        '&:not(:disabled):not(:focus):hover': {
          borderColor: invalid ? invalidColor : theme.foundations.tokens.color.border.border_strong,
        },

        '&:focus, &:focus-within': {
          width: 'calc(100% - 2px)',
          borderColor: theme.foundations.tokens.color.border.border_primary,
          outline: `1px solid ${theme.foundations.tokens.color.border.border_primary}`,
        },

        '&::placeholder': {
          opacity: 1,
          userSelect: 'none',
          color: theme.foundations.tokens.color.text.text_placeholder,
        },

        '&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration':
          {
            appearance: 'none',
          },

        '&[type=number]': {
          MozAppearance: 'textfield',
        },

        ...(flexible
          ? {
              resize: 'vertical',
            }
          : {
              resize: 'none',
            }),
      },

      withLeft: {
        paddingLeft: `${getFieldValue(size, CO_HEIGHTS) + (isLeftSectionExist ? leftSectionWidth : 0)}px !important`,
      },

      withRight: {
        paddingRight: `${paddingX + (isRightSectionExist ? rightSectionWidth : 0)}px !important`,
      },

      invalid: {
        outline: `1px solid ${invalidColor}`,
        borderColor: invalidColor,

        '&::placeholder': {
          opacity: 1,
          color: `${invalidColor} !important`,
        },

        '&:focus, &:focus-within': {
          borderWidth: 2,
        },

        [`.${helperText}`]: {
          color: `${invalidColor} !important`,
        },
      },

      disabled: {
        color: theme.foundations.tokens.color.text.text_disabled,
        cursor: 'not-allowed',
        backgroundColor: theme.foundations.tokens.color.bg.bg_disabled,
        '&::placeholder': {
          color: theme.foundations.tokens.color.text.text_disabled,
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
        margin: 1,
      },

      leftSection: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 1,
      },

      helperText: {
        ref: helperText,
        color: invalid ? invalidColor : theme.foundations.tokens.color.text.text_caption,
        position: 'absolute',
        top: 'calc(100% + 8px)',
      },

      maximumLength: {
        color: theme.foundations.tokens.color.text.text_caption,
        fontSize: theme.foundations.typography.body.caption.fontSize,
      },
    };
  },
);
