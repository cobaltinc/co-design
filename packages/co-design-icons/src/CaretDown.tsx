import * as React from 'react';
import { SVGProps } from 'react';

const SvgCaretDown = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="m7 10 5 5 5-5H7Z" fill="currentColor" />
  </svg>
);

export default SvgCaretDown;
