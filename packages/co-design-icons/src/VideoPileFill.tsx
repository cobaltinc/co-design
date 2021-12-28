import * as React from 'react';
import { SVGProps } from 'react';

const SvgVideoPileFill = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M5 18v2h17a1 1 0 0 0 1-1V8h-2v10H5Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2Zm6.5 8.598L13 10 8.5 7.402v5.196Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgVideoPileFill;
