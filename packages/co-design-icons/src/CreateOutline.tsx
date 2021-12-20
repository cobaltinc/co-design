import * as React from 'react';
import { SVGProps } from 'react';

const SvgCreateOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25Zm2-.529V19h2.279L14 12.279 11.721 10 5 16.721Zm15.71-9.68a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83Z"
      fill="currentColor"
    />
    <path stroke="currentColor" d="M9 20.5h12" />
  </svg>
);

export default SvgCreateOutline;
