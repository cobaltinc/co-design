import { toRgba } from './rgba';

export const darken = (color: string, alpha: number) => {
  const { r, g, b, a } = toRgba(color);
  const f = 1 - alpha;

  const dark = (input: number) => Math.round(input * f);

  return `rgba(${dark(r)}, ${dark(g)}, ${dark(b)}, ${a})`;
};
