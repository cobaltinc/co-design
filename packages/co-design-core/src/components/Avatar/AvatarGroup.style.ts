import { createStyles, CoSpacing, defaultFontStyles } from '@co-design/styles';
import { getFieldValue } from '../../utils';

interface AvatarsGroupStyles {
  spacing: CoSpacing | number;
}

export default createStyles((theme, { spacing }: AvatarsGroupStyles) => {
  return {
    root: {
      display: 'flex',
      paddingLeft: getFieldValue(spacing, theme.spacing) / 2,
    },

    child: {
      marginLeft: -getFieldValue(spacing, theme.spacing) / 2,
      background: `${theme.colorScheme === 'dark' ? theme.palettes.gray[9] : theme.colors.white}`,
      border: `2px solid ${theme.colorScheme === 'dark' ? theme.palettes.gray[9] : theme.colors.white}`,
    },

    truncated: {
      ...defaultFontStyles(theme),
      width: '100%',
      height: '100%',
      backgroundColor: theme.foundations.tokens.color.specialty['avatar-bg'],
    },
  };
});
