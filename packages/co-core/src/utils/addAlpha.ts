import { toRgba } from './toRgba';

export const addAlpha = (hex: string, alpha: number) => {
  const { r, g, b } = toRgba(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
