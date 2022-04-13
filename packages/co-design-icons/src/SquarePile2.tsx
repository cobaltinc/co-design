import * as React from 'react';
import { SVGProps } from 'react';

const SvgSquarePile2 = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M3 4a2 2 0 0 0-2 2v10h2V6h16V4H3Z" fill="currentColor" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 8a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2H7Zm14 2H7v8h14v-8Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgSquarePile2;
