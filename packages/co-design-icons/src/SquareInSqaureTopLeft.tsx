import * as React from 'react';
import { SVGProps } from 'react';

const SvgSquareInSqaureTopLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3Zm18 2H3v14h18V5Z"
      fill="currentColor"
    />
    <path fill="currentColor" d="M5 7h8v6H5z" />
  </svg>
);

export default SvgSquareInSqaureTopLeft;
