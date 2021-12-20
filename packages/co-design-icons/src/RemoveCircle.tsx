import * as React from 'react';
import { SVGProps } from 'react';

const SvgRemoveCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm5 11H7v-2h10v2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgRemoveCircle;
