import { createStyles } from '@co-design/styles';

interface RadioStylesProps {
  check: boolean;
  disabled: boolean;
}

export default createStyles((theme, { check, disabled }: RadioStylesProps, getRef) => {
  const icon = getRef('icon');

  return {
    wrapper: {
      cursor: 'pointer',
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      userSelect: 'none',
      verticalAlign: 'middle',
      zIndex: 0,
      '&:hover': {
        ...(!disabled
          ? {
              [`.${icon}`]: {
                fill: check ? theme.foundations.tokens.color.border.border_primary_hover : theme.foundations.tokens.color.bg.bg_base_light,
              },
            }
          : {}),
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
    iconWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: theme.foundations.tokens.size.size_09,
      height: theme.foundations.tokens.size.size_09,
    },
    icon: {
      ref: icon,
      width: theme.foundations.tokens.size.size_07,
      height: theme.foundations.tokens.size.size_07,
      stroke: disabled ? theme.foundations.tokens.color.border.border_disabled : theme.foundations.tokens.color.border.border_strong,
      fill: check
        ? disabled
          ? theme.foundations.tokens.color.border.border_disabled
          : theme.foundations.tokens.color.border.border_primary
        : disabled
        ? theme.foundations.tokens.color.bg.bg_disabled
        : theme.foundations.tokens.color.bg.bg_surface_01,
      '&:focus-visible': {
        stroke: theme.foundations.tokens.color.border.border_primary,
      },
    },
    text: {
      paddingLeft: theme.foundations.tokens.size.size_02,
      fontSize: theme.foundations.typography.body.body_02.fontSize,
      lineHeight: theme.foundations.typography.body.body_02.lineHeight + 'px',
      verticalAlign: 'middle',
    },
    disabled: {
      cursor: 'not-allowed',
    },
    block: {
      display: 'flex',
    },
  };
});
