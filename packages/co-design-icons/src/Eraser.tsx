import * as React from 'react';
import { SVGProps } from 'react';

const SvgEraser = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8.07 8.657 13.727 3a2 2 0 0 1 2.829 0l4.242 4.243a2 2 0 0 1 0 2.828l-5.657 5.657-7.07-7.071Z" fill="currentColor" />
    <path
      d="M3.121 16.435a1 1 0 0 1 0-1.414l5.664-5.664 5.657 5.657-5.664 5.664a1 1 0 0 1-1.414 0l-4.243-4.243Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgEraser;
