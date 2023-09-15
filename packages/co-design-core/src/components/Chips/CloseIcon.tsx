import * as React from 'react';
import type { SVGProps } from 'react';

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M17.65 7.06 16.59 6l-4.76 4.77L7.06 6 6 7.06l4.77 4.77L6 16.59l1.06 1.06 4.77-4.76 4.76 4.76 1.06-1.06-4.76-4.76 4.76-4.77Z"
    />
  </svg>
);

export default CloseIcon;
