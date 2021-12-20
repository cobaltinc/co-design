import * as React from 'react';
import { SVGProps } from 'react';

const SvgCallMade = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9Z" fill="currentColor" />
  </svg>
);

export default SvgCallMade;
