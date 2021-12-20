import * as React from 'react';
import { SVGProps } from 'react';

const SvgImport = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 6.5h5a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V7a.5.5 0 0 1 .5-.5h5V5H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-5v1.5Z"
      fill="currentColor"
    />
    <path fillRule="evenodd" clipRule="evenodd" d="M8.41 10.09 7 11.5l5 5 5-5-1.41-1.41L13 12.67V3h-2v9.67l-2.59-2.58Z" fill="currentColor" />
  </svg>
);

export default SvgImport;
