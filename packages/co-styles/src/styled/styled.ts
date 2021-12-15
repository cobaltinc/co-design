// TODO: WIP
import { tags } from './utils';

const newStyled = (el: any) => {};

tags.forEach((tag) => {
  newStyled[tag] = newStyled(tag);
});

export default newStyled;
