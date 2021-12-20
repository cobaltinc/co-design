import * as React from 'react';
import { SVGProps } from 'react';

const SvgShare = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m8.334 12.25 7.45-4.858c.488-.319.488-.835 0-1.153-.489-.319-1.28-.319-1.768 0l-8.333 5.435c-.245.159-.367.367-.367.576 0 .209.122.417.367.576l8.333 5.435c.488.319 1.28.319 1.768 0 .488-.318.488-.834 0-1.153l-7.45-4.858Z"
      fill="currentColor"
    />
    <path
      d="M18.648 6a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM18.648 18.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM8.648 11.833a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgShare;
