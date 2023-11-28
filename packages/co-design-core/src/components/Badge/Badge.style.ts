import { createStyles } from '@co-design/core';

interface BadgeStyles {
  size: 'small' | 'medium' | 'large' | number;
  contentLength: number;
  dot: boolean;
  placement: 'none' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  placeDistance: number;
  placeDistanceX: number;
  placeDistanceY: number;
}

export default createStyles((theme, { size, contentLength, dot, placement, placeDistance, placeDistanceX, placeDistanceY }: BadgeStyles) => {
  const sizes = dot
    ? {
        small: theme.foundations.tokens.size.size_03,
        medium: theme.foundations.tokens.size.size_04,
        large: theme.foundations.tokens.size.size_05,
      }
    : {
        small: theme.foundations.tokens.size.size_07,
        medium: theme.foundations.tokens.size.size_08,
        large: theme.foundations.tokens.size.size_09,
      };

  return {
    container: {
      display: 'inline-block',
      position: 'relative',
      verticalAlign: 'middle',
    },
    badge: {
      position: placement === 'none' ? 'static' : 'absolute',
      ...getPosition(placement, placeDistance, placeDistanceX, placeDistanceY),
      width: theme.fn.size({ size, sizes }) + (contentLength - 1) * 16,
      height: theme.fn.size({ size, sizes }),
      border: `1px solid ${theme.foundations.tokens.color.border.border_light}`,
      borderRadius: theme.foundations.tokens.radius.radius_full,
      backgroundColor: theme.foundations.tokens.color.bg.bg_critical,
      padding: theme.foundations.tokens.size.size_02,
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    dot: {
      padding: 0,
      width: theme.fn.size({ size, sizes }),
      height: theme.fn.size({ size, sizes }),
      border: `1px solid ${theme.foundations.tokens.color.border.border_light}`,
      borderRadius: theme.foundations.tokens.radius.radius_full,
    },
  };
});

const getPosition = (
  placement: 'none' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left',
  placeDistance: number,
  placeDistanceX: number,
  placeDistanceY: number,
) => {
  const _placeDistanceX = typeof placeDistanceX === 'number' ? String(placeDistanceX) : placeDistance;
  const _placeDistanceY = typeof placeDistanceY === 'number' ? String(placeDistanceY) : placeDistance;

  switch (placement) {
    case 'top-right':
      return { top: `${_placeDistanceY}px`, bottom: 'auto', left: 'auto', right: `${_placeDistanceX}px` };
    case 'top-left':
      return { top: `${_placeDistanceY}px`, bottom: 'auto', left: `${_placeDistanceX}px`, right: 'auto' };
    case 'bottom-right':
      return { top: 'auto', bottom: `${_placeDistanceY}px`, left: 'auto', right: `${_placeDistanceX}px` };
    case 'bottom-left':
      return { top: 'auto', bottom: `${_placeDistanceY}p`, left: `${_placeDistanceX}px`, right: 'auto' };
    default:
      return { top: 'auto', bottom: 'auto', left: 'auto', right: 'auto' };
  }
};
