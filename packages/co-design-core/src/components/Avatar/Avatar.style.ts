import { createStyles, CoSize, CoPalette } from '@co-design/styles';

export type AvatarShape = 'square' | 'round' | 'circle';

interface AvatarStyles {
  size: CoSize | number;
  shape: AvatarShape;
  color: CoPalette;
}

export default createStyles((theme, { size, shape, color }: AvatarStyles) => {
  const sizes = {
    xsmall: 24,
    small: 32,
    medium: 40,
    large: 64,
    xlarge: 64,
  };

  return {
    root: {
      WebkitTapHighlightColor: 'transparent',
      boxSizing: 'border-box',
      position: 'relative',
      userSelect: 'none',
      overflow: 'hidden',
      width: theme.fn.size({ size, sizes }),
      minWidth: theme.fn.size({ size, sizes }),
      height: theme.fn.size({ size, sizes }),
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
      backgroundColor: theme.foundations.tokens.color.specialty.avatar_bg,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      userSelect: 'none',
    },
  };
});
