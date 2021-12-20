import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowAll = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.016 10.984h5.082l-1.525-1.525 1.443-1.443L22 12l-3.984 3.984-1.443-1.443 1.525-1.525h-5.082v5.082l1.525-1.525 1.443 1.443L12 22l-3.984-3.984 1.443-1.443 1.525 1.525v-5.082H5.902l1.525 1.525-1.443 1.443L2 12l3.984-3.984L7.427 9.46l-1.525 1.525h5.082V5.902L9.459 7.427 8.016 5.984 12 2l3.984 3.984-1.443 1.443-1.525-1.525v5.082Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgArrowAll;
