import { createStyles } from '@co-design/styles';

interface NumberBoxStyles {
  checked?: boolean;
  disabled?: boolean;
  size?: 'small' | 'medium';
}

export default createStyles((theme, { checked, disabled, size }: NumberBoxStyles, getRef) => {
  const checkmark = getRef('checkmark');
  const wrapper = getRef('wrapper');

  const positionSizes = {
    small: theme.foundations.tokens.size.size_02,
    medium: theme.foundations.tokens.size.size_04,
  };

  const iconSizes = {
    small: theme.foundations.tokens.size.size_08,
    medium: theme.foundations.tokens.size.size_09,
  };

  return {
    wrapper: {
      ref: wrapper,
      position: 'relative',
      cursor: 'pointer',
      userSelect: 'none',
      verticalAlign: 'middle',
      zIndex: 0,
      width: 'fit-content',
      ...(!disabled
        ? {
            '&:hover': {
              [`.${checkmark}`]: {
                fill: checked ? theme.foundations.tokens.color.bg.bg_primary_hover : theme.foundations.tokens.color.bg.bg_base_light,
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
    childrenWrapper: {
      position: 'relative',
      width: 'fit-content',
    },
    checkWrapper: {
      position: 'absolute',
      top: theme.fn.size({ size, sizes: positionSizes }),
      right: theme.fn.size({ size, sizes: positionSizes }),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    checkmark: {
      ref: checkmark,
      color: theme.foundations.tokens.color.border.border_strong,
      fill: theme.foundations.tokens.color.bg.bg_surface_01,
      width: theme.fn.size({ size, sizes: iconSizes }),
      height: theme.fn.size({ size, sizes: iconSizes }),
    },
    checked: {
      [`.${checkmark}`]: {
        color: theme.foundations.tokens.color.icon.icon_inverse_white,
        fill: theme.foundations.tokens.color.bg.bg_primary,
      },
    },
    disabled: {
      cursor: 'not-allowed',
      [`.${checkmark}`]: {
        // TODO: replace with color token
        color: checked ? 'rgba(0,0,0,0)' : theme.foundations.tokens.color.border.border_disabled,
        fill: theme.foundations.tokens.color.bg.bg_disabled,
      },
    },
    number: {
      position: 'absolute',
      color: disabled ? theme.foundations.tokens.color.icon.icon_disabled : theme.foundations.tokens.color.text.text_light,
      opacity: checked ? 1 : 0,
    },
  };
});
