import * as React from 'react';
import { SVGProps } from 'react';

const SvgVideo = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.667 6.75v10.5h16.666V6.75H3.667ZM3.11 5C2.497 5 2 5.522 2 6.167v11.666C2 18.478 2.497 19 3.111 19H20.89c.614 0 1.111-.522 1.111-1.167V6.167C22 5.522 21.503 5 20.889 5H3.11Z"
      fill="currentColor"
    />
    <path d="m15 12-4.5 2.598V9.402L15 12Z" fill="currentColor" />
  </svg>
);

export default SvgVideo;
