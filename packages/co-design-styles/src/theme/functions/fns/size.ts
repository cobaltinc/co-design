export interface GetSize {
  size: string | number;
  sizes: Record<string, any>;
}

export const size = (props: GetSize) => {
  if (typeof props.size === 'number') {
    return props.size;
  }

  return props.sizes[props.size] || props.size || props.sizes.medium;
};
