import { createStyles } from '@co-design/core';

interface BadgeStyles {
  size: 'small' | 'medium' | 'large' | number;
  contentLength: number;
  dot: boolean;
  placement: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  placeDistance: number;
  placeDistanceX: number;
  placeDistanceY: number;
}

export default createStyles((theme, { size, contentLength, dot, placement, placeDistance, placeDistanceX, placeDistanceY }: BadgeStyles) => {
  const sizes = dot
    ? {
        small: theme.foundations.tokens.size['size-03'],
        medium: theme.foundations.tokens.size['size-04'],
        large: theme.foundations.tokens.size['size-05'],
      }
    : {
        small: theme.foundations.tokens.size['size-07'],
        medium: theme.foundations.tokens.size['size-08'],
        large: theme.foundations.tokens.size['size-09'],
      };

  return {
    container: {
      display: 'inline-block',
      position: 'relative',
      verticalAlign: 'middle',
    },
    badge: {
      position: 'absolute',
      ...getPosition(placement, placeDistance, placeDistanceX, placeDistanceY),
      width: theme.fn.size({ size, sizes }) + (contentLength - 1) * 16,
      height: theme.fn.size({ size, sizes }),
      border: `1px solid ${theme.foundations.tokens.color.border['border-light']}`,
      borderRadius: theme.foundations.tokens.radius['radius-full'],
      backgroundColor: theme.foundations.tokens.color.bg['bg-critical'],
      padding: theme.foundations.tokens.size['size-02'],
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    dot: {
      padding: 0,
      width: theme.fn.size({ size, sizes }),
      height: theme.fn.size({ size, sizes }),
      border: `1px solid ${theme.foundations.tokens.color.border['border-light']}`,
      borderRadius: theme.foundations.tokens.radius['radius-full'],
    },
  };
});

const getPosition = (
  placement: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left',
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
      return { top: `${_placeDistanceY}px`, bottom: 'auto', left: 'auto', right: `${_placeDistanceX}px` };
  }
};
