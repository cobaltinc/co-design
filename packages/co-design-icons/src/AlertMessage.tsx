import * as React from 'react';
import { SVGProps } from 'react';

const SvgAlertMessage = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm-7 9h-2V5h2v6Zm0 4h-2v-2h2v2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAlertMessage;
