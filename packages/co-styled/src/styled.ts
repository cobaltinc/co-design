import styled from '@emotion/styled';
import { tags } from './utils';

const newStyled = (el: any) => {
  return styled(el);
};

tags.forEach((tag) => {
  newStyled[tag] = newStyled(tag);
});

export default newStyled;
