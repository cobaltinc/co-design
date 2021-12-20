import * as React from 'react';
import { SVGProps } from 'react';

const SvgPrivate = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 5.444h-4c-.552 0-1 .548-1 1.223V10h6V6.667c0-.675-.448-1.223-1-1.223ZM7 6.667V10H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-1V6.667C17 4.642 15.657 3 14 3h-4C8.343 3 7 4.642 7 6.667ZM14 15a2 2 0 0 1-1.333 1.886v.78a.667.667 0 0 1-1.334 0v-.78A2 2 0 1 1 14 15Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgPrivate;
