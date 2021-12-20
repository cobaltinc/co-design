import * as React from 'react';
import { SVGProps } from 'react';

const SvgSoundOff = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3 8.921v6.158h4l5 5.13V3.79L7 8.921H3Zm7-.174v6.506l-2.17-2.227H5v-2.052h2.83L10 8.747ZM16.5 12A4.631 4.631 0 0 0 14 7.864v8.261A4.604 4.604 0 0 0 16.5 12ZM14 3v2.114c2.89.883 5 3.633 5 6.886s-2.11 6.003-5 6.886V21c4.01-.934 7-4.608 7-9s-2.99-8.066-7-9Z"
      fill="currentColor"
    />
    <path fillRule="evenodd" clipRule="evenodd" d="M21.97 4.414 5 21.384l-1.414-1.413L20.556 3l1.415 1.414Z" fill="currentColor" />
  </svg>
);

export default SvgSoundOff;
