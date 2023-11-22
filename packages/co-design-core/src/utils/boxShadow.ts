interface BoxShadowObject {
  radius: number;
  color: string;
  offsetX: number;
  offsetY: number;
  spread: number;
}

export const getBoxShadow = (boxShadowObject: BoxShadowObject) => {
  const { radius: blur, color, offsetX, offsetY, spread } = boxShadowObject;
  return `${offsetX}px ${offsetY}px ${blur}px ${spread}px ${color}`;
};
