import * as React from 'react';
import { SVGProps } from 'react';

const SvgArrowFatRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 8V4l8 8-8 8v-4H4V8h8Z" fill="currentColor" />
  </svg>
);

export default SvgArrowFatRight;
