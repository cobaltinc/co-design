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
}

const FONT_SIZES = {
  xsmall: 12,
  small: 14,
  medium: 14,
  large: 14,
  xlarge: 16,
};

export default createStyles(
  (theme, { size, multiline, radius, invalid, disabled, flexible, isLeftSectionExist, leftSectionWidth }: InputStyles, getRef) => {
    const helperText = getRef('helperText');
    const invalidColor = theme.foundations.tokens.color.border['border-critical'];

    const labelFonts = {
      xsmall: 'heading-09',
      small: 'heading-09',
      medium: 'heading-08',
      large: 'heading-07',
      xlarge: 'heading-07',
    };

    const labelMarginBottom = {
      xsmall: 12,
      small: 12,
      medium: 13,
      large: 14,
      xlarge: 15,
    };

    const paddingY = {
      xsmall: theme.foundations.tokens.size['size-03'],
      small: theme.foundations.tokens.size['size-03'],
      medium: theme.foundations.tokens.size['size-04'],
      large: theme.foundations.tokens.size['size-06'],
      xlarge: theme.foundations.tokens.size['size-06'],
    };

    const paddingX = theme.foundations.tokens.size['size-06'];

    return {
      wrapper: {
        position: 'relative',
      },
      labelWrapper: {
        marginBottom: multiline ? theme.foundations.tokens.size['size-04'] : labelMarginBottom[size],
      },
      labelText: {
        fontSize: theme.foundations.typography.heading[labelFonts[size]].fontSize,
        lineHeight: theme.foundations.typography.heading[labelFonts[size]].lineHeight + 'px',
        fontWeight: theme.foundations.typography.heading[labelFonts[size]].fontWeight,
        color: disabled ? theme.foundations.tokens.color.text['text-disabled'] : theme.foundations.tokens.color.text['text-default'],
      },
      input: {
        ...defaultFontStyles(theme),
        height: multiline ? 'auto' : getFieldValue(size, CO_HEIGHTS),
        WebkitTapHighlightColor: 'transparent',
        lineHeight: multiline ? theme.lineHeight : `${getFieldValue(size, CO_HEIGHTS) - 2}px`,
        appearance: 'none',
        boxSizing: 'border-box',
        fontSize: theme.foundations.typography.body['body-02'].fontSize,
        width: '100%',
        color: theme.foundations.tokens.color.text['text-default'],
        display: 'block',
        textAlign: 'left',
        minHeight: theme.foundations.tokens.size['size-08'] + paddingY[size] * 2,
        padding: `${paddingY[size]}px ${paddingX}px`,
        borderRadius: radius || theme.foundations.tokens.radius['radius-01'],
        border: `1px solid ${theme.foundations.tokens.color.border['border-default']}`,
        backgroundColor: theme.foundations.tokens.color.bg['bg-01'],
        // transition: 'border-color 100ms ease',

        '&:not(:disabled):hover': {
          borderColor: invalid ? invalidColor : theme.foundations.tokens.color.border['border-strong'],
        },

        '&:focus, &:focus-within': {
          border: `2px solid ${theme.foundations.tokens.color.border['border-primary']}`,
        },

        '&::placeholder': {
          opacity: 1,
          userSelect: 'none',
          color: theme.foundations.tokens.color.text['text-placeholder'],
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

      withIcon: {
        paddingLeft: `${getFieldValue(size, CO_HEIGHTS) + (isLeftSectionExist ? leftSectionWidth : 0)}px !important`,
      },

      invalid: {
        color: `${invalidColor} !important`,
        border: `2px solid ${invalidColor}`,

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
        color: theme.foundations.tokens.color.text['text-disabled'],
        cursor: 'not-allowed',
        backgroundColor: theme.foundations.tokens.color.bg['bg-disabled'],
        '&::placeholder': {
          color: theme.foundations.tokens.color.text['text-disabled'],
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

      helperText: {
        ref: helperText,
        fontSize: theme.foundations.typography.body.caption.fontSize,
        color: invalid ? invalidColor : theme.foundations.tokens.color.text['text-caption'],
        position: 'absolute',
        top: 'calc(100% + 8px)',
      },

      maximumLength: {
        color: theme.foundations.tokens.color.text['text-caption'],
        fontSize: theme.foundations.typography.body.caption.fontSize,
      },
    };
  },
);
