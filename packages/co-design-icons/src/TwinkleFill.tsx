import * as React from 'react';
import { SVGProps } from 'react';

const SvgTwinkleFill = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2 9.695 9.695 2 12l7.695 2.305L12 22l2.305-7.695L22 12l-7.695-2.305L12 2Z" fill="currentColor" />
  </svg>
);

export default SvgTwinkleFill;
