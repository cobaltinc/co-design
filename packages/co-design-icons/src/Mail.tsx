import * as React from 'react';
import { SVGProps } from 'react';

const SvgMail = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2ZM4 8l8 5 8-5v10H4V8Zm0-2 8 5 8-5H4Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgMail;
