import { createStyles } from '@co-design/styles';

interface CheckboxStyles {
  error?: boolean;
  checked?: boolean;
  disabled?: boolean;
}

export default createStyles((theme, { error, checked, disabled }: CheckboxStyles, getRef) => {
  const checkmark = getRef('checkmark');
  const wrapper = getRef('wrapper');

  return {
    wrapper: {
      ref: wrapper,
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      userSelect: 'none',
      verticalAlign: 'middle',
      zIndex: 0,
      ...(!disabled && !error
        ? {
            '&:hover': {
              [`.${checkmark}`]: {
                fill: checked ? theme.foundations.tokens.color.bg.bg_primary : theme.foundations.tokens.color.bg.bg_base_light,
              },
            },
            '&:focus': {
              [`.${checkmark}`]: {
                color: theme.foundations.tokens.color.border.border_primary,
              },
            },
          }
        : {}),
    },
    input: {
      position: 'absolute',
      width: '0px',
      height: '0px',
      opacity: 0,
    },
    checkmark: {
      ref: checkmark,
      color: theme.foundations.tokens.color.border.border_strong,
      fill: theme.foundations.tokens.color.bg.bg_surface_01,
    },
    text: {
      paddingLeft: '4px',
      fontSize: '14px',
      lineHeight: '20px',
      verticalAlign: 'middle',
    },
    checked: {
      [`.${checkmark}`]: {
        color: theme.foundations.tokens.color.icon.icon_inverse_white,
        fill: !error ? theme.foundations.tokens.color.bg.bg_primary : theme.foundations.tokens.color.bg.bg_critical,
      },
    },
    disabled: {
      cursor: 'not-allowed',
      [`.${checkmark}`]: {
        color: theme.foundations.tokens.color.border.border_default,
        fill: theme.foundations.tokens.color.bg.bg_disabled,
      },
    },
    block: {
      display: 'flex',
    },
  };
});
