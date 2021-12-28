import * as React from 'react';
import { SVGProps } from 'react';

const SvgChevronRightThin = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.647 12 8.824 6.177l.354-.354L15.354 12l-6.176 6.177-.354-.354L14.647 12Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgChevronRightThin;
