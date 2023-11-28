import { createStyles } from '@co-design/styles';
import { getFieldValue } from '../../utils';

interface StackStyles {
  variant?: 'wait' | 'current' | 'finished' | 'error';
  labelPosition?: 'right' | 'bottom';
}

export default createStyles((theme, { variant, labelPosition }: StackStyles) => {
  const backgroundColor = {
    wait: theme.foundations.tokens.color.bg.bg_base_light_active,
    current: theme.foundations.tokens.color.bg.bg_primary,
    finished: theme.foundations.tokens.color.bg.bg_primary,
    error: theme.foundations.tokens.color.bg.bg_critical,
  };

  return {
    root: {
      display: 'flex',
      flexDirection: labelPosition === 'bottom' ? 'column' : 'row',
      alignItems: 'center',
      gap: labelPosition === 'bottom' ? 12 : 8,
    },
    label: {
      color: variant === 'error' ? theme.foundations.tokens.color.text.text_critical : theme.foundations.tokens.color.text['text-default'],
    },
    circle: {
      backgroundColor: getFieldValue(variant, backgroundColor),
      transition: 'background-color 0.3s ease',
    },
  };
});
