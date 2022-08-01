import * as React from 'react';
import { SVGProps } from 'react';

const SvgDocument1 = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6Zm4 18H6V4h7v5h5v11Z" fill="currentColor" />
  </svg>
);

export default SvgDocument1;
