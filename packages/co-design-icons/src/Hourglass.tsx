import * as React from 'react';
import { SVGProps } from 'react';

const SvgHourglass = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6Zm10 14.5V20H8v-3.5l4-4 4 4Zm-4-5-4-4V4h8v3.5l-4 4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgHourglass;
