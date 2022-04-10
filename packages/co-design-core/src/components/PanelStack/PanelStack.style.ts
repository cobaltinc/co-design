import { CoSpacing, createStyles, defaultFontStyles } from '@co-design/styles';
import { getFieldValue } from '../../utils';

interface PanelStackStyles {
  width: number | string;
  height: number | string;
  padding: CoSpacing | number;
}

export default createStyles((theme, { width, height, padding }: PanelStackStyles) => ({
  root: {
    position: 'relative',
    width,
    height,
    overflow: 'hidden',
  },

  inner: {
    position: 'absolute',
    top: getFieldValue(padding, theme.spacing),
    left: getFieldValue(padding, theme.spacing),
    right: getFieldValue(padding, theme.spacing),
    bottom: getFieldValue(padding, theme.spacing),
  },

  header: {
    height: 24,
  },

  back: {},

  title: {
    ...defaultFontStyles(theme),
    fontSize: theme.fontSizes.xlarge,
    marginRight: theme.spacing.medium,
    textOverflow: 'ellipsis',
    display: 'block',
    wordBreak: 'break-word',
  },

  divider: {},

  body: {},
}));
