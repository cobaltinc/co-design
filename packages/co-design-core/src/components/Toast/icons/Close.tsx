import React, { SVGProps } from 'react';

const Close = (props: SVGProps<SVGSVGElement>) => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M9.70833 0.883333L8.825 0L4.85833 3.975L0.883333 0L0 0.883333L3.975 4.85833L0 8.825L0.883333 9.70833L4.85833 5.74167L8.825 9.70833L9.70833 8.825L5.74167 4.85833L9.70833 0.883333Z"
      fill="currentFill"
    />
  </svg>
);

export default Close;
