import * as React from 'react';
import { SVGProps } from 'react';

const SvgVideoPile = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 17v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1v1.5h.5v9h-15V17H4Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.5 6.5v9h15v-9h-15ZM3 5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H3Z"
      fill="currentColor"
    />
    <path d="m14 11-4.5 2.598V8.402L14 11Z" fill="currentColor" />
  </svg>
);

export default SvgVideoPile;
