import * as React from 'react';
import { SVGProps } from 'react';

const SvgAlarm = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m22 5.72-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72ZM7.88 3.39 6.6 1.86 2 5.71l1.29 1.53 4.59-3.85ZM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8ZM12 4a9 9 0 0 0-9 9c0 4.97 4.02 9 9 9a9 9 0 0 0 0-18Zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgAlarm;
