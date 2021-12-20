import * as React from 'react';
import { SVGProps } from 'react';

const SvgDragHandle = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M20 9H4v2h16V9ZM4 15h16v-2H4v2Z" fill="currentColor" />
  </svg>
);

export default SvgDragHandle;
