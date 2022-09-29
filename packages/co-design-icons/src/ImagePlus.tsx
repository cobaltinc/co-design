import * as React from 'react';
import { SVGProps } from 'react';

const SvgImagePlus = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4 5H17V12H19V5C19 3.897 18.103 3 17 3H4C2.897 3 2 3.897 2 5V17C2 18.103 2.897 19 4 19H12V17H4V5Z" fill="currentColor" />
    <path d="M8 11L5 15H16L12 9L9 13L8 11Z" fill="currentColor" />
    <path d="M19 14H17V17H14V19H17V22H19V19H22V17H19V14Z" fill="currentColor" />
  </svg>
);

export default SvgImagePlus;
