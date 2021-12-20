import * as React from 'react';
import { SVGProps } from 'react';

const SvgIndeterminateCheckBox = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm-2 10H7v-2h10v2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgIndeterminateCheckBox;
