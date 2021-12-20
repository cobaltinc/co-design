import * as React from 'react';
import { SVGProps } from 'react';

const SvgCallReceived = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M20 5.41 18.59 4 7 15.59V9H5v10h10v-2H8.41L20 5.41Z" fill="currentColor" />
  </svg>
);

export default SvgCallReceived;
