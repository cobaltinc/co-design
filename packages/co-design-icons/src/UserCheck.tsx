import * as React from 'react';
import { SVGProps } from 'react';

const SvgUserCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 1.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 14.5h6a2.5 2.5 0 0 1 2.5 2.5v1H18v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1h1.5v-1A2.5 2.5 0 0 1 8 14.5Z"
      fill="#C4C4C4"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 18v-1a4.002 4.002 0 0 0-4-4H8a4.002 4.002 0 0 0-4 4v1h1.5v-1A2.5 2.5 0 0 1 8 14.5h6a2.5 2.5 0 0 1 2.5 2.5v1H18Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m22.111 14.415-1.171-1.076-6.02 5.523-2.37-2.176-1.179 1.074 3.548 3.258 7.192-6.603Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgUserCheck;
