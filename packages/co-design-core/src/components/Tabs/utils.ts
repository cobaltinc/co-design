interface Clamp {
  value: number;
  min: number;
  max: number;
}

export const clamp = ({ value, min, max }: Clamp) => {
  return Math.min(Math.max(value, min), max);
};
