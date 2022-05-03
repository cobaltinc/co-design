import * as React from 'react';
import { SVGProps } from 'react';

const SvgDiamondFill = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m12.484 4 8.486 8.485-8.486 8.486L4 12.485 12.484 4Z" fill="currentColor" />
  </svg>
);

export default SvgDiamondFill;
