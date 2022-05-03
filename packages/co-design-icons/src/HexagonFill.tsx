import * as React from 'react';
import { SVGProps } from 'react';

const SvgHexagonFill = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="m12 4 7 4v8l-7 4-7-4V8l7-4Z" fill="currentColor" />
  </svg>
);

export default SvgHexagonFill;
