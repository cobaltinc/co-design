import { createStyles, CoSize, CoColorPalette } from '@co-design/styles';
import { CO_HEIGHTS } from '../../constants';
import { getFieldValue } from '../../utils';

export type AvatarShape = 'square' | 'round' | 'circle';

interface AvatarStyles {
  size: CoSize | number;
  shape: AvatarShape;
  color: CoColorPalette;
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
    borderRadius: shape === 'circle' ? '50%' : shape === 'round' ? theme.radius.medium : 0,
  },

  image: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    display: 'block',
  },

  placeholder: {
    fontFamily: theme.fontFamily,
    fontSize: getFieldValue(size, CO_HEIGHTS) / 3,
    color: theme.colorPalettes[color][theme.colorScheme === 'dark' ? 2 : 6],
    fontWeight: 700,
    backgroundColor: theme.colorPalettes[color][theme.colorScheme === 'dark' ? 6 : 2],
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
    color: theme.colorPalettes[color][theme.colorScheme === 'dark' ? 2 : 6],
  },
}));
