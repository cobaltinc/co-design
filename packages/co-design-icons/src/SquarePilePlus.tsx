import * as React from 'react';
import { SVGProps } from 'react';

const SvgSquarePilePlus = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6Zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 14H8V4h12v12Zm-7-2h2v-3h3V9h-3V6h-2v3h-3v2h3v3Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSquarePilePlus;
