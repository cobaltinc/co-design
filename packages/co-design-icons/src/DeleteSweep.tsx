import * as React from 'react';
import { SVGProps } from 'react';

const SvgDeleteSweep = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 16h4v2h-4v-2Zm0-8h7v2h-7V8Zm0 4h6v2h-6v-2ZM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10ZM14 5h-3l-1-1H6L5 5H2v2h12V5Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgDeleteSweep;
