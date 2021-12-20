import * as React from 'react';
import { SVGProps } from 'react';

const SvgPlayArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M5 3v18l14.143-9L5 3Z" fill="currentColor" />
  </svg>
);

export default SvgPlayArrow;
