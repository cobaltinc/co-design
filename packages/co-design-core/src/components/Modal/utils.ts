export const randomId = () => {
  return `co-${Math.random().toString(36).substr(2, 9)}`;
};
