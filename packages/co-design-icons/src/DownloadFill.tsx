import * as React from 'react';
import { SVGProps } from 'react';

const SvgDownloadFill = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M19 9h-4V3H9v6H5l7 7 7-7ZM5 18v2h14v-2H5Z" fill="currentColor" />
  </svg>
);

export default SvgDownloadFill;
