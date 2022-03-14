import { createStyles, CoSize, CoPalette, defaultFontStyles } from '@co-design/styles';
import { CO_HEIGHTS } from '../../constants';
import { getFieldValue } from '../../utils';

export type AvatarShape = 'square' | 'round' | 'circle';

interface AvatarStyles {
  size: CoSize | number;
  shape: AvatarShape;
  color: CoPalette;
}

export default createStyles((theme, { size, shape, color }: AvatarStyles) => ({
  root: {
    WebkitTapHighlightColor: 'transparent',
    boxSizing: 'border-box',
    position: 'relative',
    userSelect: 'none',
    overflow: 'hidden',
    width: getFieldValue(size, CO_HEIGHTS),
    minWidth: getFieldValue(size, CO_HEIGHTS),
    height: getFieldValue(size, CO_HEIGHTS),
    borderRadius: shape === 'circle' ? theme.radius.circular : shape === 'round' ? theme.radius.medium : 0,
  },

  image: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    display: 'block',
  },

  placeholder: {
    ...defaultFontStyles(theme),
    fontSize: getFieldValue(size, CO_HEIGHTS) / 3,
    color: theme.palettes[color][theme.colorScheme === 'dark' ? 3 : 5],
    fontWeight: 700,
    backgroundColor: theme.palettes[color][theme.colorScheme === 'dark' ? 7 : 2],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    userSelect: 'none',
  },

  placeholderIcon: {
    width: '70%',
    height: '70%',
    color: theme.palettes[color][theme.colorScheme === 'dark' ? 3 : 5],
  },
}));
