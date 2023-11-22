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
                fill: check ? theme.foundations.tokens.color.border['border-primary-hover'] : theme.foundations.tokens.color.bg['bg-base-light'],
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
      width: theme.foundations.tokens.size['size-09'],
      height: theme.foundations.tokens.size['size-09'],
    },
    icon: {
      ref: icon,
      width: theme.foundations.tokens.size['size-07'],
      height: theme.foundations.tokens.size['size-07'],
      stroke: disabled ? theme.foundations.tokens.color.border['border-disabled'] : theme.foundations.tokens.color.border['border-strong'],
      fill: check
        ? disabled
          ? theme.foundations.tokens.color.border['border-disabled']
          : theme.foundations.tokens.color.border['border-primary']
        : disabled
        ? theme.foundations.tokens.color.bg['bg-disabled']
        : theme.foundations.tokens.color.bg['bg-01'],
      '&:focus-visible': {
        stroke: theme.foundations.tokens.color.border['border-primary'],
      },
    },
    text: {
      paddingLeft: theme.foundations.tokens.size['size-02'],
      fontSize: theme.foundations.typography.body['body-02'].fontSize,
      lineHeight: theme.foundations.typography.body['body-02'].lineHeight + 'px',
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
