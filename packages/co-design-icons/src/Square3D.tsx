import * as React from 'react';
import { SVGProps } from 'react';

const SvgSquare3D = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m21 7-9-5-6.04 3.357L3 7.002V17l.02.011L12 22l9-5V7ZM5.386 15.671V8.326l2.948-1.638L12 4.653 18.659 8.3 12 11.999v7.26l-6.614-3.587Zm13.225 0-4.225 2.346v-4.695l4.225-2.346v4.695Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSquare3D;
