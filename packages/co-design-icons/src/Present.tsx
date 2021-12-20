import * as React from 'react';
import { SVGProps } from 'react';

const SvgPresent = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M20.5 7.5h-17V17h17V7.5ZM2 6v12.5h20V6H2Z" fill="currentColor" />
    <path fillRule="evenodd" clipRule="evenodd" d="M16 12.5H3.5V17H16v-4.5ZM2 11v7.5h15.5V11H2Z" fill="currentColor" />
  </svg>
);

export default SvgPresent;
