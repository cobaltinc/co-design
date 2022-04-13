import * as React from 'react';
import { SVGProps } from 'react';

const SvgInventory = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2Zm-1 18H5V9h14v11Zm1-13H4V4h16v3Z"
      fill="currentColor"
    />
    <path d="M15 12H9v2h6v-2Z" fill="currentColor" />
  </svg>
);

export default SvgInventory;
