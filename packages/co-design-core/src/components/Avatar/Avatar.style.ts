import { createStyles, CoSize, CoPalette } from '@co-design/styles';
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
    color,
    backgroundColor: theme.foundations.tokens.color.specialty['avatar-bg'],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    userSelect: 'none',
  },

  icon: {
    width: '70%',
    height: '70%',
    color,
  },
}));
